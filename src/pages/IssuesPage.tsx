import { Dispatch, SetStateAction, useContext } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { IssueContext } from '../contexts/IssueContext';
import IssueItem from '../components/IssueItem';
import AdBanner from '../components/AdBanner';
import Error from '../components/Error';
import Loading from '../components/Loading';

function IssuesPage({
  setPage,
}: {
  setPage: Dispatch<SetStateAction<number>>;
}) {
  const { issueList, isLoading, errors } = useContext(IssueContext)!;
  const setObserveTarget = useIntersectionObserver(setPage);

  if (errors) {
    return <Error />;
  }

  return (
    <>
      <ul>
        {issueList &&
          issueList.map((issue, idx) => {
            return (
              <li key={issue.number} style={{ listStyle: 'none' }}>
                {idx === 4 && <AdBanner />}
                <IssueItem issue={issue} />
              </li>
            );
          })}
      </ul>
      <div ref={setObserveTarget as any} />

      {isLoading && <Loading />}
    </>
  );
}

export default IssuesPage;
