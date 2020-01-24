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
export const Sections = styled.div`
  padding: 60px 0;
  position: relative;
  overflow-x: hidden;
`

export const StudentHacks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px;
`

export const StudentEvents = styled.div`
  flex-basis: 50%;
`