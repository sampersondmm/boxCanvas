import React, {Component} from 'react';
import {Link,Route,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCanvas, removeCanvas,setCurrentCanvas} from '../store/actions/canvas';
import CanvasItem from '../components/CanvasItem';


const Canvaslist = withRouter(props => (
  <CanvaslistRouter {...props}/>
))


class CanvaslistRouter extends Component {
  constructor(props){
    super(props)
    this.state = {
      viewOne: false,
    }
  }
  handleView = canvas => {
    let canvasId = canvas._id;
    let userId = canvas.user._id;
    this.props.setCurrentCanvas(canvas);
    this.props.history.push(`/users/${userId}/canvas/${canvasId}`)
  }
  handleUser = canvas => {
    let userId = canvas.user._id;
    this.props.setCurrentCanvas(canvas);
    this.props.history.push(`/users/${userId}`)
  }
  reRender = () => {
    this.props.fetchCanvas();
  }
  componentDidMount(){
    this.props.fetchCanvas();
  }
  render(){
    const style = {
      main: {
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-evenly',
      },
    }
    let canvasList = this.props.canvas.map(canvas => (
      <CanvasItem
        status='list'
        key={canvas._id}
        canvas={canvas}
        date={canvas.createAt}
        canvasData={canvas.canvasData}
        username={canvas.user.username}
        profileImageUrl={canvas.user.profileImageUrl}
        removeCanvas={this.props.removeCanvas.bind(this, canvas.user._id, canvas._id)}
        handleView={this.handleView.bind(this,canvas)}
        handleUser={this.handleUser.bind(this,canvas)}
        userId={canvas.user._id}
        canvasId={canvas._id}
        reRender={this.reRender}
      />
    ));
    return (
      <div>
        <div style={this.state.viewOne ? style.main : style.main}>{canvasList}</div>
      </div>
    )


  }
}

function mapStateToProps(state){
  return {
    canvas: state.canvas
  };
}

export default connect(mapStateToProps, {fetchCanvas,removeCanvas,setCurrentCanvas})(Canvaslist);
