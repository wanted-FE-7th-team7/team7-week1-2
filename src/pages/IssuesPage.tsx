// @flow
import * as React from 'react';
import { useEffect } from 'react';
import { IssueList } from '../components/IssueList';
import { IssueLoader } from '../components/IssueLoader';

export function IssuesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <IssueList />
      <IssueLoader />
    </>
  );
}
