import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const ContentUsers = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-bottom: 5rem;
  .search-input {
    display: flex;
    justify-content: center;
    ${breakpoint('tablet')`
      justify-content: initial;
    `};
  }
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em;
  ${breakpoint('tablet')`
    justify-content: flex-end;
  `};
`;
