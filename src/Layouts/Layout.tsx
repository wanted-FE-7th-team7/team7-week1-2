import React from 'react';
import styled from 'styled-components';
import { PropsWithChildren } from 'react';
import Header from '../components/Header';

function Layout({ children }: PropsWithChildren) {
  return (
    <Wrapper>
      <StyledLayout>
        <Header />
        {children}
      </StyledLayout>
    </Wrapper>
  );
}

export default Layout;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLayout = styled.div`
  width: 40rem;
  height: 80vh;
  display: flex;
  flex-direction: column;
  background-color: #eeeeee;
  align-items: center;
`;
