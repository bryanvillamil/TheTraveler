import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const ContentDate = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  ${breakpoint('tablet')`
    font-size: 16px;
  `};
  select {
    border: 1px solid #ccc;
    height: 35px;
    margin-right: 15px;
    width: 120px;
    &:focus {
      outline: none;
    }
    ${breakpoint('tablet')`
      width: 160px;
    `};
  }
  span {
    border-bottom: 1px solid #777;
    display: flex;
    align-items: center;
    color: #dc3545;
  }
`;
