import React, {Component} from 'react';
import ColorDisplay from './ColorDisplay';
import ColorMenu from './ColorMenu';
import ShapeMenu from './ShapeMenu'
import Button from './Button';
import Instructions from './Instructions';
import SubmitForm from './SubmitForm';

class SidePanel extends Component {
  constructor(props){
    super(props);
    this.state = {
      colorMenuVisible: false,
      shapeMenuVisible: false,
      submitFormVisible: false,
      instVisible:false,
    }
  }
  colorMenuHandler = () => {
    if(this.state.colorMenuVisible){
      this.setState({
        colorMenuVisible: false,
      })
    } else {
      this.setState({
        colorMenuVisible: true,
      })
    }
  }
  shapeMenuHandler = () => {
    if(this.state.shapeMenuVisible){
      this.setState({
        shapeMenuVisible: false,
      })
    } else {
      this.setState({
        shapeMenuVisible: true,
      })
    }
  }
  submitFormHandler = () => {
    if(this.state.submitFormVisible){
      this.setState({
        submitFormVisible:false,
      })
    } else {
      this.setState({
        submitFormVisible:true,
      })
    }
  }
  instMenuHandler = () => {
    if(this.state.instVisible){
      this.setState({
        instVisible: false
      })
    } else {
      this.setState({
        instVisible: true
      })
    }
  }
  clearMenus = () => {
    this.setState({
      colorMenuVisible:false,
      shapeMenuVisible:false,
      instVisible:false,
      submitFormVisible:false,
    })
  }
  render(){
    const style = {
      main: {
        height:'100vh',
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
          <Button name='Position'/>
          <Button name='Size'/>
          <Button name='Rotation'/>
          <Button name='Border-width'/>
          <Button name='Opacity'/>
          <Button
            name='Shape'
            shapeMenuHandler={this.shapeMenuHandler}
            clearMenus={this.clearMenus}
          />

          <Button
            name='Color'
            colorMenuHandler={this.colorMenuHandler}
            clearMenus={this.clearMenus}
          />

          <ColorDisplay
            colorArrShape={this.props.colorArrShape}
            colorArrBackground={this.props.colorArrBackground}
            colorStatus={this.props.colorStatus}
            shapeStatus={this.props.shapeStatus}
            opacity={this.props.opacity}
            shape={this.props.shape}
          />

          <ColorMenu
            colorArrShape={this.props.colorArrShape}
            colorArrBackground={this.props.colorArrBackground}
            colorStatus={this.props.colorStatus}
            colorStatusHandler={this.props.colorStatusHandler}
            colorMenuVisible={this.state.colorMenuVisible}
            colorMenuHandler={this.colorMenuHandler}
            clearMenus={this.clearMenus}
          />
          <ShapeMenu
            colorArrShape={this.props.colorArrShape}
            colorArrBackground={this.props.colorArrBackground}
            shapeStatus={this.props.shapeStatus}
            shapeStatusHandler={this.props.shapeStatusHandler}
            shapeMenuVisible={this.state.shapeMenuVisible}
            shapeMenuHandler={this.shapeMenuHandler}
            clearMenus={this.clearMenus}
          />

        </div>
        <Instructions instVisible={this.state.instVisible} instMenuHandler={this.instMenuHandler}/>
        <SubmitForm submitFormVisible={this.state.submitFormVisible} submitCanvas={this.props.submitCanvas}/>

        <div style={style.lowerWrap}>
          <Button name='Instructions' instMenuHandler={this.instMenuHandler}/>
          <Button name='Clear' clearCanvas={this.props.clearCanvas}/>
          <Button name='Save' submitCanvas={this.props.submitCanvas} submitFormHandler={this.submitFormHandler}/>
          <Button name='Exit' exitCanvas={this.props.exitCanvas}/>
        </div>
      </div>
    );
  }
}

export default SidePanel;
