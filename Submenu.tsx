import React from 'react';

interface submenu {
  submenus: String[];
}

export default function Submenu({ submenus }: submenu) {
  return (
    <div className="subMenus">
      {submenus.map((menus) => (
        <span key={menus}>{menus}</span>
      ))}
    </div>
  );
}
