import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setCurrentCanvas} from '../store/actions/canvas';
import CanvasItem from '../components/CanvasItem'

class ViewUser extends Component {
  constructor(props){
    super(props)
    this.state = {
      canvasList: [],
    }
  }
  componentDidMount(){
    this.createCanvasList(this.props.canvas, this.props.currentCanvas)
  }
  createCanvasList = (canvas,currentCanvas) => {
    let canvasList = canvas.filter(val => val.user._id === currentCanvas.user._id);
    this.renderList(canvasList);
  }
  handleView = canvas => {
    let canvasId = canvas._id;
    let userId = canvas.user._id;
    this.props.setCurrentCanvas(canvas);
    this.props.history.push(`/users/${userId}/canvas/${canvasId}`)
  }
  renderList = canvas => {
    let canvasListData = canvas.map(canvas => (
      <CanvasItem
        viewUserPage='true'
        key={canvas._id}
        canvas={canvas}
        date={canvas.createAt}
        canvasData={canvas.canvasData}
        username={canvas.user.username}
        profileImageUrl={canvas.user.profileImageUrl}
        handleView={this.handleView.bind(this,canvas)}
        handleUser={this.handleUser.bind(this,canvas)}
        userId={canvas.user._id}
        canvasId={canvas._id}
        reRender={this.reRender}
      />
    ));
    this.setState({
      canvasList: canvasListData,
    })
  }
  handleUser = canvas => {
    let userId = canvas.user._id;
    this.props.viewCanvas(canvas);
    this.props.history.push(`/users/${userId}`)
  }
  render(){
    const style = {
      main: {
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-evenly',
      },
    }
    return(
      <div style={style.main}>{this.state.canvasList}</div>
    )
  }
}

function mapStateToProps(state){
  return {
    canvas: state.canvas,
    currentCanvas: state.currentCanvas,
  }
}

export default connect(mapStateToProps, {setCurrentCanvas})(ViewUser);
