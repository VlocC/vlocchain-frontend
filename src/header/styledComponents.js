import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: blue;
`;

export const LogoText = styled.div`
  color: white;
  font-weight: bold;
  font-size: 30px;
  padding: 0 30px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Button = styled.button`
  height: 100%;
  border: none;
  outline: none;
  background: ${props => props.isActive ? 'navy' : 'inherit'};
  color: white;
  font-weight: bold;
  font-size: 20px;
  padding: 0 15px;
  :hover {
    background-color: lightblue;
  }
`;
