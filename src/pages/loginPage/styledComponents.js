import styled from 'styled-components';

export const LoginPageDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const ErrorBanner = styled.div`
  background-color: rgba(255,0,0,.3);
  color: white;
  width: 100%;
  text-align: center;
  height: 30px;

`;

export const Title = styled.div`
  font-size: 70px;
  color: blue;
`;

export const Logo = styled.img `
  height: 25%;
  min-width: 400px;
  width: 50%;
`
export const Input = styled.input `
  height: 25%;
  width: 50%;
  min-width: 400px;
`

export const FormDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  min-height: 200px;
`;

export const FieldDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
`;

export const InputField = styled.input`
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  flex: 0 0 41.666667%;
  max-width: 41.666667%;
`;

export const InputText = styled.div`
  padding-top: calc(.375rem + 1px);
  padding-bottom: calc(.375rem + 1px);
  padding-left: 20px;
  font-size: inherit;
  line-height: 1.5;
  color: white;
  text-align: center;
`;

export const Footer = styled.div`
  color: white;
  text-align:center;
  cursor: pointer;
`;
