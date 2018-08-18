import React from 'react';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Homepage from '../components/Homepage';
import Authform from '../components/Authform';
import {authUser} from '../store/actions/auth';
import {removeError} from '../store/actions/errors';
import {fetchCanvas} from '../store/actions/canvas';
import withAuth from '../hocs/withAuth';
import CssArt from './CssArt';
import ViewCanvas from './ViewCanvas'
import ViewUser from './ViewUser';
import ProfilePage from './ProfilePage';

const Main = props => {
  const {authUser,errors,removeError,currentUser} = props;
  return (
    <div>
      <Switch>
        <Route
          exact
          path='/'
          render={props => <Homepage
              currentUser={currentUser}
              {...props}
            />}
          />
        <Route
          exact
          path='/signin'
          render={props => {
            return (
              <Authform
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                {...props}
                buttonText='Log In'
                heading='Welcome Back'
              />
            )
          }}
        />
        <Route
          exact
          path='/signup'
          render={props => {
            return (
              <Authform
                removeError={removeError}
                errors={errors}
                signup
                onAuth={authUser}
                {...props}
                buttonText='Sign Up'
                heading='Join Today'
              />
            )
          }}
        />
        <Route
          path='/users/:id/canvas/new'
          component={withAuth(CssArt)}
        />
        <Route
          path='/users/:id/canvas/:id'
          render={props => (
            <ViewCanvas {...props} fetchCanvas={fetchCanvas}/>
          )}
        />
        <Route
          exact
          path='/users/:id'
          render={props => (
            <ViewUser {...props} fetchCanvas={fetchCanvas}/>
          )}
        />
        <Route
          exact
          path='/users/:id/profile'
          render={props => (
            <ProfilePage {...props}/>
          )}
        />
      </Switch>
    </div>
  )
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser,
    canvas:state.canvas,
    errors: state.errors,
  }
}

export default withRouter(
  connect(mapStateToProps, {authUser,removeError})(Main));
