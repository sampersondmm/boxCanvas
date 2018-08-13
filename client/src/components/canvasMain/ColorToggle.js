import React, {Component} from 'react';

class ColorToggle extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const style = {
      colorSettings: {
        position:'absolute',
        width:'15vw',
        padding:'10px',
        position:'absolute',
        left:'100%',
        top:'120px',
        backgroundColor:'rgb(50,50,50)',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
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
        backgroundColor:'rgb('+this.props.redShape+','+this.props.greenShape+','+this.props.blueShape+')',
        border:'2px solid yellow'
      },
      colorShapeBorderOff: {
        width:'5vw',
        height:'5vw',
        backgroundColor:'rgba('+this.props.redShape+','+this.props.greenShape+','+this.props.blueShape+','+this.props.opacity+')',
      },
      colorBackgroundBorderOn: {
        width:'100%',
        height:'100%',
        backgroundColor:'rgb('+this.props.redBackground+','+this.props.greenBackground+','+this.props.blueBackground+','+this.props.opacity+')',
        border:'2px solid yellow'
      },
      colorBackgroundBorderOff: {
        width:'100%',
        height:'100%',
        backgroundColor:'rgb('+this.props.redBackground+','+this.props.greenBackground+','+this.props.blueBackground+')',
      },
      hr: {
        width:'100%',
        margin:'5px 0',
        borderRadius:'5px',
      },
    }
    return(
      <div style={this.props.colorToggle ? style.colorSettings : {...style.colorSettings, display:'none'}}>
        <p style={style.text}>Background</p>
        <div style={style.colorWrap}>
          <div style={style.colorBackgroundBorderOff} onClick={this.settings}></div>
        </div>
        <hr style={style.hr}/>
        <p style={style.text}>Shape</p>
        <div style={style.colorWrap}>
          <div style={style.colorShapeBorderOn} onClick={this.settings}></div>
        </div>
      </div>
    );
  }
}

export default ColorToggle;
