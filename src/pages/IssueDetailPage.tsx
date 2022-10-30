// @flow
import { useParams } from 'react-router';
import { useIssues } from '../hooks/useIssues';
type Props = {};
export function IssueDetailPage(props: Props) {
  const issues = useIssues();
  const params = useParams();

  const [issue] = issues.filter(
    issue => issue.number === Number(params?.number)
  );

  return <div>{issue.body}</div>;
}
