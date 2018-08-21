import React, {Component} from 'react';
import CanvasTimeline from './CanvasTimeline';
import {Link} from 'react-router-dom';
import {homepageBackground1} from './homepageBackground1';

class Homepage extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.createCanvas();
  }
  createCanvas = () => {
    console.log(homepageBackground1)
    const ctx = this.refs.canvas.getContext('2d');
    const colorBackground = homepageBackground1[0];
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.beginPath();
    ctx.fillStyle = 'rgb('+colorBackground[0]+','+colorBackground[1]+','+colorBackground[2]+')'
    ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height)

    homepageBackground1.forEach(function(el){
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
    debugger;
    const style = {
      canvas:{
        position:'absolute',
        top:'0',
        zIndex:'-1',
      },
      wrap: {
        padding:'50px',
        margin:'150px auto',
        width:'50%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'rgb(40,40,40)'
      },
      header: {
        fontSize:'40px',
        margin:'20px',
        // color:'rgb(180,180,180)',
        color:'black'
      },
      mainHeader: {
        fontSize:'60px',
        fontWeight:'lighter',
        fontFamily:'Quicksand',
        // color:'rgb(180,180,180)',
        color:'black'
      }
    }
    if(!this.props.currentUser.isAuthenticated){
      return(
        <div>
          <canvas style={style.canvas} ref='canvas'/>
          <div style={style.wrap}>
            <h2 style={style.header}>Welcome To</h2>
            <h1 style={style.mainHeader}>Box Canvas</h1>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <CanvasTimeline/>
        </div>
      )
    }
  }
}

export default Homepage;
