import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-top: 2px solid navy;
  border-bottom: 2px solid navy;
`;

export const LogoText = styled.div`
  color: navy;
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
  color: navy;
  font-weight: bold;
  font-size: 20px;
  padding: 0 15px;
  :hover {
    background-color: lightblue;
  }
`;

export const SearchBarWrapper = styled.div`
  border: 2px navy solid;
  border-radius: 5px;
  width: 400px;
  display: flex;
  height: 60%
  align-items: center;
`;

export const SearchBarInput = styled.input`
  outline: none;
  border: none;
  color: navy;
  width: 90%;
  background-color: inherit;
  font-size: 16px;
`;

// TODO make this a maginifier glass icon
export const SearchBarIcon = styled.div`
  color: navy;
  cursor: pointer;
`;