import { Outlet } from 'react-router-dom';
import { Grid } from '../elements/Grid';
import { Header } from './header';
import { Div } from '../elements/Box/Box';

export const Layout = () => {
  return (
    <Grid>
      <Header />

      <Div as="main" p={4}>
        <Outlet />
      </Div>
    </Grid>
  );
};
