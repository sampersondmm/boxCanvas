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
  handleProps = () => {
    if(this.props.name === 'Save'){
      this.props.submitCanvas();
    }
    if(this.props.name === 'Clear'){
      this.props.clearCanvas();
    }
    if(this.props.name === 'Instructions'){
      this.props.instMenuHandler();
    }
    if(this.props.name === 'Color'){
      this.props.clearMenus();
      this.props.colorMenuHandler();
    }
    if(this.props.name === 'Shape'){
      this.props.clearMenus();
      this.props.shapeMenuHandler();
    }
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
        onClick={this.handleProps}
      >
        {this.props.name}
      </div>
    );
  }
}

export default Button;
