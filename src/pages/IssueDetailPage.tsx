// @flow

import { useEffect } from 'react';
import { IssueDetail } from '../components/IssueDetail';

export function IssueDetailPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <IssueDetail />;
}
