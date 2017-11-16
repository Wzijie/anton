import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

const UserProfile = ({ username, onLogout }) => {

  const menu = (
    <Menu>
      <Menu.Item key='1'>
        <a onClick={onLogout}>退出</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <div className='user-profile'>
        <Icon type='user' />
        <span className='user-profile__span'>{username}</span>
      </div>
    </Dropdown>
  )
}

export default UserProfile;
