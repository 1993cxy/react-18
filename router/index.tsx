import React, { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
const Layout = () => import('../pages/layouts');
const DashBoard = () => import('../pages/dashboard/dashboard');
const Canvas = () => import('../pages/demo/canvas/canvas');
// import Layout from '../pages/layouts';
// import DashBoard from '../pages/dashboard/dashboard';
// import Canvas from '../pages/demo/canvas/canvas';
// import Todo from '../pages/todo/todo';
interface Iroute {
  path: string;
  component: React.FC;
  children?: Iroute[];
}

let routes: Iroute[] = [
  {
    path: '/',
    component: lazy(Layout),
    children: [
      { path: 'dashboard', component: lazy(DashBoard) },
      {
        path: 'canvas',
        component: lazy(Canvas),
      },
    ],
  },
  {
    path: '/dd',
    component: lazy(Canvas),
  },

  // { path: '*', element: },
  // { path: '/register', component: lazy(() => import('../pages/Register')) },
];
const AppRouter = (table: Iroute[]): RouteObject[] => {
  let result: RouteObject[] = [];
  table.forEach((route) => {
    const item = {
      path: route.path,
      element: (
        <Suspense fallback={<div>加载中......</div>}>
          <route.component/>
        </Suspense>
      ),
      children: route.children && AppRouter(route.children),
    };
    console.log(item);

    result.push(item);
  });
  return result;
};

const allRoutes = AppRouter(routes);
console.log(allRoutes);
export default allRoutes;
