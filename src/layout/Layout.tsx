import styled from 'styled-components';
interface Props {
  header: string;
  children: JSX.Element;
}

export default function Layout({ header, children }: Props) {
  return (
    <S.Wrapper>
      <S.Layout>
        <S.Header>{header}</S.Header>
        {children}
      </S.Layout>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
  `,
  Layout: styled.div`
    width: 40rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #eeeeee;
  `,
  Header: styled.div`
    width: 100%;
    height: 5rem;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
