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
  width: 100%;
  height: 80%;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLayout = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
