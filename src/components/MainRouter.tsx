// @flow
import * as React from 'react';
import { Route, Routes } from 'react-router';
import { IssueLayout } from './IssueLayout';

export function MainRouter() {
  return (
    <Routes>
      <Route path="/*" element={<IssueLayout />} />
    </Routes>
  );
}
