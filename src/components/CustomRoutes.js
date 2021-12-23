import React from 'react';

import { Route } from 'react-router-dom';

import DashboardView from '../pages/DashboardView';
import Apge2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';
import Logout  from '../pages/Logout';

export const CustomRoutes = () => (
  <>
    <Route path="/" exact private>
      <DashboardView />
    </Route>
    {/* <Route path="/page1" private>
      <Apge2 />
    </Route> */}
    <Route path="/page2" private>
      <Page3 />
    </Route>
    <Route path="/page4" private>
      <Page4 />
    </Route>
    <Route path="/logout" private>
      <Logout />
    </Route>
  </>
);

export default CustomRoutes;
