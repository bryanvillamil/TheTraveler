/**
 *
 * Loading
 *
 */

import React from 'react';
import ReactLoading from 'react-loading';

// import styled from 'styled-components';

function Loading() {
  const styles = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    margin: 'auto',
    width: 50,
    height: 50,
  };

  return <ReactLoading type="spin" color="#000" style={styles} />;
}

export default Loading;
