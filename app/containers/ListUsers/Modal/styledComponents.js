import styled from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';

export const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
`;

export const ModalStyle = styled.div`
  background-color: #fff;
  border-radius: 5px;
  width: 500px;
  min-height: 300px;
  margin: 0 auto;
  padding: 30px;
`;
