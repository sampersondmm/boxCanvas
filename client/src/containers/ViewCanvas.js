import React, {Component} from 'react';
import {connect} from 'react-redux';

class ViewCanvas extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.createCanvas(this.props.currentCanvas)
  }
  createCanvas = (canvas) => {
    const canvasData = canvas.canvasData;
    const ctx = this.refs.canvas.getContext('2d');
    const colorBackground = canvasData[0];
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.beginPath();
    ctx.fillStyle = 'rgb('+colorBackground[0]+','+colorBackground[1]+','+colorBackground[2]+')'
    ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height)

    canvasData.forEach(function(el){
      if(el.shapeStatus === 'square'){
        let canvasFunction = (posX,posY,width,height,angle,colorShape,opacity) => {
          ctx.beginPath();
          ctx.fillStyle = 'rgba('+el.colorShape[0]+','+el.colorShape[1]+','+el.colorShape[2]+','+el.opacity+')';
          ctx.save();
          ctx.translate(el.posX, el.posY);
          ctx.rotate(el.angle * (Math.PI/180));
          ctx.fillRect(-el.width / 2,-el.height / 2,el.width,el.height);
          ctx.restore();
        }
        canvasFunction();
      }
      if(el.shapeStatus === 'circle'){
        let canvasFunction = (posX,posY,radius,color,opacity) => {
          ctx.beginPath();
          ctx.fillStyle = 'rgba('+el.colorShape[0]+','+el.colorShape[1]+','+el.colorShape[2]+','+el.opacity+')';
          ctx.arc(el.posX,el.posY,el.radius,0*Math.PI,2*Math.PI);
          ctx.fill();
        }
        canvasFunction();
      }
    });
  }
  render(){
    const style = {
      main: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
      },
      canvas:{
        width:'90vw',
        height:'50vw',
        margin:'50px',
      },
      button: {
        height:'30px',
        width:'90vw',
        backgroundColor:'rgb(50,50,50)',
        borderRadius:'3px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'100px',
        color:'rgb(230,230,230)'
      }
    }
    return(
      <div style={style.main}>
        <canvas style={style.canvas} ref='canvas'/>
        <div style={style.button} onClick={this.props.handleView}>RETURN</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    canvas: state.canvas,
    currentCanvas: state.currentCanvas
  }
}

export default connect(mapStateToProps)(ViewCanvas);
