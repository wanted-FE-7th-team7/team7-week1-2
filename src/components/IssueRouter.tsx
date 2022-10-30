// @flow
import * as React from 'react';
import { Route, Routes } from 'react-router';
import { IssueDetailPage } from '../pages/IssueDetailPage';
import { IssuesPage } from '../pages/IssuesPage';

export function IssueRouter() {
  return (
    <Routes>
      <Route path="/" element={<IssuesPage />} />
      <Route path="/:number" element={<IssueDetailPage />} />
    </Routes>
  );
}
