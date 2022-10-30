// @flow
import * as React from 'react';
import { useParams } from 'react-router';
import { useIssues } from '../hooks/useIssues';
import { IssueItem } from './IssueItem';
type Props = {};
export function IssueDetail(props: Props) {
  const issues = useIssues();
  const params = useParams();

  const [issue] = issues.filter(issue => issue.id === Number(params?.id));
  return (
    <section>
      <IssueItem issue={issue} />
      <div>{issue.body}</div>
    </section>
  );
}
