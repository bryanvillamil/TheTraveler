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
  width: 98%;
  min-height: 300px;
  margin: 0 auto;
  padding: 15px;
  position: relative;
  ${breakpoint('tablet')`
    width: 500px;
  `};
  ${breakpoint('desktop')`
    width: 600px;
  `};
  .cerrar {
    position: absolute;
    right: -3%;
    top: -3%;
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
  .modal__content {
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      h4 {
        font-size: 13px;
        text-align: center;
        text-transform: uppercase;
        width: 95%;
        margin: 5px auto 10px;
        color: #4f9fcf;
        ${breakpoint('tablet')`
          font-size: 15px;
        `};
      }
    }
    .imgBg {
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;
