import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin-bottom: 25px;
  ${breakpoint('tablet')`
    width: 33.3333%;
  `};
  ${breakpoint('desktop')`
    width: 25%;
  `};
  .box {
    width: 90%;
    margin: 0 auto;
    padding: 15px;
    cursor: pointer;
    &:hover {
      .box__img {
        img {
          transform: scale(1.1);
          filter: grayscale(0);
        }
      }
    }
    button {
      cursor: pointer;
      padding: 0;
      &:focus {
        outline: none;
      }
    }
    &__img {
      position: relative;
      overflow: hidden;
      img {
        width: 100%;
        transition: all 0.5s;
        filter: grayscale(100%);
      }
    }
    &__icon {
      position: absolute;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    &__text {
      margin-top: 10px;
      background: #f8f8f8;
      height: 55px;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        width: 100%;
        font-size: 13px;
        display: flex;
        text-transform: capitalize;
      }
    }
  }
`;
