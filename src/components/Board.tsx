import React, { useEffect, useState } from 'react';
import BoardItem from './BoardItem';
import { getBoard } from '../apis/apiBoard';
import IsLoading from './IsLoading';

function Board() {
  const [issues, setIssues] = useState<any[]>([]);

  useEffect(() => {
    getBoard(setIssues);
  }, []);

  const isLoading = !issues;

  if (isLoading) {
    return <IsLoading />;
  }

  return (
    <div>
      {issues.map(issue => (
        <BoardItem key={issue.number} issue={issue} />
      ))}
    </div>
  );
}

export default Board;
