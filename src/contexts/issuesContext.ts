import { createContext } from 'react';
import { Issue } from '../models/issue';

export const issuesContext = createContext<{
  issues: Issue[];
  loadNextIssues: () => Promise<void>;
}>({ issues: [], loadNextIssues: async () => {} });
