import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const ContenHeader = styled.div`
  display: flex;
  flex-direction: column;
  .carousel-slider {
    height: 350px;
    .slider-wrapper {
      height: 100%;
      .slider {
        height: 100%;
        .contentImg {
          height: 100%;
          img {
            object-fit: cover;
            object-position: center;
            height: 100%;
          }
        }
      }
    }
    ${breakpoint('tablet')`
      height: 400px;
    `} ${breakpoint('desktop')`
      height: 450px;
    `};
  }
`;
