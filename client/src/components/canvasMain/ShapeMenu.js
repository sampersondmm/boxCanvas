import React, {Component} from 'react';

class ShapeMenu extends Component {
  constructor(props){
    super(props)
  }
  handleProps = shape => {
    if(shape === 'square' && this.props.shapeStatus === 'circle'){
      this.props.shapeStatusHandler();
    }
    if(shape === 'circle' && this.props.shapeStatus === 'square'){
      this.props.shapeStatusHandler();
    }
    this.props.shapeMenuHandler();
  }
  render(){
    const style = {
      main: {
        position:'absolute',
        width:'15vw',
        padding:'10px',
        position:'absolute',
        left:'100%',
        top:'140px',
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
      square: {
        width:'5vw',
        height:'5vw',
        backgroundColor:'rgba('+this.props.colorArrShape[0]+','+this.props.colorArrShape[1]+','+this.props.colorArrShape[2]+','+this.props.colorArrShape[3]+')',
        border:'2px solid yellow'
      },
      circle: {
        width:'5vw',
        height:'5vw',
        borderRadius:'50%',
        backgroundColor:'rgba('+this.props.colorArrShape[0]+','+this.props.colorArrShape[1]+','+this.props.colorArrShape[2]+','+this.props.colorArrShape[3]+')',
        border:'2px solid yellow',
      },
      hr: {
        width:'100%',
        margin:'5px 0',
        borderRadius:'5px',
      },
    }
    return(
      <div style={this.props.shapeMenuVisible ? style.main : {...style.main, display:'none'}}>
        <div style={style.exit} onClick={this.handleProps}></div>
        <p style={style.text}>Square</p>
        <div style={style.colorWrap}>
          <div
            style={this.props.shapeStatus === 'square' ? style.square : {...style.square, border:'0'}} onClick={() => this.handleProps('square')}>
          </div>
        </div>
        <hr style={style.hr}/>
        <p style={style.text}>Circle</p>
        <div style={style.colorWrap}>
          <div
            style={this.props.shapeStatus === 'circle' ? style.circle : {...style.circle, border:'0'}} onClick={() => this.handleProps('circle')}>
          </div>
        </div>
      </div>
    );
  }
}

export default ShapeMenu;
