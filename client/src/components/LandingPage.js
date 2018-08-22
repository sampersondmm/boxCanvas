import React, {Component} from 'react';
import backgroundArr from './homepageBackgrounds';

class LandingPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      index: 0,
    }
  }
  componentDidMount(){
    const ranNumber = Math.floor(Math.random() * backgroundArr.length);
    this.createCanvas(ranNumber)
  }

  createCanvas = ranNumber => {
    const canvasData = backgroundArr[ranNumber];
    debugger;
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
        color:'black',
        textShadow:'2px 2px 2px rgb(150,150,150)'
      },
      mainHeader: {
        fontSize:'60px',
        fontWeight:'lighter',
        fontFamily:'Quicksand',
        // color:'rgb(180,180,180)',
        color:'black',
        textShadow:'2px 2px 2px rgb(150,150,150)'
      }
    }
    return(
      <div>
        <canvas style={style.canvas} ref='canvas'/>
        <div style={style.wrap}>
          <h2 style={style.header}>Welcome To</h2>
          <h1 style={style.mainHeader}>Box Canvas</h1>
        </div>
      </div>
    )
  }
}

export default LandingPage;
