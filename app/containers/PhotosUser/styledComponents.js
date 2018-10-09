import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const ContentPhotos = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 5px;
`;

export const LinkBack = styled.div`
  display: flex;
  width: 95%;
  margin: 0 auto;
  padding-bottom: 30px;
  ${breakpoint('tablet')`
    width: 98%;
  `};
  a {
    transition: all 0.5s;
    text-decoration: none;
    &.urlPathHome {
      padding-right: 25px;
      position: relative;
      &:after {
        content: '/';
        display: flex;
        font-size: 28px;
        position: absolute;
        right: 4px;
        top: -7px;
        color: #000;
      }
    }
    &:hover {
      svg {
        transform: scale(1.1);
      }
    }
    svg {
      transition: all 0.5s;
    }
  }

  button {
    cursor: pointer;
    &:focus {
      outline: none;
    }
    &.urlPathAlbums {
      transition: all 0.5s;
      font-size: 16px;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2px 5px 0;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
