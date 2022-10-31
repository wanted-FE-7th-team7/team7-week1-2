import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { Issue } from '../interfaces/Issue';

interface Props {
  issue: Issue;
}

function IssueBody({ issue }: Props) {
  return (
    <StyledItem>
      <ReactMarkdown children={issue.body} />
    </StyledItem>
  );
}

export default IssueBody;

const StyledItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.25rem 1rem;
  margin-bottom: 0.5rem;
  background-color: rgba(250, 250, 250, 0.5);
  box-shadow: 1px 1px 1px 1px rgba(34, 36, 38, 0.05);
  border-radius: 10px;
`;
