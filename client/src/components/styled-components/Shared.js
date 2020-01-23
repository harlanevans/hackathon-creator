import React from 'react';
import styled from 'styled-components';

export const ImgOverlay = styled.div`
  height: 100%;
  width: 100%;
  z-index: 2; 
  background-size: cover;
  opacity: 1;
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
  top: 0;
`

export const PrimaryBtn = styled.button`
  background-color: #6E54A3;
  color: #fff;
  padding: 10px;
  font-size: 12px;
  letter-spacing: 1.5px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #53407A;
  }
`

export const DefaultBtn = styled.button`
  background-color: #6E54A3;
  color: #fff;
  padding: 10px;
  font-size: 12px;
  letter-spacing: 1.5px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #53407A;
  }
`

export const PrimaryLink = styled.a`
  color: #6E54A3 !important;
  cursor: pointer;

  &:hover {
    color: #53407A !important;
  }
`