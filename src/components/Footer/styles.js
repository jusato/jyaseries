import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary); 
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: var(--primary);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
