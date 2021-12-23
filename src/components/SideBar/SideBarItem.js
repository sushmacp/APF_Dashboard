import React from 'react';

const SideBarItem = ({ active, icon, title }) => (
  <div className="sidebar__item">
    <div className={`sidebar__item-inner ${active ? 'active' : ''}`}>
      <i className={icon} />
      <span>{title}</span>
    </div>
  </div>
);

export default SideBarItem;
