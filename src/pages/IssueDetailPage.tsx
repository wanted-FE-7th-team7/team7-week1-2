// @flow
import * as React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router';
import { issuesContext } from '../contexts/issuesContext';
type Props = {};
export function IssueDetailPage(props: Props) {
  const [issues] = useContext(issuesContext);

  const params = useParams();

  const [issue] = issues.filter(
    issue => issue.number === Number(params?.number)
  );

  return <div>{issue.body}</div>;
}
