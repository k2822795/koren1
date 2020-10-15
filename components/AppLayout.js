import { PropTypes } from 'prop-types';
import React, { useState } from 'react';
import Link from 'next/link';
import { Input, Menu, Row, Col } from 'antd';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({children}) => {
    const [isLogggedIn, setIsLoggedIn] = useState(false);
    return (
      <div>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link href="/">
              <a>FABLO</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="write">
              <a>Write</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
              <SearchInput enterButton/>
          </Menu.Item>
          <Menu.Item>
            <Link href="read">
              <a>Read</a>
            </Link>
          </Menu.Item>
        </Menu>
        <Row gutter={8}>
            <Col xs={24} md={6}>
                <UserProfile />
            </Col>
            <Col xs={24} md={12}>
                {children}
            </Col>
            <Col xs={24} md={6}>
                오른쪽 메뉴
            </Col>
        </Row>
      </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;