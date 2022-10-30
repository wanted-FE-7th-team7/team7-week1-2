import styled from 'styled-components';
import Board from '../components/Board';

function BoardPage() {
  return (
    <BoardLayout>
      <Board />
    </BoardLayout>
  );
}

const BoardLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default BoardPage;
