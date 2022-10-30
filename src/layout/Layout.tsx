import styled from 'styled-components';
import { REPO, OWNER } from '../constants';
interface Props {
  children: JSX.Element;
}

export default function Layout({ children }: Props) {
  return (
    <S.Wrapper>
      <S.Layout>
        <S.Header>
          {OWNER} / {REPO}
        </S.Header>
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
    height: 10rem;
    display: flex;
    justify-content: center;
  `,
};
