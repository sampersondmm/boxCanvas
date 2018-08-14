import React, {Component} from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import DefaultProfileImageUrl from '../images/default-image.jpg'

class CanvasItem extends Component {
  constructor(props){
    super(props)
  }
  createCanvas = () => {
    const ctx = this.refs.canvas.getContext('2d');
    const colorBackground = this.props.array[0];
    ctx.canvas.width = window.innerWidth * .9;
    ctx.canvas.height = window.innerWidth * .5;
    ctx.beginPath();
    ctx.fillStyle = 'rgb('+colorBackground[0]+','+colorBackground[1]+','+colorBackground[2]+')'
    ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height)

    this.props.array.forEach(function(el){
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
  componentDidMount(){
    this.createCanvas()
  }
  render(){
    const style = {
      canvasWrap: {
        display:'flex',
      },
      canvas: {
        marginTop:'30px',
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
      <div>
        <div style={style.canvasWrap}>
          <canvas style={style.canvas} ref='canvas' />
        </div>
        <div style={style.infoWrap}>
          <Link to='/' style={style.username}>{this.props.username}</Link>
          <Moment format='Do MMM YYYY'>{this.props.date}</Moment>
        </div>
      </div>
    )
  }
}

export default CanvasItem;
