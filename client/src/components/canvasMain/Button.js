import React, {Component} from 'react';

class Button extends Component {
  constructor(props){
    super(props)
    this.state = {
      hover: false,
    }
  }
  hoverOn = () => {
    this.setState({
      hover: true,
    })
  }
  hoverOff = () => {
    this.setState({
      hover: false,
    })
  }
  render(){
    const style = {
      main: {
        listStyle: 'none',
        display:'flex',
        alignItems:'center',
        backgroundColor:'black',
        color:'rgb(250,250,240)',
        borderBottom:'.5px solid rgb(100,100,100)',
        width:'100%',
        fontSize:'15px',
        fontWeight:'lighter',
        padding:'7px 10px',
        position:'relative',
      },
      mainHover: {
        listStyle: 'none',
        display:'flex',
        alignItems:'center',
        backgroundColor:'black',
        color:'rgb(250,250,240)',
        borderBottom:'.5px solid rgb(100,100,100)',
        width:'100%',
        fontSize:'15px',
        fontWeight:'lighter',
        padding:'7px 10px',
        position:'relative',
        borderRight: '3px solid yellow',
        cursor:'pointer'
      }
    }
    return(
      <div
        style={this.state.hover ? style.mainHover : style.main}
        onMouseEnter={this.hoverOn}
        onMouseLeave={this.hoverOff}
        onClick={this.props.name === 'Save' ? this.props.submitCanvas : this.props.clearCanvas}
        onClick={this.props.name === 'Color' ? this.props.colorToggleHandler : null}
        onClick={this.props.name === 'Shape' ? this.props.shapeToggleHandler : null}
      >
        {this.props.name}
      </div>
    );
  }
}

export default Button;
