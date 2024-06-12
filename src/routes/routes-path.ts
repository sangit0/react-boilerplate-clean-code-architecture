import { lazyLoad } from '../lib/ui/utils/lazyLoad';

export type UIRoutesType = {
  name: string;
  path: string;
  component: React.FC;
  children?: UIRoutesType[];
};

/**
 * Define your routes
 * @type {Record<keyof typeof UIRoutes, UIRoutesType>}
 */
const UIRoutes = {
  home: {
    name: 'navigation.home',
    path: '/',
    component: lazyLoad(() => import('../pages/home/Home')),
  },
};

export const RoutesPath: Record<keyof typeof UIRoutes, UIRoutesType> = UIRoutes;
