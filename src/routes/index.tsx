import { RoutesPath, UIRoutesType } from './routes-path';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '~/lib/ui/layout/Layout';

/**
 * Automatically generated from the routes defined in the routes folder.
 * @returns {JSX.Element}
 */
export function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        {Object.entries(RoutesPath).map(([key, route]) => {
          const typedRoute = route as UIRoutesType;
          return (
            <Route
              key={key}
              path={typedRoute.path}
              element={<typedRoute.component />}
            />
          );
        })}
      </Route>
    </Routes>
  );
}
