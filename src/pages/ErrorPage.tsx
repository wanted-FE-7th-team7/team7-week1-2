// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
type Props = {};
export function ErrorPage(props: Props) {
  return (
    <div>
      <h1>에러가 발생했습니다.</h1>
      <Link to="/">홈으로 돌아가기</Link>
    </div>
  );
}
