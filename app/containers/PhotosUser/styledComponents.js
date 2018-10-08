import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const ContentPhotos = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 5px;
`;

export const LinkBack = styled.div`
  display: flex;
  width: 95%;
  margin: 0 auto;
  padding-bottom: 20px;
  ${breakpoint('tablet')`
    width: 98%;
  `};
`;
