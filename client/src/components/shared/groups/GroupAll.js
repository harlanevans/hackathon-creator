import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

class GroupAll extends Component {

  render(){
    return(
      <Card.Group itemsPerRow='3'>
        {
          this.props.groups.map(g =>
            <Card
              key={g.id}
            >
              {g.name}
            </Card>
            )
        }
      </Card.Group>
    )
  }
}

export default GroupAll