import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from 'react-router-dom';
import { Login } from './Login';
import { Queue } from './Queue';
import { CreateTicket } from './CreateTicket';
import { Desk } from './Desk';

const { Sider, Content } = Layout;

export const RouterPages = () => {
    return (
        <Router>
            <Layout style={{ height: '100vh'}}>
                <Sider>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <Link to="/login">
                                Login
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            <Link to="/queue">
                                Cola de Ticets
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            <Link to="/create">
                                Crear Tickets
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Switch>
                            <Route path="/login" component={ Login } />
                            <Route path="/queue" component={ Queue } />
                            <Route path="/create" component={ CreateTicket } />
                            <Route path="/desk" component={ Desk } />

                            <Redirect to="/login" />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </Router>
        
    )
}
