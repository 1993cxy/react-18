import React, { FC, Fragment } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Menu } from 'antd';
import { IMenuItem } from './type';
const { SubMenu, Item } = Menu;
const menuList: Array<IMenuItem> = [
  {
    title: '首页',
    label: '平台管理',
    path: '/',
  },
  {
    title: 'DEMO',
    label: 'DEMO',
    children: [
      {
        title: 'Canvas',
        path: '/canvas',
      },
    ],
  },
  {
    title: '平台管理',
    label: '平台管理',
    children: [
      {
        title: '用户管理',
        label: '平台管理',
        path: '/user',
      },
    ],
  },
];
const SideMenu: FC = () => {
  const navigat = useNavigate();
  const renderMenuItem = (item: IMenuItem, index: number) => {
    return <Item key={index}>{item.title}</Item>;
  };
  const renderSubMenu = (childrens: IMenuItem, index: number) => {
    return (
      <SubMenu {...childrens} key={`s-` + index}>
        {childrens.children.map((c, indx) => {
          renderMenuItem(c, indx);
        })}
      </SubMenu>
    );
  };
  const onClickMenu = (params) => {
    console.log(params);
  };
  return (
    <Fragment>
      <div>
        <h1>前端笔记</h1>
      </div>
      <div className="content-sider">
        <div className="content-ls">
          <ul>
            <li className="content-ls-item">
              <Link to="/canvas">Canvas</Link>
            </li>
            <li className="content-ls-item">
              <Link to="/dashboard">DashBoard</Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default SideMenu;
