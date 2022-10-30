export interface Issue {
  id: number;
  number: number;
  title: string;
  user: {
    login: string;
  };
  comments: number;
  created_at: string;
}
