import React, {Component} from 'react';

class ColorMenu extends Component{
  constructor(props){
    super(props)
  }
  handleProps = (params = null) => {
    this.props.colorStatusHandler(params);
    this.props.colorMenuHandler();
  }
  render(){
    const style = {
      main: {
        position:'absolute',
        width:'15vw',
        padding:'10px',
        position:'absolute',
        left:'100%',
        top:'170px',
        backgroundColor:'rgb(50,50,50)',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
      },
      exit: {
        width:'20px',
        height:'20px',
        border:'1px solid rgb(100,100,100)',
        position:'absolute',
        right:'0',
        top:'0',
        zIndex:'2',
        cursor:'pointer',
        cross1: {
          width:'3px',
          height:'100%',
          background:'rgb(100,100,100)',
          transform:'rotate(45deg)',
          position:'absolute',
          left:'42%',
        },
        cross2: {
          width:'3px',
          height:'100%',
          background:'rgb(100,100,100)',
          transform:'rotate(-45deg)',
          position:'absolute',
          left:'42%',
        },
      },
      text: {
        color:'rgb(200,200,200)',
      },
      colorWrap: {
        width:'90%',
        height:'100px',
        border:'2px solid black',
        backgroundColor:'rgb(100,100,100)',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
      },
      colorShapeBorderOn: {
        width:'5vw',
        height:'5vw',
        backgroundColor:'rgb('+this.props.colorArrShape[0]+','+this.props.colorArrShape[1]+','+this.props.colorArrShape[2]+')',
        border:'2px solid yellow'
      },
      colorShapeBorderOff: {
        width:'5vw',
        height:'5vw',
        backgroundColor:'rgba('+this.props.colorArrShape[0]+','+this.props.colorArrShape[1]+','+this.props.colorArrShape[2]+','+this.props.opacity+')',
      },
      colorBackgroundBorderOn: {
        width:'100%',
        height:'100%',
        backgroundColor:'rgb('+this.props.colorArrBackground[0]+','+this.props.colorArrBackground[1]+','+this.props.colorArrBackground[2]+')',
        border:'2px solid yellow'
      },
      colorBackgroundBorderOff: {
        width:'100%',
        height:'100%',
        backgroundColor:'rgb('+this.props.colorArrBackground[0]+','+this.props.colorArrBackground[1]+','+this.props.colorArrBackground[2]+')',
      },
      hr: {
        width:'100%',
        margin:'5px 0',
        borderRadius:'5px',
      },
    }
    return(
      <div style={this.props.colorMenuVisible ? style.main : {...style.main, display:'none'}}>
        <div style={style.exit} onClick={this.props.colorMenuHandler}>
          <div style={style.exit.cross1}></div>
          <div style={style.exit.cross2}></div>
        </div>
        <p style={style.text}>Background</p>
        <div style={style.colorWrap}>
          <div style={this.props.colorStatus === 'shape' ? style.colorBackgroundBorderOff : style.colorBackgroundBorderOn} onClick={() => this.handleProps('background')}></div>
        </div>
        <hr style={style.hr}/>
        <p style={style.text}>Shape</p>
        <div style={style.colorWrap}>
          <div style={this.props.colorStatus === 'shape' ? style.colorShapeBorderOn : style.colorShapeBorderOff} onClick={() => this.handleProps('shape')}></div>
        </div>
      </div>
    );
  }
}

export default ColorMenu;
