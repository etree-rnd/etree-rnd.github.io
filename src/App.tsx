import React from 'react';
import 'App.css';
import { Route, Routes } from 'react-router';
import DefaultLayout from 'layouts/DefaultLayout';
import routes from 'router/routes';
import { RoutesProp } from './interfaces/RoutesProp';

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
      </Route>
    </Routes>
  );
}

export default App;
