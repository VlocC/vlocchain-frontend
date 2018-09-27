import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 70px;
  color: navy;
  font-weight: 700;
`;

export const ThumbnailImg = styled.img`
  max-width: 1200px;
  height: auto;
`;

export const CreatorDiv = styled.div`
  margin: 30px 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  min-width: 1000px;
  align-items: center;

`;

export const CreatorImg = styled.img`
  margin-right: 10px;
  border-radius: 50%;
  height: 50px;
`;
