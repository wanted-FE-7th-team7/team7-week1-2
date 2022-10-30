import AdBanner from '../components/AdBanner';
import IssueCard from '../components/IssueCard';
import { useState, useRef, useCallback } from 'react';
import { Issue } from '../interfaces';
import useGetIssue from '../hooks/useGetIssues';
import { ISSUES_PER_PAGE } from '../constants';
import styled from 'styled-components';
export default function IssueListPage() {
  const [pageNumber, setPageNumber] = useState(1);

  const observer = useRef<IntersectionObserver | null>();
  const lastIssueElementRef = useCallback((node: HTMLDivElement | null) => {
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
    });
    if (node) {
      observer.current.observe(node);
    }
  }, []);

  const [issues, loading] = useGetIssue(pageNumber);
  return (
    <S.Wrapper>
      {issues?.map(({ id, title, user, comments, created_at }: Issue, idx) => {
        if (idx + 1 === ISSUES_PER_PAGE * pageNumber) {
          return (
            <div ref={lastIssueElementRef} key={id}>
              <IssueCard
                key={id}
                id={id}
                title={title}
                author={user.login}
                commentCount={comments}
                createdAt={created_at}
              />
            </div>
          );
        }
        return (
          <div key={id}>
            <IssueCard
              key={id}
              id={id}
              title={title}
              author={user.login}
              commentCount={comments}
              createdAt={created_at}
            />
          </div>
        );
      })}
      <AdBanner />
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    overflow: scroll;
  `,
};
