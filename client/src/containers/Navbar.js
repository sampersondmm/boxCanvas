import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../store/actions/auth';

const Navbar = withRouter(props => {
  return <NavbarRouter {...props}/>
})

class NavbarRouter extends Component {
  constructor(props){
    super(props)
  }
  logout = e => {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/')
  }
  render(){
    const style={
      main: {
        display:'flex',
        width:'100%',
        height:'50px',
        backgroundColor:'rgb(40,40,40)',
        alignItems:'center',
        justifyContent:'space-between',
      },
      hidden: {
        display:'none'
      },
      logoWrap: {
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        marginLeft:'10%',
      },
      logo: {
        position:'relative',
        height:'50px',
        width:'50px',
        borderRadius:'50%',
        background:'black',
        border:'2px solid rgb(150,150,150)',
        box1: {
          position:'absolute',
          top:'-5px',
          left:'0',
          height:'30px',
          width:'40px',
          background:'red',
        },
        box2: {
          position:'absolute',
          top:'10px',
          left:'20px',
          height:'32px',
          width:'25px',
          background:'rgb(50,200,250)',
        },
        box3: {
          position:'absolute',
          top:'30px',
          left:'10px',
          height:'15px',
          width:'20px',
          background:'yellow',
        },
      },
      heading: {
        color:'rgb(180,180,180)',
      },
      nav: {
        display:'flex',
        listStyle:'none',
        marginRight:'10%',
      },
      link: {
        textDecoration:'none',
        color:'rgb(180,180,180)',
        padding:'10px',
        margin:'10px',
        cursor:'pointer',
      }
    }

    return(
      <nav style={this.props.visible ? style.main : style.hidden}>
        <div style={style.logoWrap}>
          <Link to='/' style={style.link}>
            <div style={style.logo}>
              <div style={style.logo.box1}></div>
              <div style={style.logo.box2}></div>
              <div style={style.logo.box3}></div>
            </div>
          </Link>
          <h2 style={style.heading}>BOX CANVAS</h2>
        </div>
        {this.props.currentUser.isAuthenticated ? (
          <div style={style.nav}>
            <li>
              <Link to={`/users/${this.props.currentUser.user.id}/canvas/new`} style={style.link}>New Message</Link>
            </li>
            <li>
              <a onClick={this.logout} style={style.link}>Log Out</a>
            </li>
            <li>
              <Link to={`/users/${this.props.currentUser.user.id}/profile`} style={style.link}>{this.props.currentUser.user.username}</Link>
            </li>
          </div>
        ) : (
          <ul style={style.nav}>
            <li><Link to='/signup' style={style.link}>Sign Up</Link></li>
            <li><Link to='/signin' style={style.link}>Log In</Link></li>
          </ul>
        )}
      </nav>
    )
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser,
    visible: state.navbar.visible,
  }
}

export default connect(mapStateToProps, {logout})(Navbar);
