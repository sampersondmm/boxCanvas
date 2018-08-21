import React, {Component} from 'react';
import CanvasTimeline from './CanvasTimeline';
import LandingPage from './LandingPage'
import {Link} from 'react-router-dom';

class Homepage extends Component {
  constructor(props){
    super(props)
  }


  render(){
    if(!this.props.currentUser.isAuthenticated){
      return(
        <div>
          <LandingPage />
        </div>
      )
    }

    return(
      <div>
        <CanvasTimeline/>
      </div>
    )

  }
}

export default Homepage;
