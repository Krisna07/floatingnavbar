import React, { useState, useRef, useEffect } from 'react';
import Submenu from './Submenu';
import {
  FaCaretUp,
  FaFire,
  FaChevronRight,
  FaArrowRight,
} from 'react-icons/fa';
import {
  FaHome,
  FaShoppingBag,
  FaGlobe,
  FaUsers,
  FaEnvelope,
  FaComments,
  FaQuestion,
  FaFileAlt,
} from 'react-icons/fa';

import Button from './Button';
import {
  FaHome,
  FaShoppingBag,
  FaTools,
  FaFacebookF,
  FaNewspaper,
  FaEnvelope,
  FaComments,
  FaFileAlt,
  FaUsers,
  FaQuestion,
  FaFileContract,
  FaHandsHelping,
  FaServer,
  FaPaintBrush,
  FaChartBar,
  FaDonate,
  FaBuilding,
  FaStar,
} from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import {
  AiOutlineInstagram,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillShop,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { BiDonateBlood } from 'react-icons/bi';
import { IoIosPeople } from 'react-icons/io';
import { MdEventAvailable } from 'react-icons/md';
import { RiGalleryLine } from 'react-icons/ri';
import { SiGooglemaps } from 'react-icons/si';

interface navbar {
  menu: {
    title: string;
    submenu: string[];
  };
}
export default function Navbar() {
  // const menu = [
  //   {
  //     title: 'Home',
  //     subMenu: [
  //       'About',
  //       'Contact',
  //       'News',
  //       'Events',
  //       'Gallery',
  //       'Team',
  //       'Careers',
  //       'Sitemap',
  //     ],
  //   },
  //   {
  //     title: 'Products',
  //     subMenu: [
  //       'Electronics',
  //       'Books',
  //       'Clothing',
  //       'Shop',
  //       'Cart',
  //       'Wishlist',
  //       'Compare',
  //       'Reviews',
  //     ],
  //   },
  //   {
  //     title: 'Services',
  //     subMenu: [
  //       'Web Development',
  //       'SEO',
  //       'Graphic Design',
  //       'Consulting',
  //       'Hosting',
  //       'Maintenance',
  //       'Training',
  //       'Support',
  //     ],
  //   },

  //   {
  //     title: 'Social Media',
  //     subMenu: [
  //       'Facebook',
  //       'Twitter',
  //       'Instagram',
  //       'LinkedIn',
  //       'YouTube',
  //       'Pinterest',
  //       'Snapchat',
  //       'TikTok',
  //     ],
  //   },
  //   {
  //     title: 'Newsletter',
  //     subMenu: [
  //       'Subscribe',
  //       'Unsubscribe',
  //       'Manage Preferences',
  //       'View Archive',
  //       'Share with Friends',
  //       'Report Issues',
  //       'Contact Us',
  //       'Donate',
  //     ],
  //   },
  //   {
  //     title: 'Testimonials',
  //     subMenu: [
  //       'Clients',
  //       'Partners',
  //       'Media',
  //       'Awards',
  //       'Case Studies',
  //       'Success Stories',
  //       'Feedback',
  //       'Survey',
  //     ],
  //   },
  //   {
  //     title: 'FAQ',
  //     subMenu: [
  //       'General Questions',
  //       'Technical Questions',
  //       'Payment Questions',
  //       'Shipping Questions',
  //       'Return Questions',
  //       'Account Questions',
  //       'Security Questions',
  //       'Other Questions',
  //     ],
  //   },
  //   {
  //     title: 'Terms and Conditions',
  //     subMenu: [
  //       'Privacy Policy',
  //       'Cookie Policy',
  //       'Refund Policy',
  //       'Cancellation Policy',
  //       'Delivery Policy',
  //       'Disclaimer Policy',
  //       'User Agreement Policy',
  //       'License Policy',
  //     ],
  //   },
  // ];
  const menu = [
    {
      title: 'Home',
      subMenu: [
        { name: 'Home', icon: <FaHome size={16} color="#4477FF" /> },
        { name: 'Contact', icon: <FiPhoneCall size={16} color="#FF7766" /> },
        { name: 'News', icon: <FaNewspaper size={16} color="#FFC107" /> },
        {
          name: 'Events',
          icon: <MdEventAvailable size={16} color="#D81B60" />,
        },
        { name: 'Gallery', icon: <RiGalleryLine size={16} color="#4CAF50" /> },
        { name: 'Team', icon: <IoIosPeople size={16} color="#9C27B0" /> },
        { name: 'Careers', icon: <FaUsers size={16} color="#E91E63" /> },
        { name: 'Sitemap', icon: <SiGooglemaps size={16} color="#2196F3" /> },
      ],
    },
    {
      title: 'Products',
      subMenu: [
        { name: 'Electronics', icon: <FaTools size={16} color="#4CAF50" /> },
        { name: 'Books', icon: <FaFileAlt size={16} color="#FFC107" /> },
        { name: 'Clothing', icon: <AiFillShop size={16} color="#9C27B0" /> },
        { name: 'Shop', icon: <AiFillShop size={16} color="#3F51B5" /> },
        {
          name: 'Cart',
          icon: <AiOutlineShoppingCart size={16} color="#F44336" />,
        },
        {
          name: 'Wishlist',
          icon: <AiOutlineHeart size={16} color="#FF5722" />,
        },
        { name: 'Compare', icon: <FaFileContract size={16} color="#2196F3" /> },
        { name: 'Reviews', icon: <FaComments size={16} color="#D81B60" /> },
      ],
    },
    {
      title: 'Services',
      subMenu: [
        {
          name: 'Web Development',
          icon: <FaTools size={16} color="#4CAF50" />,
        },
        { name: 'SEO', icon: <FaFileAlt size={16} color="#FFC107" /> },
        {
          name: 'Graphic Design',
          icon: <FaPaintBrush size={16} color="#9C27B0" />,
        },
        { name: 'Consulting', icon: <FaChartBar size={16} color="#3F51B5" /> },
        { name: 'Hosting', icon: <FaServer size={16} color="#F44336" /> },
        {
          name: 'Email Marketing',
          icon: <FaEnvelope size={16} color="#FF5722" />,
        },
        {
          name: 'Social Media',
          icon: <FaFacebookF size={16} color="#2196F3" />,
        },
        {
          name: 'Video Editing',
          icon: <AiFillYoutube size={16} color="#D81B60" />,
        },
      ],
    },
    {
      title: 'Donate',
      subMenu: [
        {
          name: 'Blood Donation',
          icon: <BiDonateBlood size={16} color="#F44336" />,
        },
        {
          name: 'Volunteering',
          icon: <FaHandsHelping size={16} color="#FFC107" />,
        },
        { name: 'Fundraising', icon: <FaDonate size={16} color="#4CAF50" /> },
      ],
    },
    {
      title: 'About Us',
      subMenu: [
        {
          name: 'Company Profile',
          icon: <FaBuilding size={16} color="#9C27B0" />,
        },
        { name: 'Our Team', icon: <IoIosPeople size={16} color="#4CAF50" /> },
        { name: 'FAQ', icon: <FaQuestion size={16} color="#FFC107" /> },
        { name: 'Testimonials', icon: <FaStar size={16} color="#F44336" /> },
      ],
    },
    {
      title: 'Connect',
      subMenu: [
        { name: 'Facebook', icon: <FaFacebookF size={16} color="#3F51B5" /> },
        {
          name: 'Instagram',
          icon: <AiOutlineInstagram size={16} color="#E91E63" />,
        },
        {
          name: 'Twitter',
          icon: <AiFillTwitterCircle size={16} color="#4CAF50" />,
        },
        {
          name: 'LinkedIn',
          icon: <AiFillLinkedin size={16} color="#0077B5" />,
        },
      ],
    },
  ];
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

  return (
    <div className="nav-container">
      <div className="logoContainer">
        <FaFire />
      </div>
      <div className="menuContainer" onMouseLeave={() => setSubmenus()}>
        <ul className="menulistContainer" ref={navref}>
          {menu.map((menu, x) => (
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
            <Submenu submenus={submenu} setSubwidth={getSubwith} />
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="userContainer">
        <Button text={'Sign in'} />
      </div>
    </div>
  );
}
