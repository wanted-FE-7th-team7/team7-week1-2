// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Issue } from '../models/issue';

interface Props {
  issue: Issue;
}

export function _IssueItem({ issue }: Props) {
  return (
    <S.IssueItem>
      <Link to={`/${issue.id}`}>
        <div className="left">
          <div className="leftTop">
            <div>#{issue.number}</div>
            <div>{issue.title}</div>
          </div>
          <div className="leftBottom">
            <div>작성자: {issue.user.name},</div>
            <div>작성일: {issue.created_at}</div>
          </div>
        </div>
        <div className="right">
          <div>코멘트: {issue.comments}</div>
        </div>
      </Link>
    </S.IssueItem>
  );
}

const S = {
  IssueItem: styled.li`
    & {
      all: unset;
      font-size: 1rem;
      border-style: solid;
      border-width: 0px;
      border-bottom-width: 0.1rem;
    }

    & a {
      all: unset;
      cursor: pointer;
      display: flex;
    }

    & div.left {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.3rem;
    }

    & div.right {
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & div.leftTop {
      display: flex;
      gap: 0.5rem;
      font-size: 1.2em;
    }

    & div.leftBottom {
      display: flex;
      gap: 0.5rem;
    }
  `,
};

const IssueItem = React.memo(_IssueItem);
export { IssueItem };
