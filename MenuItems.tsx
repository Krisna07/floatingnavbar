import { FaHome, FaShoppingBag, FaTools, FaFacebookF, FaNewspaper, FaEnvelope, FaComments, FaFileAlt, FaUsers, FaQuestion, FaFileContract, FaHandsHelping, FaServer, FaPaintBrush, FaChartBar, FaDonate, FaBuilding, FaStar } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineInstagram, AiFillYoutube, AiFillLinkedin, AiFillTwitterCircle, AiFillShop, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiDonateBlood } from 'react-icons/bi';
import { IoIosPeople } from 'react-icons/io';
import { MdEventAvailable } from 'react-icons/md';
import { RiGalleryLine } from 'react-icons/ri';
import { SiGooglemaps } from 'react-icons/si';
import React=require('react');

const menu = [
    {
      title: 'Home',
      subMenu: [
        { name: 'About', icon: <FaHome size={16} color="#4477FF" /> },
        { name: 'Contact', icon: <FiPhoneCall size={16} color="#FF7766" /> },
        { name: 'News', icon: <FaNewspaper size={16} color="#FFC107" /> },
        { name: 'Events', icon: <MdEventAvailable size={16} color="#D81B60" /> },
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
        { name: 'Cart', icon: <AiOutlineShoppingCart size={16} color="#F44336" /> },
        { name: 'Wishlist', icon: <AiOutlineHeart size={16} color="#FF5722" /> },
        { name: 'Compare', icon: <FaFileContract size={16} color="#2196F3" /> },
        { name: 'Reviews', icon: <FaComments size={16} color="#D81B60" /> },
      ],
    },
    {
      title: 'Services',
      subMenu: [
        { name: 'Web Development', icon: <FaTools size={16} color="#4CAF50" /> },
        { name: 'SEO', icon: <FaFileAlt size={16} color="#FFC107" /> },
        { name: 'Graphic Design', icon: <FaPaintBrush size={16} color="#9C27B0" /> },
        { name: 'Consulting', icon: <FaChartBar size={16} color="#3F51B5" /> },
        { name: 'Hosting', icon: <FaServer size={16} color="#F44336" /> },
        { name: 'Email Marketing', icon: <FaEnvelope size={16} color="#FF5722" /> },
        { name: 'Social Media', icon: <FaFacebookF size={16} color="#2196F3" /> },
        { name: 'Video Editing', icon: <AiFillYoutube size={16} color="#D81B60" /> },
        ],
        },
        {
        title: 'Donate',
        subMenu: [
        { name: 'Blood Donation', icon: <BiDonateBlood size={16} color="#F44336" /> },
        { name: 'Volunteering', icon: <FaHandsHelping size={16} color="#FFC107" /> },
        { name: 'Fundraising', icon: <FaDonate size={16} color="#4CAF50" /> },
        ],
        },
        {
        title: 'About Us',
        subMenu: [
        { name: 'Company Profile', icon: <FaBuilding size={16} color="#9C27B0" /> },
        { name: 'Our Team', icon: <IoIosPeople size={16} color="#4CAF50" /> },
        { name: 'FAQ', icon: <FaQuestion size={16} color="#FFC107" /> },
        { name: 'Testimonials', icon: <FaStar size={16} color="#F44336" /> },
        ],
        },
        {
        title: 'Connect',
        subMenu: [
        { name: 'Facebook', icon: <FaFacebookF size={16} color="#3F51B5" /> },
        { name: 'Instagram', icon: <AiOutlineInstagram size={16} color="#E91E63" /> },
        { name: 'Twitter', icon: <AiFillTwitterCircle size={16} color="#4CAF50" /> },
        { name: 'LinkedIn', icon: <AiFillLinkedin size={16} color="#0077B5" /> },
        ],
        },
        ];
        
        export default menu;

