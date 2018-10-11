import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
  ${breakpoint('tablet')`
    padding: 50px;
  `};
`;

export const ModalStyle = styled.div`
  background-color: #fff;
  border-radius: 5px;
  width: 500px;
  min-height: 300px;
  margin: 0 auto;
  padding: 15px;
  position: relative;
  ${breakpoint('tablet')`
    padding: 30px;
  `};
  .cerrar {
    position: absolute;
    right: -3%;
    top: -5%;
    background: #fff;
    border-radius: 50%;
    padding: 2px;
    button {
      padding: 0;
      &:focus {
        outline: none;
      }
      svg {
        transition: all 0.5s;
        cursor: pointer;
      }
      &:hover {
        svg {
          transform: scale(1.1);
        }
      }
    }
  }

  .info {
    &__title {
      display: flex;
      justify-content: center;
      align-items: center;
      h3 {
        font-size: 15px;
        margin-bottom: 0;
        margin-top: 8px;
        color: #4f9fcf;
        ${breakpoint('tablet')`
          font-size: 17px;
        `};
      }
    }
    &__address {
      border-bottom: 1px solid #ccc;
      padding-bottom: 10px;
      h4 {
        margin-bottom: 5px;
        margin-top: 8px;
        font-size: 13px;
      }
      .content {
        display: flex;
        flex-direction: column;
        padding-left: 10px;
        span {
          font-size: 11px;
          strong {
            padding-right: 5px;
            font-size: 12px;
            color: #555;
          }
        }
      }
    }
    &__company {
      border-bottom: 1px solid #ccc;
      padding-bottom: 10px;
      margin-bottom: 8px;
      h4 {
        margin-bottom: 5px;
        margin-top: 8px;
        font-size: 13px;
      }
      .content {
        padding-left: 10px;
        span {
          font-size: 11px;
          strong {
            padding-right: 5px;
            font-size: 12px;
            color: #555;
          }
        }
      }
    }
    &__phone,
    &__userName,
    &__web {
      margin-bottom: 4px;
      span {
        font-size: 11px;
        strong {
          padding-right: 5px;
          font-size: 12px;
        }
      }
    }
  }
`;
