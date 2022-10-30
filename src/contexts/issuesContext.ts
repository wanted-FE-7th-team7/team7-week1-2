import { createContext } from 'react';
import { Issue } from '../models/issue';

export type IssueContextValue = [Issue[], () => Promise<void>];
export const issuesContext = createContext<IssueContextValue>([
  [],
  async () => {},
]);
