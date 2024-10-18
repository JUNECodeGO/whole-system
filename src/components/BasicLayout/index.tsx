/** @format */

import {Layout, Menu, theme} from 'antd';

const {Header, Content, Sider} = Layout;

const BasicLayout = props => {
  return (
    <Layout>
      {/* 左侧侧边栏 */}
      <Sider collapsible>
        <div
          className='logo'
          style={{color: 'white', padding: '16px', textAlign: 'center'}}>
          My App
        </div>
        <Menu mode='inline' defaultSelectedKeys={['1']}>
          <Menu.Item key='1'>
            <a href='/'>Home</a>
          </Menu.Item>
          <Menu.Item key='2'>
            <a href='/about'>About</a>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Header style={{padding: 0, background: '#fff', textAlign: 'center'}}>
          <h1 style={{margin: 0}}>My Application Header</h1>
        </Header>

        <Content style={{margin: '16px', padding: '24px', background: '#fff'}}>
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
