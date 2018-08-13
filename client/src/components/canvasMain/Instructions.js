import React from 'react';

const Instructions = (props) => {
  const style = {
    main: {
      width:'90%',
      backgroundColor:'rgb(50,50,50)',
      height: '800px',
      margin:'50px 0',
      padding:'50px',
    },
    header: {
      color:'white',
      textAlign:'center',
      fontSize:'45px',
      fontWeight:'lighter',
      margin:'20px 0',
    },
    p: {
      color:'white',
      margin:'20px 0',
    }
  }
  return (
    <div style={style.main}>
      <h1 style={style.header}>Getting Started</h1>
      <p style={style.p}>To get started, click on the canvas. A blue border on the canvas will appear when its active.</p>
      <li style={style.p}>Change Position: To change position, use the arrow keys.</li>
      <li style={style.p}>Change Size: To change size, hold the 1 key down and press the right arrow to make the size increase, and left to make the size decrease.</li>
      <li style={style.p}>Change Rotation: To change rotation, hold the 2 key down and press the right arrow to make the shape rotate clockwise, and left to make the shape rotate counter clockwise.</li>
    </div>
  )
}

export default Instructions;
