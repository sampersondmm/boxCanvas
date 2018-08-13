import React, {Component} from 'react';
import {connect} from 'react-redux';
import {postNewCanvas} from '../store/actions/canvas';
import SidePanel from '../components/canvasMain/SidePanel';
import Instructions from '../components/canvasMain/Instructions';

class CssArt extends Component {
  constructor(props){
    super(props);
    this.state = {
      shape: 'square',
      colorShape: [0,0,0],
      redShape:0,
      greenShape:0,
      blueShape:0,
      redBackground: 200,
      greenBackground: 200,
      blueBackground: 255,
      colorStatus: 'shape',
      opacity: 1,
    }
    this.redBackground = 200;
    this.greenBackground = 200;
    this.blueBackground = 255;

    this.screenActive = false;
    this.move = [false,false,false,false];
    this.sizeChange = false;
    this.rotateChange = false;
    this.stayStill = false;
    this.rotateReverse = false;
    this.remove = false;
    this.stamp = false;
    this.stampArr = [];

    this.posY = 100;
    this.posX = 100;
    this.width = 100;
    this.height = 100;
    this.radius = 50;
    this.angle = 0;
    this.degree = Math.PI/180;
    this.speed = 5;
    this.opacityChange = false;
    this.remove = false;

  }
  componentDidMount() {
      this.updateCanvas();
  }
  changeShapeProperties = () => {
    //changes position
    if(this.move[0] && !this.stayStill){this.posX -= this.speed}
    if(this.move[1] && !this.stayStill){this.posY -= this.speed}
    if(this.move[2] && !this.stayStill){this.posX += this.speed}
    if(this.move[3] && !this.stayStill){this.posY += this.speed}

    //prevents position change when adjusting size, rotation...
    if(this.size || this.rotate || this.red || this.green || this.blue || this.opacityChange){
      this.stayStill = true
    }else{
      this.stayStill = false
    }

    //change shape
    if(this.state.shape === 'square'){
      this.setState({
        shape: 'circle'
      })
    }
    if(this.state.shape === 'circle'){
      this.setState({
        shape: 'square'
      })
    }

    //change size
    if(this.state.shape === 'square'){
      if(this.rotateReverse){
        if(this.move[3] && this.size && this.width > 5){this.width -= this.speed}
        if(this.move[0] && this.size && this.height > 5){this.height -= this.speed}
        if(this.move[1] && this.size){this.width += this.speed}
        if(this.move[2] && this.size){this.height += this.speed}
      } else {
        if(this.move[0] && this.size && this.width > 5){this.width -= this.speed}
        if(this.move[3] && this.size && this.height > 5){this.height -= this.speed}
        if(this.move[2] && this.size){this.width += this.speed}
        if(this.move[1] && this.size){this.height += this.speed}
      }
    }
    if(this.state.shape === 'circle'){
      if(this.move[2] && this.size){this.radius += (this.speed/2)}
      if(this.move[0] && this.size && this.radius > 5){this.radius -= (this.speed/2)}
    }

    //change opacity
    if(this.opacityChange){
      if(this.move[0] && this.state.opacity < 1){
        this.setState({opacity: this.state.opacity += .01})
      }
      if(this.move[2] && this.state.opacity > 0){
        this.setState({opacity: this.state.opacity -= .01})
      }
    }

    //change rotation
    if(this.state.shape === 'square'){
      if(this.move[0] && this.rotate){this.angle -= 2}
      if(this.move[2] && this.rotate){this.angle += 2}
    }

    //reset axis rotation
    if(this.angle > 0){
      if(this.angle > 45 || (this.angle > 225 && this.angle < 315)){
        this.rotateReverse = true;
      }
      if(this.angle < 45 || (this.angle > 135 && this.angle < 225) || this.angle > 315){
        this.rotateReverse = false;
      }
      if(this.angle > 360){
        this.angle = 0;
      }
    }

    if(this.angle < 0){
      if(this.angle < -45 || (this.angle < -225 && this.angle > -315)){
        this.rotateReverse = true;
      }
      if(this.angle > -45 || (this.angle < -135 && this.angle > -225) || this.angle < -315){
        this.rotateReverse = false;
      }
      if(this.angle < -360){
        this.angle = 0;
      }
    }

  }
  undoLastInput = () => {
    if(this.remove){
      this.stampArr.splice(-1);
      this.remove = false;
    }
  }
  changeColorProperties = () => {
    // changes color propeties for the shapes
    if(this.state.colorStatus === 'shape'){
      if(this.red){
        if(this.move[0]){
          if(this.state.redShape < 0){
            this.setState({redShape: this.state.redShape += 2})
          }
          else {
            this.setState({redShape: this.state.redShape -= 2})
          }
        }
        if(this.move[2]){
          if(this.state.redShape > 255){
            this.setState({redShape: 255})
          }
          else {
            this.setState({redShape: this.state.redShape += 2})
          }
        }
      }
      if(this.green){
        if(this.move[0]){
          if(this.state.greenShape < 0){
            this.setState({greenShape: 0})
          }
          else {
            this.setState({greenShape: this.state.greenShape -= 2})
          }
        }
        if(this.move[2]){
          if(this.state.greenShape > 255){
            this.setState({greenShape: 255})
          }
          else {
            this.setState({greenShape: this.state.greenShape += 2})
          }
        }
      }
      if(this.blue){
        if(this.move[0]){
          if(this.state.blueShape < 0){
            this.setState({blueShape: 0})
          }
          else {
            this.setState({blueShape: this.state.blueShape -= 2})
          }
        }
        if(this.move[2]){
          if(this.state.blueShape > 255){
            this.setState({blueShape: 255})
          }
          else {
            this.setState({blueShape: this.state.blueShape += 2})
          }
        }
      }
    }

    if(this.state.colorStatus === 'background'){
      //change red
      if(this.red){
        if(this.move[0]){
          if(this.state.redBackground < 0){
            this.redBackground = 0;
          }
          else {
            this.redBackground -= 2;
          }
        }
        if(this.move[2]){
          if(this.redBackground > 255){
            this.redBackground = 255;
          }
          else {
            this.redBackground += 2;
          }
        }
      }
      //change green
      if(this.green){
        if(this.move[0]){
          if(this.state.greenBackground < 0){
            this.greenBackground = 0;
          }
          else {
            this.greenBackground -= 2;
          }
        }
        if(this.move[2]){
          if(this.greenBackground > 255){
            this.greenBackground = 255;
          }
          else {
            this.greenBackground += 2;
          }
        }
      }
      //change blue
      if(this.blue){
        if(this.move[0]){
          if(this.state.blueBackground < 0){
            this.blueBackground = 0;
          }
          else {
            this.blueBackground -= 2;
          }
        }
        if(this.move[2]){
          if(this.blueBackground > 255){
            this.blueBackground = 255;
          }
          else {
            this.blueBackground += 2;
          }
        }
      }
    }
  }
  colorStatusHandler = () => {
    alert('JUST FIRED!!!');
    if(this.state.colorStatus === 'shape'){
      this.setState({
        colorStatus: 'background'
      })
    }
    if(this.state.colorStatus === 'background'){
      this.setState({
        colorStatus: 'shape',
      })
    }
  }

