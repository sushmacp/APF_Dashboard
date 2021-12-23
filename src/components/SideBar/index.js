import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import './sidebar.css';

import sidebar_items from '../../assets/JsonData/sidebar_routes.json';
import { Button } from '@arithaconsulting/apf_component_library';

const SidebarItem = ({ icon, active, title }) => (
  <div className="sidebar__item">
    <div className={`sidebar__item-inner ${active ? 'active' : ''}`}>
      <i className={`${icon} sidebar-icon`} />
      <span className="sidebar-text">{title}</span>
    </div>
  </div>
);

export const Sidebar = (props) => {
  const activeItem = sidebar_items.findIndex(
    (item) => item.route === props.location.pathname
  );
  const [sideBarCollapsed, setSideBarCollapsed] = useState(true);

  const handleSidebarClick = () => {
    setSideBarCollapsed(!sideBarCollapsed);
    props.setSideBarCollapsed(!sideBarCollapsed);
  };
  return (
    <div className={sideBarCollapsed ? 'sidebar' : 'sidebar collapsed'}>
      <div className="sidebar__logo shadow-sm bg-white">
        <Button
          color="link"
          size="sm"
          className="px-2 py-0 border-0 text-dark collapse-button"
          onClick={() => handleSidebarClick()}
        >
          <i className="bx bx-menu" />
        </Button>
        <span className="sidebar-text">Issue Tracker</span>
      </div>

      {sidebar_items.map((item, index) => {
        const key = index + 1;
        return (
          <Link to={item.route} key={index}>
            <SidebarItem
              key={key}
              title={item.display_name}
              icon={item.icon}
              active={index === activeItem}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
