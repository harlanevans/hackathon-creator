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
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  `
  export const CoursesFlex = styled.div`
  width: 100%;
  flex: 60%;
  `
  export const TasksFlex = styled.div`
  flex: 30%;
  width: 100%;
`
// Course map container
export const StudentCourseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
  ` 
  // Individual Course
  export const StudentCourseFlex = styled.div`
  margin: 2em;
  border: solid 1px gray;
  border-radius: 5px;
  box-shadow: 5px 10px 8px 2px #bfbfbf;
  padding: 2em;
  width: 50%;
`
//Admin side Timer 
export const TimerFlex =styled.div`
 display: flex;
 justify-content: center;
 width: 100%;

 @media only screen and (max-width: 1100px) {
  display: block;
  }
`
//Student page Timer
export const StudentTimerFlex = styled.div`
  display: flex;
  justify-content: space-between;
  

  @media only screen and (max-width: 1100px) {
    display: block;
  
    }
`

export const AlignCenter = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`

export const BackBtn = styled.div`
  position: absolute;
  z-index: 8;
  margin: 10px 0;
  left: 50px;
`