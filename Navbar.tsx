import React, { useState, useRef, useEffect } from 'react';
import Submenu from './Submenu';
import { FaCaretUp, FaFire, FaChevronRight } from 'react-icons/fa';

import Button from './Button';

interface menus {
  title: string;
  subMenu: {
    name: string;
    icon: JSX.Element;
  }[];
}
[];
export default function Navbar({ menus }: menus) {
  const [submenu, setSubmenus] = useState();
  const [right, setRight] = useState();
  const [subWidth, setSubwidth] = useState();

  const navref = useRef(null);
  const handleMenu = (event: any) => {
    const childRect = event.target.getBoundingClientRect();
    const parentRect = navref.current.getBoundingClientRect();
    const childCenter = childRect.width / 2;

    const childPos = {
      x: childRect.left - parentRect.left,
      y: childRect.top - parentRect.top,
    };

    setRight(childPos.x + childCenter);
  };
  const getSubwith = (width: any) => {
    setSubwidth(width);
  };

  const [btnIcon, setBtnicon] = useState(<FaChevronRight />);
  const [shadow, setShadow] = useState<any>({
    boxShadow: '2px 2px 0 0 rgb(228, 154, 43)',
    transform: 'translateX(-1px) translateY(-2px)',
  });

  return (
    <div className="nav-container">
      <div className="logoContainer">
        <FaFire />
      </div>
      <div className="menuContainer" onMouseLeave={() => setSubmenus()}>
        <ul className="menulistContainer" ref={navref}>
          {menus.map((menu, x) => (
            <li
              className="menuList"
              key={menu.title}
              onMouseOver={(e) => {
                handleMenu(e);
                e.target.style.color = 'aqua';
                setSubmenus(menu.subMenu);
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '';
              }}
            >
              {menu.title}
            </li>
          ))}
        </ul>
        <span className="arrow" style={{ left: `${right - 10}px` }}>
          {submenu ? <FaCaretUp /> : ''}
        </span>

        <div className="floatingNavbar" style={{ left: `${right}px` }}>
          {submenu ? (
            <Submenu
              submenus={submenu}
              setSubwidth={getSubwith}
              subWidth={0}
              handleMenu={undefined}
            />
          ) : (
            ''
          )}
        </div>
      </div>
      <div
        className="userContainer"
        style={shadow}
        onClick={() =>
          setShadow({
            boxShadow: 'none',
            transform: 'translateX(0px) translateY(0px)',
          })
        }
        onMouseLeave={() => {
          setShadow({
            boxShadow: '2px 2px 0 0 rgb(228, 154, 43)',
            transform: 'translateX(-1px) translateY(-2px)',
          });
        }}
      >
        <Button text={'Sign in'} icons={undefined} menuIcon={undefined} />
      </div>
    </div>
  );
}
