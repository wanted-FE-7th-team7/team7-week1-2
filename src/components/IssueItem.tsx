// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Issue } from '../models/issue';

interface Props {
  issue: Issue;
}

export function _IssueItem({ issue }: Props) {
  return (
    <li>
      <Link to={`/${issue.number}`}>
        <div>{issue.title}</div>
      </Link>
    </li>
  );
}

const IssueItem = React.memo(_IssueItem);
export { IssueItem };
