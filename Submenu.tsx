import React, { useEffect, useRef, useState } from 'react';

interface submenu {
  submenus: string[];
  setSubwidth: any;
  subWidth: number;
  handleMenu: any;
}

export default function Submenu({ submenus, subWidth, setSubwidth }: submenu) {
  const subref = useRef(null);
  const [left, setLeft] = useState('');
  useEffect(() => {
    subref.current ? setLeft(subref.current.getBoundingClientRect()) : '';
    left ? setSubwidth(left) : '';
  });


  return (
    <div
      className="subMenus"
      ref={subref}
      style={{ left: `-${left ? left.width / 2 : ''}px` }}
    >
      {submenus.map((menus) => (
        <span key={menus}>{menus}</span>
      ))}
    </div>
  );
}
