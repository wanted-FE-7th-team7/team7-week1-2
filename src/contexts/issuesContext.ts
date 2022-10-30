import { createContext } from 'react';
import { Issue } from '../models/issue';

export type IssuesContextValue = Issue[];
export const issuesContext = createContext<IssuesContextValue>([]);
