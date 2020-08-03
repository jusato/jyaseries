import React from 'react';
import styled, { css } from 'styled-components'; // Permite fazer css dentro do javascript
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1; /* alinhar */
    padding-top: 50px;
    padding-right: 5%;
    padding-left: 5%;
    ${({ paddingAll }) => css`
        padding: ${paddingAll};
    `}

`;
function PageDefault({ children, paddingAll }) { /* props */
  return (
    <>
      {' '}
      {/*  fragment */}
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
        {' '}
        {/*  {props.children} */}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
