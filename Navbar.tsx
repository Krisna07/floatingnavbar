import React, { useState, useRef, useEffect } from 'react';
import Submenu from './Submenu';
import { FaCaretUp } from 'react-icons/fa';

export default function Navbar() {
  const menu = [
    {
      title: 'Home',
      subMenu: [
        'About',
        'Contact',
        'News',
        'Events',
        'Gallery',
        'Team',
        'Careers',
        'Sitemap',
      ],
    },
    {
      title: 'Products',
      subMenu: [
        'Electronics',
        'Books',
        'Clothing',
        'Shop',
        'Cart',
        'Wishlist',
        'Compare',
        'Reviews',
      ],
    },
    {
      title: 'Services',
      subMenu: [
        'Web Development',
        'SEO',
        'Graphic Design',
        'Consulting',
        'Hosting',
        'Maintenance',
        'Training',
        'Support',
      ],
    },
    {
      title: 'Blog',
      subMenu: [
        'Latest Posts',
        'Categories',
        'Archives',
        'Tags',
        'Search',
        'Comments',
        'RSS Feed',
        'Subscribe',
      ],
    },
    {
      title: 'Portfolio',
      subMenu: [
        'Web Projects',
        'AI Projects',
        'NLP Projects',
        'ML Projects',
        'DL Projects',
        'CV Projects',
        'RL Projects',
        'GAN Projects',
      ],
    },
    {
      title: 'Testimonials',
      subMenu: [
        'Clients',
        'Partners',
        'Media',
        'Awards',
        'Case Studies',
        'Success Stories',
        'Feedback',
        'Survey',
      ],
    },
    {
      title: 'FAQ',
      subMenu: [
        'General Questions',
        'Technical Questions',
        'Payment Questions',
        'Shipping Questions',
        'Return Questions',
        'Account Questions',
        'Security Questions',
        'Other Questions',
      ],
    },
    {
      title: 'Terms and Conditions',
      subMenu: [
        'Privacy Policy',
        'Cookie Policy',
        'Refund Policy',
        'Cancellation Policy',
        'Delivery Policy',
        'Disclaimer Policy',
        'User Agreement Policy',
        'License Policy',
      ],
    },
    {
      title: 'Social Media',
      subMenu: [
        'Facebook',
        'Twitter',
        'Instagram',
        'LinkedIn',
        'YouTube',
        'Pinterest',
        'Snapchat',
        'TikTok',
      ],
    },
    {
      title: 'Newsletter',
      subMenu: [
        'Subscribe',
        'Unsubscribe',
        'Manage Preferences',
        'View Archive',
        'Share with Friends',
        'Report Issues',
        'Contact Us',
        'Donate',
      ],
    },
  ];
  const [submenu, setSubmenus] = useState(null);
  const [right, setRight] = useState();

  console.log(submenu);

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

  console.log(right);
  return (
    <div className="nav-container">
      <div className="logoContainer"></div>
      <div className="menuContainer" onMouseLeave={() => setSubmenus()}>
        <ul className="menulistContainer" ref={navref}>
          {menu.map((menu, x) => (
            <li
              className="menuList"
              key={menu.title}
              onMouseOver={(e) => {
                handleMenu(e);
                setSubmenus(menu.subMenu);
              }}
            >
              {menu.title}
            </li>
          ))}
        </ul>
        <span className="arrow" style={{ left: `${right - 10}px` }}>
          {submenu ? <FaCaretUp /> : ''}
        </span>

        <div className="floatingNavbar" style={{ left: `${right - 100}px` }}>
          {submenu ? <Submenu submenus={submenu} /> : ''}
        </div>
      </div>
      <div className="userContainer"></div>
    </div>
  );
}
