import { useLocation } from 'react-router';
import IssueBody from '../components/IssueBody';
import IssueItem from '../components/IssueItem';

function DetailPage() {
  const { state } = useLocation();

  return (
    <>
      <IssueItem issue={state} />

      <IssueBody issue={state} />
    </>
  );
}

export default DetailPage;
