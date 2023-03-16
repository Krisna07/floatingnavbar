import React, { useEffect, useMemo, useRef, useState } from 'react';
import Button from './Button';

interface SubmenuProps {
  submenus: { name: string; icon: JSX.Element }[];
  setSubwidth: any;
  subWidth: number;
  handleMenu: any;
}

export default function Submenu({
  submenus,
  subWidth,
  setSubwidth,
}: SubmenuProps) {
  const subref = useRef(null);
  const [left, setLeft] = useState('');

  useEffect(() => {
    const ref = subref.current;
    if (ref) {
      const left = ref.getBoundingClientRect();
      setLeft(left);
      setSubwidth(left.width);
    }
  }, [submenus, setSubwidth]);

  const memoizedSubmenus = useMemo(() => submenus, [submenus]);

  return (
    <div
      className="subMenus"
      ref={subref}
      style={{ left: `-${left ? left.width / 2 : ''}px` }}
    >
      {memoizedSubmenus.map((menu) => (
        <Button key={menu.name} text={menu.name} menuIcon={menu.icon} />
      ))}
    </div>
  );
}
