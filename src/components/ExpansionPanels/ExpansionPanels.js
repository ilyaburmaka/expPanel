import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
const Div = styled.div`
    font-size: 30px;
    line-height: 34px;
    font-weight: 300;
    width:600px;
    height:40px;
    letter-spacing: 1px;
    display: block;
    background-color: #fefffa;
    margin: 0;
    cursor: pointer;
    ::after{
        float:right
        content: "↓";
        animation: ${rotate} 2s;
        animation-direction: reverse;
    }
`

const Panel = ({ header,handleTabChange }) => (
    <Div onClick={handleTabChange}>{header}</Div>
)

Panel.propTypes = {
    header: PropTypes.string.isRequired,
    handleTabChange: PropTypes.func.isRequired
}

export default Panel