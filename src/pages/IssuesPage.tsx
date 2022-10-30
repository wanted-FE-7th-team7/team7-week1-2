import { Dispatch, SetStateAction, useContext } from 'react';
import styled from 'styled-components';
import { IssueContext, IssueContextInterface } from '../App';
import IssueItem from '../components/IssueItem';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { AD } from '../utils/variable';

function IssuesPage({
  setPage,
}: {
  setPage: Dispatch<SetStateAction<number>>;
}) {
  const { issueList, isLoading, errors }: IssueContextInterface =
    useContext(IssueContext)!;
  const setObserveTarget = useIntersectionObserver(setPage);

  if (errors) {
    return <p style={{ color: 'red' }}>got Error... refresh (cmd + r / f5)</p>;
  }

  return (
    <>
      <ul>
        {issueList &&
          issueList.map((issue, idx) => {
            return (
              <li key={issue.number} style={{ listStyle: 'none' }}>
                {idx === 4 && (
                  <a href={AD.LINK_URL}>
                    <StyledAdBanner src={AD.IMG_URL} />
                  </a>
                )}
                <IssueItem issue={issue} />
              </li>
            );
          })}
      </ul>
      {isLoading && <p>loading...</p>}

      <div ref={setObserveTarget as any} />
    </>
  );
}

export default IssuesPage;

const StyledAdBanner = styled.img`
  width: 100%;
  max-height: 5rem;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 1rem;
  margin-bottom: 0.5rem;
  background-color: rgba(250, 250, 250, 0.5);
  box-shadow: 1px 1px 1px 1px rgba(34, 36, 38, 0.05);
  border-radius: 10px;
  cursor: pointer;
`;
