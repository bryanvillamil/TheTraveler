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
    background: #fff;
    padding: 15px;
    &__img {
      position: relative;
      img {
        width: 100%;
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
      span {
        width: 100%;
        font-size: 13px;
        display: flex;
      }
    }
  }
`;
