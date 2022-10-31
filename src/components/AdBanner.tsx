import { memo } from 'react';
import styled from 'styled-components';
import { AD } from '../utils/variable';

function AdBanner() {
  return (
    <a href={AD.LINK_URL}>
      <StyledAdBanner src={AD.IMG_URL} />
    </a>
  );
}

export default memo(AdBanner);

const StyledAdBanner = styled.img`
  width: 100%;
  max-height: 5rem;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 1rem;
  margin-bottom: 0.5rem;
  background-color: rgba(250, 250, 250, 0.5);
  box-shadow: 1px 1px 1px 1px rgba(34, 36, 38, 0.05);
  border-radius: 10px;
  cursor: pointer;
`;
