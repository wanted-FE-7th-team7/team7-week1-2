// @flow
import * as React from 'react';

import { IssueRouter } from './IssueRouter';

export function IssueLayout() {
  return (
    <>
      <header>헤더 테스트</header>
      <main>
        <IssueRouter />
      </main>
      <footer>푸터 테스트</footer>
    </>
  );
}