  storeShapesInArray = (ctx) => {
    //determines shape
    if(this.state.shape === 'square'){
      ctx.beginPath();
      ctx.fillStyle = 'rgba(125,125,125,.5)';
      ctx.save();
      ctx.translate(this.posX,this.posY);
      ctx.rotate(this.angle * (Math.PI/180));
      ctx.fillRect(-this.width / 2,-this.height / 2,this.width,this.height);
      ctx.restore();
    }
    if(this.state.shape === 'circle'){
      ctx.beginPath();
      ctx.fillStyle = 'rgba(125,125,125,.5)';
      ctx.arc(this.posX,this.posY,this.radius,0*Math.PI,2*Math.PI);
      ctx.fill();
    }

    //pushes into array
    if(this.stamp && this.state.shape === 'square'){
      this.stampArr.push(
        {
          func:
            function(posX,posY,width,height,angle,color,opacity){
              ctx.beginPath();
              ctx.fillStyle = 'rgba('+color[0]+','+color[1]+','+color[2]+','+opacity+')';
              ctx.save();
              ctx.translate(posX,posY);
              ctx.rotate(angle * (Math.PI/180));
              ctx.fillRect(-width / 2,-height / 2,width,height);
              ctx.restore();
            },
          posX: this.posX,
          posY: this.posY,
          width: this.width,
          height: this.height,
          angle: this.angle,
          color: [this.state.redShape, this.state.greenShape, this.state.blueShape],
          opacity: this.state.opacity,
          shape: 'square',
        }
      );
    }
    if(this.stamp && this.state.shape === 'circle'){
      this.stampArr.push(
        {
          func:
            function(posX,posY,radius,color,opacity){
              ctx.beginPath();
              ctx.fillStyle = 'rgba('+color[0]+','+color[1]+','+color[2]+','+opacity+')';
              ctx.arc(posX,posY,radius,0*Math.PI,2*Math.PI);
              ctx.fill();
            },
          posX: this.posX,
          posY: this.posY,
          radius: this.radius,
          color: [this.state.redShape, this.state.greenShape, this.state.blueShape],
          opacity: this.state.opacity,
          shape:'circle',
        }
      );
    }
    this.stamp = false;
  }
  renderShapes = () => {
    this.stampArr.forEach(function(el){
      if(el.shape === 'square'){
        el.func(el.posX,el.posY,el.width,el.height,el.angle,el.color,el.opacity);
      }
      if(el.shape === 'circle'){
        el.func(el.posX,el.posY,el.radius,el.color,el.opacity);
      }
    });
  }
  updateCanvas = () => {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.canvas.width = window.innerWidth * .9;
    ctx.canvas.height = window.innerWidth * .5;
    //======================================================
    //======================================================
    setInterval(function(){
      //set the defaults for the background, and sets up canvas
      ctx.beginPath();
      ctx.fillStyle = 'rgb('+this.redBackground+','+this.greenBackground+','+this.blueBackground+')'
      ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height)

      //changes made to shapes
      this.changeShapeProperties();

      //changes colors for shapes and background
      this.changeColorProperties();

      //renders the shapes that were stored in array
      this.renderShapes();

      //pushes shapes into array for storage
      this.storeShapesInArray(ctx);

      //removes last shape input
      this.undoLastInput();

    }.bind(this),25);
    //======================================================
    //======================================================
    //======End of setInterval==============================
  }
  clearCanvas = () => {
    this.stampArr = [];
  }
  submitCanvas = () => {
    this.props.postNewCanvas(this.stampArr);
    alert('Canvas Saved!');
  }
  keyDown = (e) => {
    e.preventDefault();
    const key = e.keyCode;
    if(key === 37){this.move[0] = true}
    if(key === 38){this.move[1] = true}
    if(key === 39){this.move[2] = true}
    if(key === 40){this.move[3] = true}

    if(key === 90 && key === 90){this.remove = true;}
    if(key === 81){this.red = true}
    if(key === 87){this.green = true}
    if(key === 69){this.blue = true}

    if(key === 51){this.opacityChange = true}
    if(key === 49){this.size = true}
    if(key === 32){this.stamp = true}
    if(key === 50){this.rotate = true}
  }
  keyUp = (e) => {
    const key = e.keyCode;
    if(key === 37){this.move[0] = false}
    if(key === 38){this.move[1] = false}
    if(key === 39){this.move[2] = false}
    if(key === 40){this.move[3] = false}

    if(key === 81){this.red = false}
    if(key === 87){this.green = false}
    if(key === 69){this.blue = false}

    if(key === 51){this.opacityChange = false}
    if(key === 49){this.size = false}
    if(key === 50){this.rotate = false}
  }
  render(){
    const style = {
      pageWrap: {
        backgroundColor:'rgb(150,150,150)',
        width:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
      },
      canvasWrap: {
        display:'flex',
      },
      main: {
        display:'flex',
        width:'90vw',
        height:'50vw',
      }
    }
    return(
      <div style={style.pageWrap}>
        <div style={style.canvasWrap}>
          <SidePanel
            redShape={this.state.redShape} greenShape={this.state.greenShape} blueShape={this.state.blueShape}


            redBackground={this.state.redBackground} greenBackground={this.state.greenBackground} blueBackground={this.state.blueBackground}
            colorStatus={this.state.colorStatus}
            opacity={this.state.opacity}

            colorStatusHandler={this.colorStatusHandler}
            colorStatus={this.state.colorStatus}

            changeShape={this.changeShape}
            shape={this.state.shape}
            clearCanvas={this.clearCanvas}
            submitCanvas={this.submitCanvas}
          />
          <canvas style={style.main} ref="canvas" tabIndex='0' onKeyDown={this.keyDown} onKeyUp={this.keyUp}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    colorStatus: state.colorStatus,
    errors: state.errors,
  }
}


export default connect(mapStateToProps, {postNewCanvas})(CssArt);
