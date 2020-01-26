import React, { Component } from 'react';

class Rubric extends Component {

  state = {
   }

 
  
  render() {
    const { rubric } = this.props
    const regex = /\/view/;
    const subst = "/preview";
    const result = rubric.replace(regex, subst);
    
    return(
      <>
        <iframe src={result} width="935" height="480"></iframe>
      </>
    )
  }
}






export default Rubric;




