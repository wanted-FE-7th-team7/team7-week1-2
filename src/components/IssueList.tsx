// @flow
import * as React from 'react';
import { useIssues } from '../hooks/useIssues';
import { Issue } from '../models/issue';
import { IssueItem } from './IssueItem';

export function IssueList() {
  const issues = useIssues();

  if (issues.length === 0) {
    return <div>데이터를 불러오고 있어요!</div>;
  }

  return (
    <ul>
      {issues.map((issue: Issue) => (
        <IssueItem issue={issue} key={issue.id} />
      ))}
    </ul>
  );
}
