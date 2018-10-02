import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

export class Icons extends PureComponent {
  render() {
    const { iconName, width, height, backgroundColor } = this.props;

    switch (iconName) {
      case 'folder':
        return (
          <svg
            height={height}
            id="Layer_1"
            version="1.1"
            viewBox="0 0 512 512"
            width={width}
          >
            <g>
              <path
                d="M430.1,192H81.9c-17.7,0-18.6,9.2-17.6,20.5l13,183c0.9,11.2,3.5,20.5,21.1,20.5h316.2c18,0,20.1-9.2,21.1-20.5l12.1-185.3   C448.7,199,447.8,192,430.1,192z"
                fill={backgroundColor}
              />
              <g>
                <path
                  d="M426.2,143.3c-0.5-12.4-4.5-15.3-15.1-15.3c0,0-121.4,0-143.2,0c-21.8,0-24.4,0.3-40.9-17.4C213.3,95.8,218.7,96,190.4,96    c-22.6,0-75.3,0-75.3,0c-17.4,0-23.6-1.5-25.2,16.6c-1.5,16.7-5,57.2-5.5,63.4h343.4L426.2,143.3z"
                  fill={backgroundColor}
                />
              </g>
            </g>
          </svg>
        );
      case 'info':
        return (
          <svg
            height={height}
            id="Layer_1"
            version="1.1"
            viewBox="0 0 85 85"
            width={width}
          >
            <path
              d="M42.5,0.003C19.028,0.003,0,19.031,0,42.503s19.028,42.5,42.5,42.5S85,65.976,85,42.503S65.972,0.003,42.5,0.003z   M42.288,66.27c0,0-1.972,1.311-3.32,1.305c-0.12,0.055-0.191,0.087-0.191,0.087l0.003-0.087c-0.283-0.013-0.568-0.053-0.855-0.125  l-0.426-0.105c-2.354-0.584-3.6-2.918-3.014-5.271l3.277-13.211l1.479-5.967c1.376-5.54-4.363,1.178-5.54-1.374  c-0.777-1.687,4.464-5.227,8.293-7.896c0,0,1.97-1.309,3.319-1.304c0.121-0.056,0.192-0.087,0.192-0.087l-0.005,0.087  c0.285,0.013,0.57,0.053,0.857,0.124l0.426,0.106c2.354,0.584,3.788,2.965,3.204,5.318l-3.276,13.212l-1.482,5.967  c-1.374,5.54,4.27-1.204,5.446,1.351C51.452,60.085,46.116,63.601,42.288,66.27z M50.594,24.976  c-0.818,3.295-4.152,5.304-7.446,4.486c-3.296-0.818-5.305-4.151-4.487-7.447c0.818-3.296,4.152-5.304,7.446-4.486  C49.403,18.346,51.411,21.68,50.594,24.976z"
              fill={backgroundColor}
            />
          </svg>
        );
      case 'arrowForward':
        return (
          <svg
            height={height}
            id="Layer_1"
            enableBackground="new 0 0 512 512;"
            version="1.1"
            viewBox="0 0 512 512"
            width={width}
          >
            <polygon
              fill={backgroundColor}
              points="160,128.4 192.3,96 352,256 352,256 352,256 192.3,416 160,383.6 287.3,256 "
            />
          </svg>
        );
      case 'album':
        return (
          <svg
            height={height}
            id="Capa_1"
            version="1.1"
            viewBox="0 0 30 30"
            width={width}
          >
            <path
              d="M24.3,11.8c-0.1-0.2-0.4-0.3-0.6-0.3c-0.3,0-0.5,0.1-0.6,0.3l-3.7,5.1l-2.1-2.5c-0.1-0.2-0.4-0.3-0.6-0.3  c-0.2,0-0.4,0.1-0.6,0.3L9,23.2c-0.3,0.3-0.2,0.8,0.1,1.1c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.6-0.3l6.5-8.1l2.2,2.6  c0.1,0.2,0.4,0.3,0.6,0.3c0.2,0,0.4-0.1,0.6-0.3l3.6-5l2.4,3.5c0.2,0.3,0.7,0.4,1,0.2c0.3-0.2,0.4-0.7,0.2-1L24.3,11.8z M5.5,5.2H23  c0.4,0,0.8-0.3,0.8-0.8S23.4,3.7,23,3.7H5.5c-3.4,0-5.4,2-5.4,5.4v10.3c0,0.4,0.3,0.8,0.8,0.8s0.8-0.3,0.8-0.8V9.1  C1.6,6.5,2.9,5.2,5.5,5.2z M26.1,5.6H6c-2.1,0-3.8,1.7-3.8,3.8v13.2c0,2.1,1.7,3.8,3.8,3.8h20.1c2.1,0,3.8-1.7,3.8-3.8V9.4  C29.9,7.3,28.2,5.6,26.1,5.6z M28.4,22.6c0,1.2-1,2.3-2.3,2.3H6c-1.2,0-2.3-1-2.3-2.3V9.4c0-1.2,1-2.3,2.3-2.3h20.1  c1.2,0,2.3,1,2.3,2.3V22.6z M12.7,13.5c0-1.6-1.3-3-3-3c-1.6,0-3,1.3-3,3c0,1.6,1.3,3,3,3C11.4,16.5,12.7,15.1,12.7,13.5z M8.3,13.5  c0-0.8,0.7-1.5,1.5-1.5c0.8,0,1.5,0.7,1.5,1.5c0,0.8-0.7,1.5-1.5,1.5C9,15,8.3,14.3,8.3,13.5z"
              fill={backgroundColor}
            />
          </svg>
        );
      default:
        return null;
    }
  }
}

Icons.propTypes = {
  iconName: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
};

Icons.defaultProps = {
  iconName: '',
  backgroundColor: '#000',
  width: '20',
  height: '20',
};

export default Icons;
