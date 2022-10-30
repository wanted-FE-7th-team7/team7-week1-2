import React, { useEffect, useState } from 'react';
import BoardItem from './BoardItem';
import { getBoard } from '../apis/apiBoard';

function Board() {
  const [issues, setIssues] = useState<any[]>([]);

  useEffect(() => {
    getBoard(setIssues);
  }, []);

  return (
    <div>
      {issues.map(issue => (
        <BoardItem key={issue.number} issue={issue} />
      ))}
    </div>
  );
}

export default Board;
