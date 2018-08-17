import React, {Component} from 'react';
import Moment from 'react-moment';
import {Link,Redirect,Route} from 'react-router-dom';
import DefaultProfileImageUrl from '../images/default-image.jpg';

class CanvasItem extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.createCanvas();
  }
  createCanvas = () => {
    const {canvasData} = this.props;
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
  handleRemove = () => {
    this.props.removeCanvas()
      .then(res => this.props.reRender(res))
  }
  render(){
    const style = {
      main: {
        position:'relative',
        marginTop:'30px',
      },
      link: {
        textDecoration:'none',
        color:'black'
      },
      hidden: {
        display:'none',
      },
      delete:{
        height:'30px',
        width:'30px',
        border:'3px solid rgb(50,50,50)',
        borderRadius:'50%',
        backgroundColor:'rgb(150,150,150)',
        zIndex:'2',
        position:'absolute',
        top:'10px',
        right:'10px',
      },
      canvasWrap: {
        display:'flex',
      },
      canvas: {
        width:'45vw',
        height:'25vw',
      },
      infoWrap: {
        display:'flex',
        padding:'15px',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'rgb(230,230,230)'
      },
      username: {
        textDecoration:'none',
        color:'black',
        fontSize:'25px',
      }
    }
    return(
      <div style={style.main} name={this.props.username}>
        <div style={this.props.secure ? style.delete : style.hidden} onClick={this.handleRemove}></div>
        <div style={style.canvasWrap}>
          <canvas style={style.canvas} ref='canvas' onClick={this.props.handleView}/>
        </div>
        <div style={style.infoWrap}>
          <div style={style.username} onClick={this.props.handleUser} >{this.props.username}</div>
          <Moment format='Do MMM YYYY'>{this.props.date}</Moment>
        </div>
      </div>
    )
  }
}

export default CanvasItem;
