import { useEffect, useState } from 'react';
import { getIssues } from '../apis/main';
import { Issue } from '../interfaces';

export default function useGetIssue(pageNumber: number) {
  //const [loading, setLoading] = useState(true);
  //const [hasMore, setHasMore] = useState(false);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    (async () => {
      const newIssues = await getIssues(pageNumber);
      setIssues(prevIssues => [...prevIssues, ...newIssues]);
    })();
  }, [pageNumber]);

  return [issues];
}
