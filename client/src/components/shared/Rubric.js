import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Sections } from '../styled-components/Shared';


class Rubric extends Component {

render() {
    const { rubric } = this.props;
    const regex = /\/view/;
    const subst = "/preview";
    const result = rubric.replace(regex, subst);
    
    return(
      <>
      <Container>
      <Sections>
        <h1>Grading Rubric</h1>
        <iframe src={result} width="100%" height="600" title="rubric"></iframe>
      </Sections>
      </Container>
      </>
    )
  }
}
//"https://drive.google.com/file/d/1h8vrAUdPcQ0Op50aGhQU5Htbueaot4XG/preview"
//"https://drive.google.com/file/d/1h8vrAUdPcQ0Op50aGhQU5Htbueaot4XG/view"
export default Rubric;