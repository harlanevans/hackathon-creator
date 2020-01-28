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
  transition: ease 0.3s;
  margin: 0 4px;

  &:hover {
    background-color: #53407A;
  }
`

export const DefaultBtn = styled.button`
  background-color: #e0e1e2;
  color: #444;
  padding: 10px;
  font-size: 12px;
  letter-spacing: 1.5px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  transition: ease 0.3s;

  &:hover {
    background-color: #cacbcd;
  }
`
export const GreenBtn = styled.button`
  background-color: #3aab3a;
  color: #fff;
  padding: 10px;
  font-size: 12px;
  letter-spacing: 1.5px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  transition: ease 0.3s;
  margin: 0 10px;

  &:hover {
    background-color: green;
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
export const Footer = styled.div`
  text-align: center;
  padding: 80px 0;
  color: #fff;
  background: #757575;
`
export const AdminWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
`
export const CoursesFlex = styled.div`
  flex-basis: 60%;
`
export const TasksFlex = styled.div`
  flex-basis: 30%;
`
export const StudentCourseWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  margin: 40px 20px;
`
export const StudentCourseFlex = styled.div`
  display: flex;
  flex-direction: column;
`

export const TextCenter = styled.h2`
  text-align: center;
  margin-top: 0 !important;
`