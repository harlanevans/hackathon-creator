import React, { Component } from 'react';
import { Sections } from '../styled-components/Shared';


class Rubric extends Component {

  render() {
    const { rubric } = this.props
    const regex = /\/view/;
    const subst = "/preview";
    const result = rubric.replace(regex, subst);
    
    return(
      <>
      <Sections>
        <h1>Grading Rubric</h1>
        <iframe src={result} width="100%" height="600" title="rubric"></iframe>
      </Sections>
      </>
    )
  }
}

export default Rubric;




