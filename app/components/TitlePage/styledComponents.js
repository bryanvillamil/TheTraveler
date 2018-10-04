import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const TitleHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 5px 20px;
  .link {
    outline: none;
    text-decoration: none;
    position: relative;
    font-size: 2rem;
    line-height: 1;
    color: #9e9ba4;
    display: inline-block;
    cursor: pointer;
    ${breakpoint('tablet')`
      font-size: 3.2rem;
    `};
    ${breakpoint('desktop')`
      font-size: 4rem;
    `};
    /* Kukuri */
    &--kukuri {
      text-transform: uppercase;
      font-weight: 900;
      overflow: hidden;
      line-height: 0.75;
      color: #c5c2b8;
      &:after {
        content: '';
        position: absolute;
        height: 16px;
        width: 100%;
        top: 50%;
        margin-top: -8px;
        right: 0;
        background: #f9f9f9;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
        -webkit-transition: -webkit-transform 0.4s;
        transition: transform 0.4s;
        -webkit-transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
        transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
      }
      &:before {
        content: attr(data-letters);
        position: absolute;
        z-index: 2;
        overflow: hidden;
        color: #424242;
        white-space: nowrap;
        width: 0%;
        -webkit-transition: width 0.4s 0.3s;
        transition: width 0.4s 0.3s;
      }
      &:hover {
        color: #c5c2b8;
        &:after {
          -webkit-transform: translate3d(100%, 0, 0);
          transform: translate3d(100%, 0, 0);
        }
        &:before {
          width: 100%;
        }
      }
    }
  }
`;
