import { memo, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import { Issue } from '../interfaces/Issue';

interface Props {
  issue: Issue;
}

function IssueItem({ issue }: Props) {
  const { number, title, user, created_at, comments } = issue;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isDetailPage = useMemo(() => pathname !== '/', [pathname]);

  return (
    <StyledItem onClick={() => navigate(`/${number}`, { state: issue })}>
      <div>
        {isDetailPage && (
          <StyledAvatarImg src={user.avatar_url} alt="user profile img" />
        )}
      </div>
      <div>
        <p>
          #{number} title: {title}
        </p>
        <p>
          <span>작성자: {user.login}</span>
          <span>작성일: {created_at}</span>
          <span>코멘츠: {comments}</span>
        </p>
      </div>
    </StyledItem>
  );
}

export default memo(IssueItem);

export const StyledItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.25rem 1rem;
  margin-bottom: 0.5rem;
  background-color: rgba(250, 250, 250, 0.5);
  box-shadow: 1px 1px 1px 1px rgba(34, 36, 38, 0.05);
  border-radius: 10px;
  cursor: pointer;
`;

const StyledAvatarImg = styled.img`
  width: 3rem;
  border-radius: 50%;
  margin: 0.5rem;
`;
