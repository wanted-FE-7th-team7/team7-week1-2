import { IssueResponse } from '../apis/issuesApi';
import { Issue } from '../models/issue';

export function parseIssue(issueResponse: IssueResponse): Issue {
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
