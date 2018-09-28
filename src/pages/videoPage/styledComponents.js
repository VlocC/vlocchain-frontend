import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 70px;
  width: auto;
  color: navy;
  border: none;
  border-bottom: grey solid 1px;
  outline: none;
  text-align: center;
`;

export const DescriptionDiv = styled.div`
  font-size: 18px;
  width: auto;
  color: navy;
  outline: none;
  text-align: left;
`;

export const ThumbnailImg = styled.img`
  max-width: 1080px;
  max-height: 600px;
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

export const CreatorDiv = styled.div`
  margin: 30px 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const CreatorImg = styled.img`
  margin-right: 10px;
  border-radius: 50%;
  height: 50px;
`;

export const SubContainer = styled.div`
  height: 600px;
  width: 1200px;
`;
