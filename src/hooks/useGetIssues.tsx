import { useEffect, useState } from 'react';
import { getIssues } from '../apis/main';
import { Issue } from '../interfaces';
import { useIssuesContext } from '../contexts/IssuesContext';

export default function useGetIssues(pageNumber: number) {
  //const [loading, setLoading] = useState(true);
  //const [hasMore, setHasMore] = useState(false);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [_, setContextIssues] = useIssuesContext();

  useEffect(() => {
    (async () => {
      const newIssues = await getIssues(pageNumber);
      setIssues(prevIssues => [...prevIssues, ...newIssues]);
      setContextIssues(prevIssues => [...prevIssues, ...newIssues]);
    })();
  }, [pageNumber]);

  return [issues];
}
