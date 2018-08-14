import React, {Component} from 'react';

class Authform extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      username: '',
      password: '',
      profileImageUrl:'',
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const authType = this.props.signup ? 'signup' : 'signin';
    this.props.onAuth(authType, this.state)
      .then(() => {
        this.props.history.push('/');
      })
      .catch(() => {
        return;
      })
  }
  render(){
    const {email,username,password,profileImageUrl} = this.state;
    const {
      heading,
      buttonText,
      signup,
      errors,
      history,
      removeError
    } = this.props;

    const style = {
      wrap: {
        width:'70%',
        padding:'50px',
        margin:'100px auto',
        backgroundColor:'rgb(230,230,230)',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
      },
      main: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgb(230,230,230)',
        width:'90%'
      },
      heading: {
        marginBottom:'30px',
        textAlign:'center',
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
      button: {
        width:'90%',
        height:'30px',
        marginBottom:'20px',
        borderRadius:'2px',
        backgroundColor:'rgb(40,40,40)',
        color:'rgb(180,180,180)',
        border:'1px solid rgb(50,50,50)',
        fontSize:'18px',
      },
      redButton: {
        width:'100%',
        padding:'5px',
        marginBottom:'20px',
        borderRadius:'2px',
        backgroundColor:'rgb(255,100,100)',
        border:'1px solid rgb(100,100,100)',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      },
      mainSecond: {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        width:'90%',
        backgroundColor:'rgb(230,230,230)',
      },
      inputSecond: {
        width:'100%',
        height:'30px',
        marginBottom:'20px',
        borderRadius:'2px',
        backgroundColor:'white',
        border:'1px solid rgb(100,100,100)'
      }
    }

    history.listen(() => {
      removeError();
    })
    return(
      <div>
        <form onSubmit={this.handleSubmit} style={style.wrap}>
          <h1 style={style.heading}>{heading}</h1>
          <div style={style.main}>
            {errors.message && (
              <div style={style.redButton}>
                <h3>{errors.message}</h3>
              </div>
            )}
            <label htmlFor='email'>Email:</label>
            <input type='text' name='email' style={style.input} onChange={this.handleChange} value={email} />
            <label htmlFor='password'>Password:</label>
            <input type='password' name='password' style={style.input} onChange={this.handleChange} />
          </div>

          {signup && (
            <div style={style.mainSecond}>
              <label htmlFor='username'>Username:</label>
              <input type='text' name='username' style={style.input} onChange={this.handleChange} value={username} />
              <label htmlFor='profileImageUrl'>Profile Image URL:</label>
              <input type='text' name='profileImageUrl' style={style.input} onChange={this.handleChange} />
            </div>
          )}

          <button style={style.button}>
            {buttonText}
          </button>

        </form>
      </div>
    )
  }
}

export default Authform;
