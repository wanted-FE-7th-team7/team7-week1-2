// @flow
import * as React from 'react';
import { issuesContext } from '../contexts/issuesContext';
import { Issue } from '../models/issue';
import { IssueItem } from './IssueItem';

export function IssueList() {
  const [issues] = React.useContext(issuesContext);

  return (
    <ul>
      {issues.map((issue: Issue) => (
        <IssueItem issue={issue} key={issue.id} />
      ))}
    </ul>
  );
}
