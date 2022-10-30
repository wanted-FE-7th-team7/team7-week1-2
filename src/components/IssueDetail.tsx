// @flow
import { IssueItem } from './IssueItem';
import ReactMarkDown from 'react-markdown';
import styled from 'styled-components';
import { useLocation } from 'react-router';

export function IssueDetail() {
  const location = useLocation();

  const { state: issue } = location.state;

  return (
    <section>
      <S.IssueDetailHeader>
        <img src={issue?.user?.profile_url} alt={issue?.user?.name} />
        <IssueItem issue={issue} />
      </S.IssueDetailHeader>
      <ReactMarkDown>{issue.body}</ReactMarkDown>
    </section>
  );
}

const S = {
  IssueDetailHeader: styled.div`
    & {
      display: flex;
      gap: 0.5rem;
      width: 100%;
    }

    & > img {
      width: 3rem;
      height: 3rem;
    }
  `,
};
