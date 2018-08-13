import React from 'react';
import CanvasTimeline from './CanvasTimeline';

const Homepage = ({currentUser}) => {
  if(!currentUser.isAuthenticated){
    return(
      <h1>This is the landing page, you ARE NOT logged in</h1>
    )
  }
  return (
    <div>
      <CanvasTimeline />
    </div>
  )
}

export default Homepage;
