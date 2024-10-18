/** @format */

import {useRoutes} from 'react-router-dom';
import Land from '../pages/land';

const AppRoutes: React.FC = () => {
  const routes = useRoutes([
    {path: '/', element: <Land />},
    {path: '/about', element: <Land />},
  ]);

  return routes;
};
export default AppRoutes;
