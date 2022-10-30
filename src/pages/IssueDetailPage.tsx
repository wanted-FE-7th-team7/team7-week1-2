import styled from 'styled-components';
import { useIssuesContext } from '../contexts/IssuesContext';

export default function IssueDetailPage() {
  const [issues] = useIssuesContext();
  console.log(issues);
  return <div>{issues[0].number}</div>;
}
