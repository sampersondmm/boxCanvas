import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCanvas,removeCanvas} from '../store/actions/canvas';
import CanvasItem from '../components/CanvasItem';

class ProfilePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      canvasList: [],
      remove:false,
    }
  }
  componentDidMount(){
    this.props.fetchCanvas()
      .then(res => this.getCanvas(res));
  }
  reRender = () => {
    this.props.fetchCanvas()
      .then(() => this.getCanvas())
  }
  getCanvas(){
    const userId = this.props.currentUser.user.id;
    const canvasList = this.props.canvas.filter(val => val.user._id === userId);
    this.renderList(canvasList)
  }
  renderList = canvas => {
    let canvasListData = canvas.map(canvas => (
      <CanvasItem
        secure='true'
        key={canvas._id}
        canvas={canvas}
        date={canvas.createAt}
        canvasData={canvas.canvasData}
        username={canvas.user.username}
        profileImageUrl={canvas.user.profileImageUrl}
        removeCanvas={this.props.removeCanvas.bind(this, canvas.user._id, canvas._id)}
        // handleView={this.handleView.bind(this,canvas)}
        // handleUser={this.handleUser.bind(this,canvas)}
        userId={canvas.user._id}
        canvasId={canvas._id}
        reRender={this.reRender}
      />
    ));
    this.setState({
      canvasList: canvasListData,
    })
  }
  render(){
    const style = {
      main: {
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-evenly',
      },
      main2: {
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-evenly',
        backgroundColor:'yellow',
      },
    }
    return(
      <div style={this.state.remove ? style.main : style.main}>
        {this.state.canvasList}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    canvas: state.canvas,
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps, {fetchCanvas,removeCanvas})(ProfilePage);
