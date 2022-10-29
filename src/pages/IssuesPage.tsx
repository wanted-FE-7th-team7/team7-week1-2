import React, { useState } from 'react';
import { IssuesService } from '../apis/IssuesService';
import useFetch from '../hooks/useFetch';

interface Issue {
  number: number;
  title: string;
  user: IssueUser;
  created_at: string;
  comments: number;
  body: string;
}

interface IssueUser {
  login: string;
  avatar_url: string;
}
function IssuesPage() {
  const [issueList, setIssueList] = useState<Issue[]>();

  const { isLoading, errors } = useFetch(setIssueList, IssuesService.getIssues);
  if (errors)
    return <p style={{ color: 'red' }}>got Error... refresh (cmd + r / f5)</p>;
  if (isLoading) return <p>loading...</p>;

  return (
    <ul>
      {issueList &&
        issueList.map(({ number, title, user, created_at, comments, body }) => (
          <li key={number}>
            <p>
              #{number} title: {title}
            </p>
            <p>
              <span>작성자: {user.login}</span>
              <span>작성일: {created_at}</span> <span>코멘츠: {comments}</span>
            </p>
          </li>
        ))}
    </ul>
  );
}

export default IssuesPage;
