export interface Issue {
  number: number;
  title: string;
  user: IssueUser;
  created_at: string;
  comments: number;
  body: string;
}

export interface IssueUser {
  login: string;
  avatar_url: string;
}
