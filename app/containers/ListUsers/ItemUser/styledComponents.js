import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const BoxUser = styled.div`
  // width: 100%;
  display: flex;
  margin: 1em;
  padding: 1em 0.8em;
  border: none;
  background: none;
  color: inherit;
  vertical-align: middle;
  position: relative;
  z-index: 1;
  -webkit-backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  background: #fff;
  color: #37474f;
  overflow: hidden;
  -webkit-transition: color 0.3s;
  transition: color 0.3s;
  ${breakpoint('tablet')`
    padding: 1em 2em;
  `};
  &:focus {
    outline: none;
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 100%;
    left: 0;
    z-index: -1;
    -webkit-transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
    -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
  }
  &:before {
    background: #dfdfdf;
  }
  &:after {
    background: #ccc;
  }
  &:hover {
    color: #fff;
    &:before,
    &:after {
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
    &:after {
      -webkit-transition-delay: 0.195s;
      transition-delay: 0.195s;
    }
    .folder {
      .contentIcon {
        background: #fff;
      }
    }
  }
  .folder {
    width: 40px;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${breakpoint('tablet')`
      width: 80px;
    `};
    .contentIcon {
      background: #bbb;
      border-radius: 50%;
      padding: 8px;
      transition: all 0.7s;
      cursor: pointer;
      &:hover {
        svg {
          transform: scale(1.1);
        }
      }
      ${breakpoint('tablet')`
        padding: 10px;
      `};
      svg {
        transition: all 0.5s;
        ${breakpoint('tablet')`
          height: 40px;
          width: 40px;
        `};
      }
    }
  }
  .info {
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${breakpoint('tablet')`
      width: 18%;
    `};
    &:focus {
      outline: none;
    }
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
    padding: 10px;
  `};
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  cursor: pointer;
`;

export const Span = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  ${breakpoint('tablet')`
    font-size: 16px;
  `};
`;
