import styled from 'styled-components';

function Header() {
  return (
    <StyledHeader>
      <h1>angular / angular-cli</h1>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  border-bottom: 1px solid rgba(0, 0, 128, 1);
`;
