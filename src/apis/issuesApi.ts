import { AxiosInstance } from 'axios';
import { env } from '../utils/env';
import { createAxiosInstance, createJwtAuthorization } from './axiosUtils';

export interface IssueResponse {
  id: number;
  number: number;
  title: string;
  body: string;
  user: {
    login: string;
    avatar_url: string;
  };
  comments: number;
  created_at: string;
}
export type IssuesSort = 'created' | 'updated' | 'comments';

export const GITHUB_API_URL = 'https://api.github.com';
export const GITHUB_ACCEPT = 'application/vnd.github+json';
export const GITHUB_OWNER_NAME = 'angular';
export const GITHUB_REPO_NAME = 'angular-cli';

const path = {
  issues: `/repos/${GITHUB_OWNER_NAME}/${GITHUB_REPO_NAME}/issues`,
};

class IssuesApi {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  getIssues = (
    sort: IssuesSort = 'comments',
    page: number = 1,
    per_page: number = 10
  ) => {
    return this.axiosInstance.get<IssueResponse[]>(path.issues, {
      params: {
        sort,
        page,
        per_page,
      },
    });
  };
}

const issuesApiInstance = createAxiosInstance(GITHUB_API_URL, {
  Accept: GITHUB_ACCEPT,
  Authorization: createJwtAuthorization(env.token),
});
const issuesApi = new IssuesApi(issuesApiInstance);
export { IssuesApi, issuesApi };
