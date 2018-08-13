import React, {Component} from 'react';

class ColorDisplay extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const style = {
      main: {
        border:'1px solid black',
      },
      colorBoxShape: {
        width:'100%',
        height:'80px',
        border:'2px solid black',
        position:'relative',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgb(50,50,50)',
      },
      colorShape: {
        width:'4vw',
        height:'4vw',
        border:'2px solid black',
        position:'relative',
        backgroundColor:'rgba('+this.props.redShape+','+this.props.greenShape+','+this.props.blueShape+','+this.props.opacity+')',
      },
      colorBoxShapeCircle: {
        width:'4vw',
        height:'4vw',
        border:'2px solid black',
        position:'relative',
        borderRadius:'50%',
        backgroundColor:'rgba('+this.props.redShape+','+this.props.greenShape+','+this.props.blueShape+','+this.props.opacity+')',
      },
      colorBackground: {
        width:'100%',
        height:'80px',
        border:'2px solid black',
        position:'relative',
        backgroundColor:'rgb('+this.props.redBackground+','+this.props.greenBackground+','+this.props.blueBackground+')',
      },
      redBox: {
        border:'2px solid rgb(255,0,0)',
        width:'100%',
        height:'20px',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
      },
      greenBox: {
        border:'2px solid rgb(0,255,0)',
        width:'100%',
        height:'20px',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
      },
      blueBox: {
        border:'2px solid rgb(0,0,255)',
        width:'100%',
        height:'20px',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
      },
      redShapeInner: {
        height:'100%',
        width:this.props.redShape/2.55 + '%',
        backgroundColor:'rgb(255,0,0)'
      },
      greenShapeInner: {
        height:'100%',
        width:this.props.greenShape/2.55 + '%',
        backgroundColor:'rgb(0,255,0)'
      },
      blueShapeInner: {
        height:'100%',
        width:this.props.blueShape/2.55 + '%',
        backgroundColor:'rgb(0,0,255)'
      },
      redBackgroundInner: {
        height:'100%',
        width:this.props.redBackground/2.55 + '%',
        backgroundColor:'rgb(255,0,0)'
      },
      greenBackgroundInner: {
        height:'100%',
        width:this.props.greenBackground/2.55 + '%',
        backgroundColor:'rgb(0,255,0)'
      },
      blueBackgroundInner: {
        height:'100%',
        width:this.props.blueBackground/2.55 + '%',
        backgroundColor:'rgb(0,0,255)'
      }
    }
    return(
      <div style={style.main}>
        <div style={this.props.colorStatus === 'shape' ? style.colorShape : style.colorBackground}>
        </div>
        <div style={style.colorBars}>
          <div style={style.redBox}>
            <div style={style.redShapeInner}></div>
          </div>
          <div style={style.greenBox}>
            <div style={style.greenShapeInner}></div>
          </div>
          <div style={style.blueBox}>
            <div style={style.blueShapeInner}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ColorDisplay;
