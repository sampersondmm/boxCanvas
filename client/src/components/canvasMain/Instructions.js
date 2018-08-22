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
        position:'absolute',
        top:'15vh',
        left:'15vw',
      },
      mainInner: {
        width:'70vw',
        backgroundColor:'rgb(50,50,50)',
        height: '70vh',
        padding:'50px',
        overflow:'scroll',
        position:'absolute',
        bottom:'0',
      },
      hidden: {
        display:'none'
      },
      exit: {
        width:'40px',
        height:'40px',
        backgroundColor:'rgb(50,50,50)',
        border:'2px solid rgb(180,180,180)',
        borderRadius:'50%',
        position:'absolute',
        zIndex:'2',
        top:'15px',
        right:'15px',
      },
      crossOne: {
        position:'absolute',
        top:'3px',
        left:'15px',
        height:'30px',
        width:'5px',
        transformOrigin:'50% 50%',
        transform:'rotate(45deg)',
        backgroundColor:'rgb(180,180,180)',
      },
      crossTwo: {
        position:'absolute',
        top:'3px',
        left:'15px',
        height:'30px',
        width:'5px',
        transformOrigin:'50% 50%',
        transform:'rotate(-45deg)',
        backgroundColor:'rgb(180,180,180)',
      },
      header: {
        color:'rgb(180,180,180)',
        textAlign:'center',
        fontSize:'45px',
        fontWeight:'lighter',
        marginBottom:'30px',
      },
      p: {
        color:'rgb(180,180,180)',
        margin:'20px 0',
        fontWeight:'lighter',
      },
      pLabel: {
        fontSize:'20px',
        color:'rgb(220,220,180)',
        margin:'20px 0',
        fontWeight:'lighter',
      },
      pIndent: {
        color:'rgb(180,180,180)',
        margin:'20px 0',
        marginLeft:'20px',
        fontWeight:'lighter',
      }
    }
    return (
      <div style={this.props.instructionsVisible ? style.main : style.hidden}>
        <div style={style.exit} onClick={this.props.instructionsMenuHandler}>
          <div style={style.crossOne}></div>
          <div style={style.crossTwo}></div>
        </div>
        <div style={style.mainInner}>
          <h1 style={style.header}>Getting Started</h1>
          <p style={style.p}>To get started, click on the canvas. If you click on the sidepanel the canvas funtionality will become inactive. Make sure to click it again to be able to edit again.</p>
          <li style={style.pLabel}>Change Position:</li>
          <p style={style.pIndent}>To change position of the shape, use the arrow keys.</p>
          <li style={style.pLabel}>Change Size:</li>
          <p style={style.pIndent}>To change size, hold the 1 key down and press the right arrow to make the size increase, and left to make the size decrease.</p>
          <li style={style.pLabel}>Change Rotation:</li>
          <p style={style.pIndent}>To change rotation, hold the 2 key down and press the right arrow to make the shape rotate clockwise, and left to make the shape rotate counter clockwise.</p>
          <li style={style.pLabel}>Change Color:</li>
          <p style={style.pIndent}>Colors are set by combining red, green and blue colors. Any color possilbe can be created like this.<br/>
          - To change red, hold down Q and press the right arrow to increase red, and left to decrease red.<br/>
          - To change green, hold down W and press the right arrow to increase green, and left to decrease green.<br/>
          - To change blue, hold down E and press the right arrow to increase blue, and left to decrease blue.
          </p>
          <li style={style.pLabel}>Change Opacity:</li>
          <p style={style.pIndent}>To change opacity, hold down R and press the right arrow to increase opacity, and left to decrease opacity.</p>
          <li style={style.pLabel}>Changing Shapes:</li>
          <p style={style.pIndent}>To change between circles and squares click the shape tab in the side panel. A menu will appear allowing you to click on the shape you want to use.</p>
          <li style={style.pLabel}>Changing Background Color:</li>
          <p style={style.pIndent}>To change change the color of the background, click on the color tab in the side panel. A menu will apear allowing you to switch to the background. Once the background is selected, you can change the color just like you could with the shapes.</p>
          <li style={style.pLabel}>Slower Adjustments:</li>
          <p style={style.pIndent}>For fine-grain control over adjustments, you can hold the shift key to slow things down. This works when changing the position, size, and rotation of the shapes. Controls are the same for these, just make sure to hold the shift key down while adjusting.</p>
          <li style={style.pLabel}>Remove Last Shape:</li>
          <p style={style.pIndent}>To remove the last shape that was added just press z.</p>
          <li style={style.pLabel}>Reinsert Last Removed Shape:</li>
          <p style={style.pIndent}>To reinsert the last shape that removed just press x.</p>
          <li style={style.pLabel}>Clear Canvas:</li>
          <p style={style.pIndent}>To clear the canvas editor, click on the clear tab in the side panel.</p>
          <li style={style.pLabel}>Save Canvas:</li>
          <p style={style.pIndent}>To save the canvas, click on the save tab in the side panel.</p>
          <li style={style.pLabel}>Exit Canvas:</li>
          <p style={style.pIndent}>To exit the canvas editor, click on the exit tab in the side panel.</p>
        </div>
      </div>
    )
  }
}

export default Instructions;
