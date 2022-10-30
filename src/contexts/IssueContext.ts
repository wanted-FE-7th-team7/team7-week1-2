import { Issue } from '../interfaces/Issue';

export interface IssueContextInterface {
  issueList: Issue[];
  isLoading: boolean;
  errors: boolean;
}
