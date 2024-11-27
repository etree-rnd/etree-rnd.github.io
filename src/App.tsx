import React from 'react';
import 'App.css';
import { Route, Routes } from 'react-router';
import DefaultLayout from 'layouts/DefaultLayout';
import routes from 'router/routes';
import { RoutesProp } from './interfaces/RoutesProp';
import Privacy from './pages/Privacy';
import Provision from './pages/Provision';

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        {routes.map((route: RoutesProp) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          );
        })}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/provision" element={<Provision />} />
      </Route>
    </Routes>
  );
}

export default App;
