import styled from 'styled-components';
import { Link } from 'react-router-dom';

type IssueProps = {
  issue: any;
};

const BoardItem: React.FC<IssueProps> = ({ issue }) => {
  return (
    <BoardItemLayout>
      <div className="left">
        <Link className="title" to={`issues/${issue.number}`}>
          <h3>
            #{issue.number}, {issue.title}
          </h3>
        </Link>
        <div>
          작성자:{issue.user.login}, 작성일:{issue.created_at.slice(0, 10)}
        </div>
      </div>

      <div className="right">comment:{issue.comments}</div>
    </BoardItemLayout>
  );
};

const BoardItemLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: auto;
  width: 35rem;

  .right {
    display: flex;
    align-items: center;
  }

  .middle-line {
    border-top: solid 1px black;
    width: 35rem;
    margin: 1rem 0 1rem 0;
  }

  .title {
    color: black;
    text-decoration: none;
  }
`;

export default BoardItem;
