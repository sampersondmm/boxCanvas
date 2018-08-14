import React, {Component} from 'react';

class Instructions extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const style = {
      main: {
        width:'70vw',
        backgroundColor:'rgb(50,50,50)',
        height: '70vh',
        margin:'0 auto',
        padding:'50px',
        position:'absolute',
        top:'15vh',
        left:'15vw',
        overflow:'scroll',
      },
      hidden: {
        display:'none'
      },
      exit: {
        width:'40px',
        height:'40px',
        backgroundColor:'rgb(50,50,50)',
        border:'2px solid rgb(100,100,100)',
        borderRadius:'50%',
        position:'sticky',
        top:'10px',
        left:'10px',
      },
      crossOne: {
        position:'absolute',
        top:'3px',
        left:'15px',
        height:'30px',
        width:'5px',
        transformOrigin:'50% 50%',
        transform:'rotate(45deg)',
        backgroundColor:'rgb(100,100,100)',
      },
      crossTwo: {
        position:'absolute',
        top:'3px',
        left:'15px',
        height:'30px',
        width:'5px',
        transformOrigin:'50% 50%',
        transform:'rotate(-45deg)',
        backgroundColor:'rgb(100,100,100)',
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
      <div style={this.props.instVisible ? style.main : style.hidden}>
        <div style={style.exit} onClick={this.props.instMenuHandler}>
          <div style={style.crossOne}></div>
          <div style={style.crossTwo}></div>
        </div>
        <h1 style={style.header}>Getting Started</h1>
        <p style={style.p}>To get started, click on the canvas. A blue border on the canvas will appear when its active.</p>
        <li style={style.p}>Change Position: To change position, use the arrow keys.</li>
        <li style={style.p}>Change Size: To change size, hold the 1 key down and press the right arrow to make the size increase, and left to make the size decrease.</li>
        <li style={style.p}>Change Rotation: To change rotation, hold the 2 key down and press the right arrow to make the shape rotate clockwise, and left to make the shape rotate counter clockwise.</li>
        <h1 style={style.header}>Getting Started</h1>
        <p style={style.p}>To get started, click on the canvas. A blue border on the canvas will appear when its active.</p>
        <li style={style.p}>Change Position: To change position, use the arrow keys.</li>
        <li style={style.p}>Change Size: To change size, hold the 1 key down and press the right arrow to make the size increase, and left to make the size decrease.</li>
        <li style={style.p}>Change Rotation: To change rotation, hold the 2 key down and press the right arrow to make the shape rotate clockwise, and left to make the shape rotate counter clockwise.</li>
        <h1 style={style.header}>Getting Started</h1>
        <p style={style.p}>To get started, click on the canvas. A blue border on the canvas will appear when its active.</p>
        <li style={style.p}>Change Position: To change position, use the arrow keys.</li>
        <li style={style.p}>Change Size: To change size, hold the 1 key down and press the right arrow to make the size increase, and left to make the size decrease.</li>
        <li style={style.p}>Change Rotation: To change rotation, hold the 2 key down and press the right arrow to make the shape rotate clockwise, and left to make the shape rotate counter clockwise.</li>
      </div>
    )
  }
}

export default Instructions;
