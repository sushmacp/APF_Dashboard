import React, { useState, useEffect } from 'react';

import './layout.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Sidebar } from '../SideBar';
import { TopNav } from '../TopNav';
import { CustomRoutes } from '../CustomRoutes';
import AuthRoutes from '../AuthRoutes';

export const Layout = () => {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(true);
  const [isAuthenticated,setisAuthenticated] = useState(false);

  // const isAuthenticated = false;

  useEffect(()=>{
    if(
    localStorage.getItem(
      "mantisSwagger-token")
    ){
    setisAuthenticated(true);
    }
    else{
      setisAuthenticated(false);

    }
  })

  return (
    <BrowserRouter>
      <Switch>
        {!isAuthenticated ? (
          <Route>
            <AuthRoutes />
          </Route>
        ) : (
          <Route
            render={(props) => (
              <div>
                <Sidebar {...props} setSideBarCollapsed={setSideBarCollapsed} />
                <div
                  className={
                    sideBarCollapsed
                      ? 'layout__content'
                      : 'layout__content expand'
                  }
                >
                  <TopNav />
                  <div className="layout__content-main">
                    <CustomRoutes />
                  </div>
                </div>
              </div>
            )}
          />
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default Layout;
