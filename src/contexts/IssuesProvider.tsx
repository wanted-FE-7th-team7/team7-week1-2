import { useCallback, useState } from 'react';

import { Issue } from '../models/issue';
import { issuesLoader } from '../utils/issuesLoader';
import { issuesContext as IssuesContext } from './issuesContext';
import { loadIssuesContext as LoadIssuesContext } from './loadIssuesContext';

interface Props {
  children: React.ReactElement;
}

function IssuesProvider({ children }: Props) {
  const [issues, setIssues] = useState<Issue[]>([]);

  const loadIssues = useCallback(async () => {
    const { isEnd, newIssues } = await issuesLoader.getNextIssuesAsync();
    setIssues(prevIssues => [...prevIssues, ...newIssues]);
    return isEnd;
  }, []);

  return (
    <IssuesContext.Provider value={issues}>
      <LoadIssuesContext.Provider value={loadIssues}>
        {children}
      </LoadIssuesContext.Provider>
    </IssuesContext.Provider>
  );
}

export { IssuesProvider };
