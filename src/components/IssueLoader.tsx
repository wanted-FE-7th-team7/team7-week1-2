// @flow
import { AxiosError } from 'axios';
import * as React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { issuesApi } from '../apis/issuesApi';
import { useIssuesDispatch, useIssuesState } from '../hooks/useIssues';
import { parseIssue } from '../utils/parseIssue';

export function IssueLoader() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const page = useRef(0);

  const [isEnd, setIsEnd] = useState(false);
  const { isLoading } = useIssuesState();
  const dispatch = useIssuesDispatch();

  const onIntersect: IntersectionObserverCallback = useCallback(
    async ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        dispatch({ type: 'GET_ISSUES' });
        try {
          const response = await issuesApi.getIssues(
            'comments',
            ++page.current
          );
          dispatch({
            type: 'GET_ISSUES_SUCCESS',
            data: response.data.map(parseIssue),
          });
          if (response.data.length < 10) {
            setIsEnd(true);
          } else {
            observer.observe(entry.target);
          }
        } catch (e) {
          const axiosError = e as AxiosError;
          dispatch({ type: 'GET_ISSUES_ERROR', error: axiosError });
        }
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (divRef.current !== null) {
      observerRef.current = new IntersectionObserver(onIntersect);
      observerRef.current.observe(divRef.current);
      return () => observerRef.current?.disconnect();
    }
  }, [onIntersect]);

  if (isEnd) {
    return null;
  } else {
    return (
      <div ref={divRef}>
        {isLoading && <S.Loading>데이터를 불러오는 중입니다.</S.Loading>}
      </div>
    );
  }
}

const S = {
  Loading: styled.div`
    & {
      margin: 1rem;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      border-radius: 0.5rem;
      background-color: grey;
      color: white;
    }
  `,
};
