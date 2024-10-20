/** @format */

import { useRoutes } from "react-router-dom";
import LandSource from "../pages/LandSource";
import LandAnalyze from "../pages/LandAnalyze";
import LandSort from "../pages/LandSort";
import BasicLayout from "../components/BasicLayout";
import ParceList from "../pages/Parce/List";
import ParceAnalyze from "../pages/ParceAnalyze";
import ParceDetail from "../pages/Parce/Detail";
import BasicList from "../pages/Basic/List";

const AppRoutes: React.FC = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <BasicLayout />,
      children: [
        {
          path: "land",

          children: [
            {
              path: "sources",
              element: <LandSource />,
            },
            { path: "data", element: <LandAnalyze /> },
            { path: "sort", element: <LandSort /> },
          ],
        },
        {
          path: "parce",
          children: [
            {
              path: "list",
              element: <ParceList />,
            },
            { path: "analyze", element: <ParceAnalyze /> },
            {
              path: "create",
              element: <ParceDetail />,
            },
          ],
        },
        { path: "basic", element: <BasicList /> },
        { path: "organization", element: <LandSource /> },
      ],
    },
  ]);

  return routes;
};
export default AppRoutes;
