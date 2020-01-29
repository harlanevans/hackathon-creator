import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Sections } from '../styled-components/Shared';


class Rubric extends Component {

  state = {
    rubric: ""
  }

  render() {
    const { rubric } = this.state
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

export default Rubric;