import AdBanner from '../components/AdBanner';
import IssueCard from '../components/IssueCard';
import { useState, useRef, useCallback } from 'react';
import { Issue } from '../interfaces';
import useGetIssues from '../hooks/useGetIssues';
import { ISSUES_PER_PAGE } from '../constants';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
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

  const [issues, loading] = useGetIssues(pageNumber);

  const navigate = useNavigate();
  const handleClickIssue = (id: number) => {
    navigate(`/${id}`);
  };

  return (
    <S.Wrapper>
      {issues?.map(
        ({ id, number, title, user, comments, created_at }: Issue, idx) => {
          if (idx + 1 === ISSUES_PER_PAGE * pageNumber) {
            return (
              <S.IssueWrapper
                ref={lastIssueElementRef}
                key={id}
                onClick={() => handleClickIssue(id)}
              >
                <IssueCard
                  number={number}
                  title={title}
                  author={user.login}
                  commentCount={comments}
                  createdAt={created_at}
                />
              </S.IssueWrapper>
            );
          }
          return (
            <S.IssueWrapper key={id} onClick={() => handleClickIssue(id)}>
              <IssueCard
                number={number}
                title={title}
                author={user.login}
                commentCount={comments}
                createdAt={created_at}
              />
            </S.IssueWrapper>
          );
        }
      )}
      <AdBanner />
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    overflow: scroll;
  `,
  IssueWrapper: styled.div`
    :hover {
      cursor: pointer;
    }
  `,
};
