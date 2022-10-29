import styled from 'styled-components';

interface Props {
  id: number;
  title: string;
  author: string;
  createdAt: string;
  commentCount: number;
}

export default function IssueCard({
  id,
  title,
  author,
  createdAt,
  commentCount,
}: Props) {
  return <S.IssueWrapper />;
}

const S = {
  IssueWrapper: styled.div`
    width: 100%;
    height: 5rem;
    background-color: yellow;
  `,
};
