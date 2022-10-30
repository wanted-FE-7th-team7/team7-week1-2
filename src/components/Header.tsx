import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <SHeaderLayout>
      <h2>Angular / Angular-cli</h2>
    </SHeaderLayout>
  );
}

const SHeaderLayout = styled.div`
  display: flex;
  justify-content: center;

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
