// @flow
import * as React from 'react';
import { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useLoadIssues } from '../hooks/useLoadIssues';

export function IssueLoader() {
  const loadIssues = useLoadIssues();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const [isEnd, setIsEnd] = React.useState(false);

  const onIntersect: IntersectionObserverCallback = useCallback(
    async ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        const isEnd = await loadIssues();
        if (isEnd === false) observer.observe(entry.target);
        setIsEnd(isEnd);
      }
    },
    [loadIssues]
  );

  useEffect(() => {
    if (divRef.current !== null) {
      observerRef.current = new IntersectionObserver(onIntersect, {
        threshold: 0.5,
      });
      observerRef.current.observe(divRef.current);
      return () => observerRef.current?.disconnect();
    }
  }, [onIntersect]);

  if (isEnd) return null;
  return <S.Loading ref={divRef}>데이터를 불러오는 중입니다.</S.Loading>;
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
