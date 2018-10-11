import styled from 'styled-components';

export const BrowseWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
`;

export const Title = styled.div`
  font-size: 70px;
  color: white;
`;

export const BrowseGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const BrowseItem = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 30px 30px 30px 30px;
`;

export const BrowseItemThumbnail = styled.img`
  height: 200px;
  width: 300px;
  background-color: white;
  cursor: pointer;
  :hover {
    -webkit-filter: brightness(70%);
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -o-transition: all .5s ease;
    -ms-transition: all .5s ease;
    transition: all .5s ease;
  }
`;

export const BrowseItemAuthor = styled.div`
  color: grey;
  cursor: pointer;
  :hover {
    -webkit-filter: brightness(200%);
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -o-transition: all .5s ease;
    -ms-transition: all .5s ease;
    transition: all .5s ease;
  }
`;

export const BrowseItemTitle = styled.div`
  color: white;
  margin-top: 10px;
`;