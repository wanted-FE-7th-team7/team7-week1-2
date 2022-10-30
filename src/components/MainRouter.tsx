// @flow
import * as React from 'react';
import { Route, Routes } from 'react-router';
import { ErrorPage } from '../pages/ErrorPage';
import { IssueLayout } from './IssueLayout';

export function MainRouter() {
  return (
    <Routes>
      <Route path="/*" element={<IssueLayout />} />
      <Route path="/error" element={<ErrorPage />} />
    </Routes>
  );
}
