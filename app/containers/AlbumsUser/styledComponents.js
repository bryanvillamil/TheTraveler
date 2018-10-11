import styled from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';

export const ContentAlbums = styled.div`
  background: #777;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 24px 8px 0px;
  margin-bottom: 15px;
`;

export const LinkBack = styled.div`
  display: flex;
  padding-bottom: 30px;
  a {
    transition: all 0.5s;
    &:hover {
      svg {
        transform: scale(1.1);
      }
    }
    svg {
      transition: all 0.5s;
    }
  }
`;

export const Container = styled.div`
  max-width: calc(1024px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0px 16px;
  flex-direction: column;
  position: relative;
`;
