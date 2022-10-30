import { createContext } from 'react';

export type loadIssuesContextValue = () => Promise<boolean>;
export const loadIssuesContext = createContext<loadIssuesContextValue>(
  async () => Promise.resolve(false)
);
