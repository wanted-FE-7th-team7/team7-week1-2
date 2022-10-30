// @flow
import * as React from 'react';
import { GITHUB_OWNER_NAME, GITHUB_REPO_NAME } from '../apis/issuesApi';

export function IssueHeader() {
  return <div>{`${GITHUB_OWNER_NAME} / ${GITHUB_REPO_NAME}`}</div>;
}
