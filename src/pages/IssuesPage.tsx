// @flow
import * as React from 'react';
import { IssueList } from '../components/IssueList';
import { NextIssueLoader } from '../components/NextIssueLoader';

export function IssuesPage() {
  return (
    <>
      <NextIssueLoader />
      <IssueList />
    </>
  );
}
