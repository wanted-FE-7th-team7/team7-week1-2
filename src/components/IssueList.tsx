// @flow
import * as React from 'react';
import { useIssues } from '../hooks/useIssues';
import { Issue } from '../models/issue';
import { IssueItem } from './IssueItem';

export function IssueList() {
  const issues = useIssues();

  return (
    <ul>
      {issues.map((issue: Issue) => (
        <IssueItem issue={issue} key={issue.id} />
      ))}
    </ul>
  );
}
