import React, {Component} from 'react';

class ColorDisplay extends Component {
  constructor(props){
    super(props)
  }
  handleDisplay = style => {
    if(this.props.colorStatus === 'background'){
      return <div style={style.displayBackground}></div>
    }
    if(this.props.colorStatus === 'shape' && this.props.shapeStatus === 'square'){
      return <div style={style.displaySquare}></div>
    }
    else if(this.props.colorStatus === 'shape' && this.props.shapeStatus === 'circle'){
      return <div style={style.displayCircle}></div>
    }
  }
  handleDisplayBars = style => {
    if(this.props.colorStatus === 'shape'){
      return (
        <div>
          <div style={style.redWrap}>
            <div style={style.redShapeInner}></div>
          </div>
          <div style={style.greenWrap}>
            <div style={style.greenShapeInner}></div>
          </div>
          <div style={style.blueWrap}>
            <div style={style.blueShapeInner}></div>
          </div>
          <div style={style.opacityWrap}>
            <div style={style.opacityInner}></div>
          </div>
        </div>
      );
    }
    if(this.props.colorStatus === 'background'){
      return (
        <div>
          <div style={style.redWrap}>
            <div style={style.redBackgroundInner}></div>
          </div>
          <div style={style.greenWrap}>
            <div style={style.greenBackgroundInner}></div>
          </div>
          <div style={style.blueWrap}>
            <div style={style.blueBackgroundInner}></div>
          </div>
        </div>
      );
    }
  }
  render(){
    const style = {
      displayWrap: {
        height:'80px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
      },
      hidden: {
        display:'none',
      },
      displaySquare: {
        width:'4vw',
        height:'4vw',
        border:'2px solid black',
        position:'relative',
        backgroundColor:'rgba('+this.props.colorArrShape[0]+','+this.props.colorArrShape[1]+','+this.props.colorArrShape[2]+','+this.props.colorArrShape[3]+')',
      },
      displayCircle: {
        width:'4vw',
        height:'4vw',
        border:'2px solid black',
        position:'relative',
        borderRadius:'50%',
        backgroundColor:'rgba('+this.props.colorArrShape[0]+','+this.props.colorArrShape[1]+','+this.props.colorArrShape[2]+','+this.props.colorArrShape[3]+')',
      },
      displayBackground: {
        width:'100%',
        height:'80px',
        border:'2px solid black',
        position:'relative',
        backgroundColor:'rgb('+this.props.colorArrBackground[0]+','+this.props.colorArrBackground[1]+','+this.props.colorArrBackground[2]+')',
      },
      redWrap: {
        border:'2px solid rgb(255,0,0)',
        width:'100%',
        height:'15px',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
      },
      greenWrap: {
        border:'2px solid rgb(0,255,0)',
        width:'100%',
        height:'15px',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
      },
      blueWrap: {
        border:'2px solid rgb(0,0,255)',
        width:'100%',
        height:'15px',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
      },
      opacityWrap: {
        border:'2px solid rgb(255,255,255)',
        width:'100%',
        height:'15px',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
      },
      redShapeInner: {
        height:'100%',
        width:this.props.colorArrShape[0] / 2.55 + '%',
        backgroundColor:'rgb(255,0,0)'
      },
      greenShapeInner: {
        height:'100%',
        width:this.props.colorArrShape[1] / 2.55 + '%',
        backgroundColor:'rgb(0,255,0)'
      },
      blueShapeInner: {
        height:'100%',
        width:this.props.colorArrShape[2] / 2.55 + '%',
        backgroundColor:'rgb(0,0,255)'
      },
      opacityInner: {
        height:'100%',
        width:(this.props.colorArrShape[3] * -100 + 100) + '%',
        backgroundColor:'rgb(255,255,255)'
      },
      redBackgroundInner: {
        height:'100%',
        width:this.props.colorArrBackground[0]/2.55 + '%',
        backgroundColor:'rgb(255,0,0)'
      },
      greenBackgroundInner: {
        height:'100%',
        width:this.props.colorArrBackground[1]/2.55 + '%',
        backgroundColor:'rgb(0,255,0)'
      },
      blueBackgroundInner: {
        height:'100%',
        width:this.props.colorArrBackground[2] / 2.55 + '%',
        backgroundColor:'rgb(0,0,255)'
      }
    }
    return(
      <div>
        <div style={style.displayWrap}>
          {this.handleDisplay(style)}
        </div>
        <div style={style.colorBars}>
            {this.handleDisplayBars(style)}
        </div>
      </div>
    );
  }
}

export default ColorDisplay;
