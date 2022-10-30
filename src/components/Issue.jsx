import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getIssue } from '../apis/apiIssue';

function Issue() {
  const { number } = useParams();
  const [issueItem, setIssueItem] = useState({});

  useEffect(() => {
    getIssue(setIssueItem, number);
  }, []);

  return (
    <SDetailLayout>
      <div>
        <BoardItemLayout>
          <div className="left">
            <h3 className="title">
              #{issueItem.number}, {issueItem.title}
            </h3>
            <div>
              작성자:{}, 작성일:{}
            </div>
          </div>
          <div className="right">comment:{issueItem.comments}</div>
        </BoardItemLayout>
      </div>

      <div className="middle-line" />

      <div>
        <div className="body">{issueItem.body}</div>
      </div>
    </SDetailLayout>
  );
}

const BoardItemLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: 35rem;
  align-self: center;
  flex-direction: row;
  .title {
  }
`;

const SDetailLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35rem;

  .middle-line {
    border-top: solid 1px black;
    width: 35rem;
    margin: 1rem 0 1rem 0;
  }

  .body {
    width: 35rem;
  }
`;

export default Issue;
