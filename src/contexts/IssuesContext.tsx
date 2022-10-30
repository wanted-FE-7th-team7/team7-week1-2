import React, { useContext, useState } from 'react';
import { Issue } from '../interfaces';

const IssuesContext = React.createContext<
  [Issue[], React.Dispatch<React.SetStateAction<Issue[]>>]
>([[], () => []]);
interface Props {
  children: JSX.Element;
}
export function IssuesProvider({ children }: Props) {
  const [issues, setIssues] = useState<Issue[]>([]);

  return (
    <IssuesContext.Provider value={[issues, setIssues]}>
      {children}
    </IssuesContext.Provider>
  );
}

export const useIssuesContext = () => {
  return useContext(IssuesContext);
};
