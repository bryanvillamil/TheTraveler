import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const ContentSearchUsers = styled.div`
  width: 100%;
  .search-input {
    margin: 3.5em 1em 0;
    order: 2;
    ${breakpoint('tablet')`
      order: 1;
      margin: 1em 1em 0;
    `};
    input {
      height: 38px;
      border: 1px solid #ccc;
      padding: 5px;
      width: 250px;
      font-size: 1.6rem;
    }
  }
`;

export const SearchTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em;
  margin-bottom: 35px;
  flex-direction: column;
  ${breakpoint('tablet')`
    flex-direction: row;
    align-items: flex-end;
  `};
`;
