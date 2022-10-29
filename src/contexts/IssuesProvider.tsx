import { useCallback, useState } from 'react';

import { Issue } from '../models/issue';
import { issuesLoader } from '../utils/issuesLoader';
import { issuesContext as IssuesContext } from './issuesContext';

interface Props {
  children: React.ReactElement;
}

function IssuesProvider({ children }: Props) {
  const [issues, setIssues] = useState<Issue[]>([]);

  const loadNextIssues = useCallback(async () => {
    const data = await issuesLoader.getNextIssuesAsync();
    setIssues(prevData => [...prevData, ...data]);
  }, []);

  return (
    <IssuesContext.Provider value={{ issues, loadNextIssues }}>
      {children}
    </IssuesContext.Provider>
  );
}

export { IssuesProvider };
