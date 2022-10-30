// @flow
import * as React from 'react';
import { issuesContext } from '../contexts/issuesContext';

export function NextIssueLoader() {
  const [, loadNextIssues] = React.useContext(issuesContext);

  return (
    <button
      onClick={async () => {
        await loadNextIssues();
      }}
    >
      불러오기
    </button>
  );
}
