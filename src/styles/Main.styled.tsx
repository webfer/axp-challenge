import styled from 'styled-components';

export const SearchBox = styled.div`
  position: relative;
  > div {
    > div {
      input {
        border: 1px solid #949494;
        border-radius: 2px;
        box-shadow: rgb(0 0 0 / 30%) 0px 1px 4px -1px;
        box-sizing: border-box;
        font-family: Roboto;
        font-size: 15px;
        font-weight: 300;
        height: 29px;
        margin-right: 10px;
        margin-top: 10px;
        padding: 0 11px 0 13px;
        position: absolute;
        text-overflow: ellipsis;
        width: 300px;
        z-index: 2;
      }
    }
  }
`;

export const Maps = styled.div`
  height: 100vh;
  overflow: hidden;
`;
