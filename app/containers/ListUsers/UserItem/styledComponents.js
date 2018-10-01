import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const BoxUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 40px;
  padding: 10px;
  .folder {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    .contentIcon {
      background: #bbb;
      border-radius: 50%;
      padding: 10px;
    }
  }
  .info {
    width: 18%;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      cursor: pointer;
      transition: all 0.5s;
      transform: scale(0.9);
      &:hover {
        transform: scale(1);
      }
    }
  }
  ${breakpoint('tablet')`
    text-align: initial;
    padding-bottom: 0;
  `};
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const Span = styled.span`
  display: flex;
  flex-direction: column;
`;
