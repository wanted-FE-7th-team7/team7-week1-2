import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { IssuesService } from '../apis/IssuesService';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Issue {
  number: number;
  title: string;
  user: IssueUser;
  created_at: string;
  comments: number;
  body: string;
}

interface IssueUser {
  login: string;
  avatar_url: string;
}

function IssuesPage() {
  const [issueList, setIssueList] = useState<Issue[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  const [page, setPage] = useState(1);

  const handleFetch = useCallback(async (page: number) => {
    setIsLoading(true);
    try {
      const data = await IssuesService.getIssues(page);
      setIssueList(prev => [...prev, ...data]);
    } catch (error) {
      setErrors(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    handleFetch(page);
  }, [page, handleFetch]);

  const setObserveTarget = useIntersectionObserver(setPage);

  if (errors) {
    return <p style={{ color: 'red' }}>got Error... refresh (cmd + r / f5)</p>;
  }

  return (
    <>
      <ul>
        {issueList &&
          issueList.map(
            ({ number, title, user, created_at, comments }, idx) => (
              <StyledItem key={number}>
                <p>
                  #{number} title: {title}
                </p>
                <p>
                  <span>작성자: {user.login}</span>
                  <span>작성일: {created_at}</span>
                  <span>코멘츠: {comments}</span>
                </p>
              </StyledItem>
            )
          )}
      </ul>
      {isLoading && <p>loading...</p>}

      <div ref={setObserveTarget as any} />
    </>
  );
}

export default IssuesPage;

const StyledItem = styled.div`
  padding: 0.25rem 2rem;
  margin-bottom: 0.5rem;
  background-color: rgba(250, 250, 250, 0.5);
  box-shadow: 1px 1px 1px 1px rgba(34, 36, 38, 0.05);
  border-radius: 10px;
`;
