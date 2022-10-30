import styled from 'styled-components';

interface Props {
  number: number;
  title: string;
  author: string;
  createdAt: string;
  commentCount: number;
}

export default function IssueCard({
  number,
  title,
  author,
  createdAt,
  commentCount,
}: Props) {
  return (
    <S.Wrapper>
      <S.IssueInfos>
        <S.IssueTitle>
          #{number} {title}
        </S.IssueTitle>
        <S.IssueInfo>
          작성자 : {author} 작성일 : {createdAt}
        </S.IssueInfo>
      </S.IssueInfos>
      <div>코멘트: {commentCount}</div>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    background-color: yellow;
    justify-content: space-between;
  `,
  IssueInfos: styled.div`
    display: flex;
    flex-direction: column;
  `,
  IssueTitle: styled.div``,
  IssueInfo: styled.div``,
};
