import AdBanner from '../components/AdBanner';
import IssueCard from '../components/IssueCard';
import { getIssues } from '../apis/main';
import { useEffect, useState } from 'react';
import { Issue } from '../interfaces';
export default function IssueListPage() {
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getIssues();
      setIssues(data);
    })();
  }, []);

  return (
    <>
      {issues.map(({ id, title, user, comments, created_at }: Issue) => (
        <IssueCard
          key={id}
          id={id}
          title={title}
          author={user.login}
          commentCount={comments}
          createdAt={created_at}
        />
      ))}
      <AdBanner />
    </>
  );
}
