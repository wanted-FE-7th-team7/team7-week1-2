// @flow
import * as React from 'react';
import styled from 'styled-components';
import { GITHUB_OWNER_NAME, GITHUB_REPO_NAME } from '../apis/issuesApi';

export function IssueHeader() {
  return (
    <S.HeadTitle>{`${GITHUB_OWNER_NAME} / ${GITHUB_REPO_NAME}`}</S.HeadTitle>
  );
}

const S = {
  HeadTitle: styled.h1`
    & {
      all: unset;
      font-size: 4rem;
      font-weight: 500;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `,
};
