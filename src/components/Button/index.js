import styled from 'styled-components';

const Button = styled.button`
color: var(--primary);
border: 1px solid var(--primary);
background: var(--background);
box-sizing: border-box;
cursor: pointer;
padding: 16px 24px;
margin-right: ${
  (props) => (props.secondary ? '40px' : '')
};
margin-bottom: ${
  (props) => (props.secondary ? '20px' : '')
};
font-style: normal;
font-weight: bold;
font-size: 16px;
outline: none;
border-radius: 5px;
text-decoration: none;
text-align: center;
display: inline-block;
transition: opacity .3s;
&:hover,
&:focus {
opacity: .5;
/* }

@media(max-width: 800px){
        margin: 8px 0;
        width: 100%;
    } */
`;

export default Button;
