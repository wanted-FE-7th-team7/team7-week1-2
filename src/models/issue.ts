export interface Issue {
  id: number;
  number: number;
  title: string;
  body: string;
  comments: number;
  created_at: string;
  user: {
    name: string;
    profile_url: string;
  };
}
