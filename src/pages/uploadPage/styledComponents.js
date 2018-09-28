import styled from 'styled-components';

export const Title = styled.input`
  font-size: 70px;
  width: auto;
  color: blue;
  border: none;
  border-bottom: grey solid 1px;
  outline: none;
  text-align: center;
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

export const ThumbnailImg = styled.img`
  max-width: 600px;
  max-height: 1080px;
`;

export const ThumbnailDiv = styled.div`
  margin-top: 30px;
  height: 600px;
  width: 1080px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ThumbnailText = styled.div`
  color: white;
`;
