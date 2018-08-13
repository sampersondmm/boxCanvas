import React, {Component} from 'react';

class ShapeToggle extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const style = {
      main: {
        position:'absolute',
        width:'15vw',
        padding:'10px',
        position:'absolute',
        left:'100%',
        top:'120px',
        backgroundColor:'rgb(50,50,50)',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
      }
    }
    return(
      <div style={style.main}>
        <div style={style.section}>
          <div style={style.square} onClick={this.props.changeShape}></div>
        </div>
        <hr style={style.hr}/>
        <div style={style.section}>
          <div style={style.circle} onClick={this.props.changeShape}></div>
        </div>
      </div>
    );
  }
}

export default ShapeToggle;
