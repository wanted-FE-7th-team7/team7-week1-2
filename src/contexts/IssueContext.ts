import { createContext } from 'react';
import { Issue } from '../interfaces/Issue';

export interface IssueContextInterface {
  issueList: Issue[];
  isLoading: boolean;
  errors: boolean;
}

const initIssueContext = {
  issueList: [],
  isLoading: false,
  errors: false,
};

export const IssueContext =
  createContext<IssueContextInterface>(initIssueContext);
