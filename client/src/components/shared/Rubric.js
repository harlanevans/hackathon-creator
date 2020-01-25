import React, { Component } from 'react';

class Rubric extends Component {
  state = { }

  handleRe = ( rubric, regex, str, subst ) => {
    regex = `/view`;
    str = `${rubric}`;
    subst = `/preview`;
  }
  
  handleReplace = (result, str, regex, subst) => {
   result = str.replace(regex, subst);
   console.log('Substitution result: ', result);
  }

  render() {
    const { rubric } = this.props
    return(
      <>
        <iframe src={rubric} width="935" height="480"></iframe>
      </>
    )
  }
}






export default Rubric;




