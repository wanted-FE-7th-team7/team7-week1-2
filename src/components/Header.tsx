import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <SHeaderLayout>
      <div>angular / angular-cli</div>
    </SHeaderLayout>
  );
}

const SHeaderLayout = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;

  position: sticky;

  top: 0;

  div {
    background-color: gray;
    width: 35rem;
    height: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Header;
