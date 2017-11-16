import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import io from 'socket.io-client';
import './index.less';
import * as actionCreators from './actions';
import { UserProfile, Team, ControlPanel, CreateModal } from './components';
import { apiServer } from '../../common/httpRequest';

const { Header, Content, Footer } = Layout;

class Home extends Component {

  componentDidMount() {
    this.socket = io(apiServer);
    this.socket.on('connect success', (data) => {
      console.log('socket连接成功', data);
    });
    this.handlerReceiveTeam();
  }

  handlerReceiveTeam = () => {
    const { receiveTeam } = this.props;
    this.socket.on('newTeam', (team) => {
      receiveTeam(team);
    });
  }

  handlerCreateTeam = (newTeam) => {
    const { createTeam } = this.props;
    createTeam(this.socket, newTeam);
  }

  render() {

    const {
      username,
      logout,
      team,
      createModalVisible,
      createModalLoading,
      createModalToggle
     } = this.props;

    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <UserProfile username={username} onLogout={logout} />
        </Header>
        <Content>
          <div className='content' style={{ minHeight: 'calc(100vh - 178px)' }}>
            <ControlPanel onCreateModalToggle={createModalToggle} />
            <Team team={team} />
            <CreateModal visible={createModalVisible} loading={createModalLoading} onCreate={this.handlerCreateTeam} onCreateModalToggle={createModalToggle} />
          </div>
        </Content>
        <Footer className='footer'>
          anton
        </Footer>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.app.username,
    ...state.home
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
