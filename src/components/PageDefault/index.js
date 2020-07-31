import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';  //Permite fazer css dentro do javascript

const Main = styled.main `
    background-color: var(--black);
    color: var(--white);
    flex: 1; /* alinhar */
    padding-top: 50px;
    padding-right: 5%;
    padding-left: 5%;

`;
function PageDefault({ children }) { /* props */
    return (
        <> {/*  fragment */}
            <Menu />
                <Main>
                {children} {/*  {props.children} */}
                </Main>
            <Footer />        
        </>
    );
}

export default PageDefault;