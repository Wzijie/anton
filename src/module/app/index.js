import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link, withRouter, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Button, Spin } from 'antd';
import './index.less';
import * as actionCreators from './actions';
import Login from '../login';
import Regist from '../regist';
import Home from '../home';

const PrivateRoute = ({ component: Component, loginState, ...rest }) => (
  <Route {...rest} render={(props) => (
    loginState
      ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { form: props.location }
        }} />
      )
  )} />
);

class App extends Component {

  componentDidMount() {
    this.handlerCheckLoginState();
  }

  handlerCheckLoginState = () => {
    const { checkLoginState } = this.props;
    checkLoginState();
  }

  handlerLogout = () => {
    const { logout } = this.props;
    logout();
  }

  render() {

    const { loginState, checkLoginStateLoading, username } = this.props;
    console.log(loginState, username);
    if (checkLoginStateLoading) {
      return <Spin size='large' tip='Loading...' />
    }

    return (
      <div className="App">
        {/* <Button type='primary'>
          <Link to='/login'>login page</Link>
        </Button>
        <Button type='primary'>
          <Link to='/regist'>regist page</Link>
        </Button>
        <Button type='primary'>
          <Link to='/'>home page</Link>
        </Button>
        <Button type='primary' onClick={this.handlerLogout}>
          退出登录
        </Button> */}

        <PrivateRoute path='/' exact component={Home} loginState={loginState} username={username} />
        <Route path='/login' component={Login} />
        <Route path='/regist' component={Regist} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.app;
}

function mapStateToDispatch(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(App));
