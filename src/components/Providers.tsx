import * as React from 'react';
import { IssuesProvider } from '../contexts/IssuesProvider';

type Props = {
  children: React.ReactElement;
};

export function Providers({ children }: Props) {
  return <IssuesProvider>{children}</IssuesProvider>;
}
