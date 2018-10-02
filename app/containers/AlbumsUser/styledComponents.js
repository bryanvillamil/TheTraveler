import styled from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentAlbums = styled.div`
  background: #777;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 16px 8px;
`;

export const Container = styled.div`
  max-width: calc(1024px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0px 16px;
  flex-direction: column;
`;
