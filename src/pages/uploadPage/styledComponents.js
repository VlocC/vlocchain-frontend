import styled from 'styled-components';

export const Title = styled.input`
  font-size: 70px;
  width: auto;
  color: navy;
  border: none;
  border-bottom: grey solid 1px;
  outline: none;
  text-align: center;
`;

export const DescriptionDiv = styled.textarea`
  font-size: 18px;
  width: 100%;
  height: 500px;
  color: navy;
  outline: none;
  text-align: left;
`;

export const UploadPageContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const DropzoneContainer = styled.div`
  border: navy solid 4px;
  border-radius: 8px;
  height: 50px;
  width: 300px;
  color: lightblue;

  :hover {
    background: lightblue;
    color: navy
  }
`;

export const ThumbnailText = styled.div`
  color: white;
`;

export const ConfirmButton = styled.button`
  border: navy solid 4px;
  border-radius: 8px;
  padding: 20px 10px;
`;

export const VideoDiv = styled.div`
  margin-top: 30px;
  border: white solid 4px;
  width: 300px;
  height: 50px;
  cursor: pointer;
`;
