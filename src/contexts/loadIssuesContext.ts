import { createContext } from 'react';

export type loadIssuesContextValue = () => Promise<void>;
export const loadIssuesContext = createContext<loadIssuesContextValue>(
  async () => {}
);
