import { createContext } from 'react';
import { Issue } from '../interfaces/Issue';

export interface IssueContextInterface {
  issueList: Issue[];
  isLoading: boolean;
  errors: boolean;
}

export const IssueContext = createContext<IssueContextInterface | null>(null);
