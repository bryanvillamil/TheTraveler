import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.333%;
  padding: 5px;
  ${breakpoint('tablet')`
    width: 20%;
  `};
  ${breakpoint('desktop')`
    width: 14.28%;
  `};
  .boxPhoto {
    position: relative;
    overflow: hidden;
    display: flex;
    transition: all 0.5s;
    cursor: pointer;
    &__image {
      img {
        width: 100%;
        object-fit: cover;
      }
    }
    &__desc {
      position: absolute;
      top: -100%;
      left: 0;
      transition: all 0.5s;
      background: rgba(0, 0, 0, 0.5);
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        color: #fff;
      }
    }
    &:hover {
      .boxPhoto__desc {
        top: 0;
      }
    }
  }
`;
