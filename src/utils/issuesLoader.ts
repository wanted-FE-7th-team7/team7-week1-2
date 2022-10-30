import {
  IssueResponse,
  IssuesApi,
  issuesApi,
  IssuesSort,
} from '../apis/issuesApi';
import { Issue } from '../models/issue';

class IssuesLoader {
  private page: number;
  private perPage: number;
  private sort: IssuesSort;
  private issuesApi: IssuesApi;

  constructor(
    issuesApi: IssuesApi,
    perPage: number = 10,
    sort: IssuesSort = 'comments'
  ) {
    this.page = 0;
    this.perPage = perPage;
    this.sort = sort;
    this.issuesApi = issuesApi;
  }

  async getNextIssuesAsync() {
    const { data } = await this.issuesApi.getIssues(
      this.sort,
      ++this.page,
      this.perPage
    );
    return data.map(this.parseIssue);
  }

  private parseIssue(issueResponse: IssueResponse): Issue {
    return {
      id: issueResponse.id,
      number: issueResponse.number,
      title: issueResponse.title,
      body: issueResponse.body,
      comments: issueResponse.comments,
      created_at: issueResponse.created_at,
      user: {
        name: issueResponse.user.login,
        profile_url: issueResponse.user.avatar_url,
      },
    };
  }
}

const issuesLoader = new IssuesLoader(issuesApi);
export { issuesLoader };
