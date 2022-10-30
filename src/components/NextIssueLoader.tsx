// @flow
import * as React from 'react';
import { useLoadIssues } from '../hooks/useLoadIssues';

export function NextIssueLoader() {
  const loadIssues = useLoadIssues();

  return (
    <button
      onClick={async () => {
        await loadIssues();
      }}
    >
      불러오기
    </button>
  );
}
