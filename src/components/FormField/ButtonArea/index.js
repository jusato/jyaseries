import styled from 'styled-components';

const ButtonArea = styled.div`
    width: 100%;
    margin: 22px 0;
    margin-top: -10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media(max-width: 800px){
        flex-direction: column;
    }
`;

export default ButtonArea;
