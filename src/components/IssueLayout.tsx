// @flow
import * as React from 'react';
import { IssueHeader } from './IssueHeader';

import { IssueRouter } from './IssueRouter';

export function IssueLayout() {
  return (
    <>
      <IssueHeader />
      <main>
        <IssueRouter />
      </main>
    </>
  );
}
