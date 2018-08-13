import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../store/actions/auth';

class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  }
  render(){
    const style={
      main: {
        width:'100%',
        height:'50px',
        display:'flex',
        backgroundColor:'rgb(40,40,40)',
        alignItems:'center',
        justifyContent:'space-between',
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
        backgroundColor:'black',
        box1: {
          height:'30px',
          width:'30px',
          position:'absolute',
          backgroundColor:'rgb(10,230,150)'
        },
        box2: {
          height:'10px',
          width:'10px',
          position:'absolute',
          left:'20px',
          zIndex:'2',
          backgroundColor:'rgb(10,10,150)'
        },
        box3: {
          height:'20px',
          width:'10px',
          position:'absolute',
          zIndex:'3',
          backgroundColor:'rgb(250,100,100)'
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
      }
    }

    return(
      <nav style={style.main}>
        <div style={style.logoWrap}>
          <Link to='/' style={style.link}>
            <div style={style.logo}>
              <div style={style.logo.box2}></div>
              <div style={style.logo.box3}></div>
              <div style={style.logo.box1}></div>
              <div style={style.logo.box4}></div>
            </div>
          </Link>
          <h2 style={style.heading}>boxCanvas</h2>
        </div>
        {this.props.currentUser.isAuthenticated ? (
          <div style={style.nav}>
            <li>
              <Link to={`/users/${this.props.currentUser.user.id}/canvas/new`} style={style.link}>New Message</Link>
            </li>
            <li>
              <a onClick={this.logout} style={style.link}>Log Out</a>
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
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, {logout})(Navbar);
