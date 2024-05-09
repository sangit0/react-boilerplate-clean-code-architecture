import { RoutesPath, UIRoutesType } from './routes-path';
import { Route, Routes } from 'react-router';

/**
 * Automatically generated from the routes defined in the routes folder.
 * @returns {JSX.Element}
 */
export function AppRoutes() {
  const routes = RoutesPath;

  return (
    <Routes>
      {Object.entries(routes).map(([key, route]) => {
        const typedRoute = route as UIRoutesType;
        return (
          <Route
            key={key}
            path={typedRoute.path}
            element={<typedRoute.component />}
          />
        );
      })}
    </Routes>
  );
}
