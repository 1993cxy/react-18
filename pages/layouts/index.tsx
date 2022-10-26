import React, { FC, ComponentType } from 'react';
import { Layout, Menu } from 'antd';
import SideMenu from './Menu/index';
import { HomeOutlined } from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
interface LayoutState {}

const { Header, Sider, Content } = Layout;

const AppLayout: FC<LayoutState> = (props) => {
  return (
    <Layout className="app-layout">
      <Header>Header</Header>
      <Layout>
        <Sider>
          <SideMenu></SideMenu>
        </Sider>
        <Content>
          <main className="app-main">
            <Outlet />
          </main>
        </Content>
      </Layout>
    </Layout>
  );
};
export default AppLayout;
