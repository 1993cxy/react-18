import React from 'react';
import { useRoutes, BrowserRouter as Router } from 'react-router-dom';
import allRoutes from './router';

const App = () => {
  // const r = AppRouter(routes);
  const GetRoutes = () => useRoutes(allRoutes);

  return (
    <Router>
      <GetRoutes />
    </Router>
  );
};
export default App;
