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

export const SearchBarWrapper = styled.div`
  border: 2px white solid;
  border-radius: 5px;
  width: 400px;
  display: flex;
  height: 60%
  align-items: center;
`;

export const SearchBarInput = styled.input`
  outline: none;
  border: none;
  color: white;
  width: 90%;
  background-color: inherit;
  font-size: 16px;
`;

// TODO make this a maginifier glass icon
export const SearchBarIcon = styled.div`
  color: white;
  cursor: pointer;
`;