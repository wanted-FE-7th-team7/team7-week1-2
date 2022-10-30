// @flow
import * as React from 'react';
import { IssueList } from '../components/IssueList';
import { IssueLoader } from '../components/IssueLoader';

export function IssuesPage() {
  return (
    <>
      <IssueList />
      <IssueLoader />
    </>
  );
}
