// @flow
import styled from 'styled-components';
import { useIssuesValue } from '../hooks/useIssues';
import { Issue } from '../models/issue';
import { IssueItem } from './IssueItem';

export function IssueList() {
  const issues = useIssuesValue();

  if (issues === null) return null;

  return (
    <S.IssueList>
      {issues.map((issue: Issue, index) => (
        <IssueItem issue={issue} key={issue.id} index={index} />
      ))}
    </S.IssueList>
  );
}

const S = {
  IssueList: styled.ul`
    & {
      all: unset;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  `,
};
