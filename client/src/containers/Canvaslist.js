import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCanvas} from '../store/actions/canvas';
import CanvasItem from '../components/CanvasItem';

class Canvaslist extends Component {
  componentDidMount(){
    this.props.fetchCanvas();
  }
  render(){
    const {canvas} = this.props;
    const style = {
      main: {
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-evenly',
      }
    }
    let canvasList = canvas.map(canvas => (
      <CanvasItem
        key={canvas._id}
        date={canvas.createAt}
        array={canvas.canvasData}
        username={canvas.user.username}
        profileImageUrl={canvas.user.profileImageUrl}
      />
    ));
    return <div style={style.main}>{canvasList}</div>;
  }
}

function mapStateToProps(state){
  return {
    canvas: state.canvas
  };
}

export default connect(mapStateToProps, {fetchCanvas})(Canvaslist);
