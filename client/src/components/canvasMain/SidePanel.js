import React, {Component} from 'react';
import ColorDisplay from './ColorDisplay';
import ColorToggle from './ColorToggle';
import Button from './Button';

class SidePanel extends Component {
  constructor(props){
    super(props);
    this.state = {
      colorToggle: false,
      shapeToggle: false,
    }
  }
  colorToggleHandler = () => {
    alert('testing')
    if(this.state.colorToggle){
      this.setState({
        colorToggle: false,
      })
    } else {
      this.setState({
        colorToggle: true,
      })
    }
  }
  shapeToggleHandler = () => {
    if(this.state.shapeToggle){
      this.setState({
        shapeToggle: false,
      })
    } else {
      this.setState({
        shapeToggle: true,
      })
    }
  }
  render(){
    const style = {
      main: {
        height:'50vw',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        border:'1px solid black',
        background:'rgb(50,50,50)',
        width:'10vw',
        position:'relative',
      },
      upperWrap: {
        display:'flex',
        flexDirection:'column',
      },
      lowerWrap: {
        display:'flex',
        flexDirection:'column',
      },
    }
    return(
      <div style={style.main}>
        <div style={style.upperWrap}>
          <Button name='Position' />
          <Button name='Size' />
          <Button name='Rotation' />
          <Button name='Border-width' />
          <Button name='Opacity' />

          <Button
            name='Shape'
          />

          <Button
            name='Color'
            colorStatusHandler={this.props.colorStatusHandler}
            colorToggleHandler={this.colorToggleHandler}
          />

          <ColorDisplay
            redShape={this.props.redShape}
            greenShape={this.props.greenShape}
            blueShape={this.props.blueShape}
            redBackground={this.props.redBackground}
            greenBackground={this.props.greenBackground}
            blueBackground={this.props.blueBackground}
            colorStatus={this.props.colorStatus}
            opacity={this.props.opacity}
            shape={this.props.shape}
          />

          <ColorToggle
            colorToggle={this.state.colorToggle}
          />

        </div>

        <div style={style.lowerWrap}>
          <Button name='Clear' clearCanvas={this.props.clearCanvas}/>
          <Button name='Save' submitCanvas={this.props.submitCanvas}/>
        </div>
      </div>
    );
  }
}

export default SidePanel;
