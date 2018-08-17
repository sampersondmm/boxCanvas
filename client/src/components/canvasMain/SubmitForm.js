import React, {Component} from 'react';

class SubmitForm extends Component {
  constructor(props){
    super(props)
  }
  handleSubmit = () => {
    this.props.submitCanvas();
  }
  render(){
    const style = {
      main: {
        width:'50vw',
        height:'50vh',
        background:'rgb(50,50,50)',
        top:'25vh',
        left:'25vw',
        position:'absolute',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
      },
      exit: {
        width:'50px',
        height:'50px',
        background:'rgb(50,50,50)',
        border:'3px solid rgb(150,150,150)',
        borderRadius:'50%',
        position:'absolute',
        zIndex:'2',
        right:'10px',
        top:'10px',
      },
      hidden: {
        display:'none'
      },
      heading: {
        color:'rgb(200,200,200)',
      },
      form: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'90%',
      },
      label:{
        color:'rgb(150,150,150)',
      },
      button: {
        width:'100%',
        height:'30px',
        marginBottom:'20px',
        borderRadius:'2px',
        backgroundColor:'rgb(200,200,200)',
        color:'rgb(50,50,50)',
        border:'1px solid rgb(50,50,50)',
        fontSize:'18px',
      },
      input: {
        width:'100%',
        height:'30px',
        marginBottom:'20px',
        fontSize: '20px',
        padding:'7px',
        borderRadius:'2px',
        backgroundColor:'white',
        border:'1px solid rgb(100,100,100)'
      },
      description:{
        width:'100%',
        height:'50px',
        marginBottom:'20px',
        fontSize: '20px',
        padding:'7px',
        borderRadius:'2px',
        backgroundColor:'white',
        border:'1px solid rgb(100,100,100)'
      },
    }
    return(
      <div style={this.props.submitFormVisible ? style.main : style.hidden}>
        <div style={style.exit}></div>
        <h1 style={style.heading}>Submit Form</h1>
        <form style={style.form} onSubmit={this.handleSubmit}>
          <label style={style.label}>Title</label>
          <input type='text' name='title' style={style.input}/>
          <label style={style.label}>Description</label>
          <textArea style={style.description} name='decription'/>
          <button style={style.button}>Save Canvas</button>
        </form>
      </div>
    )
  }
}

export default SubmitForm;
