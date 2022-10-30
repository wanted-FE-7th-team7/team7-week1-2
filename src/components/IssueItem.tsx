// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Issue } from '../models/issue';

interface Props {
  issue: Issue;
  index?: number;
}

export function _IssueItem({ issue, index }: Props) {
  return (
    <>
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
        <hr />
      </S.IssueItem>
      {index === 4 && (
        <S.Banner
          href="https://www.wanted.co.kr/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
            alt="wanted_logo"
          />
        </S.Banner>
      )}
    </>
  );
}

const S = {
  Banner: styled.a`
    & {
      border-style: solid;
      border-width: 0.1rem;
      border-color: black;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
    }

    & img {
      width: 100%;
      height: 3rem;
      object-fit: contain;
    }
  `,
  IssueItem: styled.li`
    & {
      all: unset;
      width: 100%;
      font-size: 1rem;
    }

    & hr {
      width: 100%;
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
