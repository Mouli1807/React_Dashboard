
// Sidebar component for navigation and quick access
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
  // State for selected menu item
  const [selectedItem, setSelectedItem] = useState('Default');
  // State for expanded dropdowns
  const [expandedDropdowns, setExpandedDropdowns] = useState({ 'User Profile': false });
  // React Router navigation
  const navigate = useNavigate();

  // Toggle dropdown open/close
  const toggleDropdown = (itemName) => {
    setExpandedDropdowns(prev => ({
      ...prev,
      [itemName]: !prev?.[itemName]
    }));
  };

  // Handle menu item selection and navigation
  const handleItemSelect = (itemName, href) => {
    setSelectedItem(itemName);
    if (href) navigate(href);
  };

  // Dashboard section items
  const dashboardItems = [
    { name: 'Default', icon: '/images/img_chartpieslice.svg', href: '/', selectable: true },
    { name: 'eCommerce', icon: '/images/img_shoppingbagopen.svg', href: '/analytics', selectable: true },
    { name: 'Projects', icon: '/images/img_foldernotch.svg', href: '#', selectable: true },
    { name: 'Online Courses', icon: '/images/img_bookopen.svg', href: '#', selectable: true }
  ];

  // Pages section items (with dropdowns)
  const pagesItems = [
    {
      name: 'User Profile', icon: '/images/img_identificationbadge.svg', href: '#', selectable: true, isDropdown: true,
      children: [
        { name: 'Overview', href: '#' },
        { name: 'Projects', href: '#' },
        { name: 'Campaigns', href: '#' },
        { name: 'Documents', href: '#' },
        { name: 'Followers', href: '#' }
      ]
    },
    { name: 'Account', icon: '/images/img_identificationcard.svg', href: '#', selectable: true },
    { name: 'Corporate', icon: '/images/img_usersthree.svg', href: '#', selectable: true },
    { name: 'Blog', icon: '/images/img_notebook.svg', href: '#', selectable: true },
    { name: 'Social', icon: '/images/img_chatsteardrop.svg', href: '#', selectable: true }
  ];


  // Render a single menu item (with or without dropdown)
  const renderMenuItem = (item, isInDropdown = false) => {
    const isSelected = selectedItem === item?.name;
    const isExpanded = expandedDropdowns?.[item?.name];

    // Dropdown menu item
    if (item?.isDropdown) {
      return (
        <div key={item?.name}>
          {/* Dropdown parent item */}
          <div className="flex items-center w-full cursor-pointer" onClick={() => {
            toggleDropdown(item?.name);
            if (item?.selectable) handleItemSelect(item?.name);
          }}>
            <div className="p-[2px]">
              <img src={isExpanded ? '/images/img_arrow_down.svg' : '/images/img_arrowlineright.svg'} alt="arrow" className="w-[16px] h-[16px] themed-icon" />
            </div>
            <div className="flex items-center flex-1">
              <img src={item?.icon} alt={item?.name} className="w-[20px] h-[20px] themed-icon" />
              <span className="text-[14px] font-inter ml-[4px] text-global-1 truncate">{item?.name}</span>
            </div>
          </div>
          {/* Dropdown children */}
          {isExpanded && item?.children && (
            <div className="flex flex-col gap-[4px] w-full mb-[12px]">
              {item?.children?.map((child) => (
                <div key={child?.name} className="cursor-pointer" onClick={() => handleItemSelect(child?.name)}>
                  <div className="pl-[16px]">
                    <span className="text-[14px] font-inter text-global-1 ps-8 truncate">{child?.name}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    // Regular menu item
    return (
      <div
        key={item?.name}
        className={`flex items-center w-full cursor-pointer ${isSelected ? 'bg-global-1 rounded-[8px]' : ''}`}
        onClick={() => handleItemSelect(item?.name, item?.href)}
      >
        <div className="p-[2px]">
          <img src={isSelected ? '/images/img_selected.svg' : '/images/img_arrowlineright.svg'} alt="icon" className="w-[16px] h-[16px] themed-icon" />
        </div>
        <div className="flex items-center flex-1">
          <img src={item?.icon} alt={item?.name} className="w-[20px] h-[20px] themed-icon" />
          <span className="text-[14px] font-inter ml-[4px] text-global-1 truncate">{item?.name}</span>
        </div>
      </div>
    );
  };

  // Sidebar layout and sections
  return (
    <div className="flex flex-col gap-[24px] w-full sm:w-[35%] md:w-[25%] lg:w-[18%] min-w-[180px] border-r border-global-2 p-[20px] overflow-y-auto">
      {/* Logo and app name */}
      <div className="flex items-center mb-[16px]">
        <img src="/images/img_byewind.png" alt="ByeWind" className="w-[24px] h-[24px] rounded-[12px]" />
        <span className="ml-[8px] text-[14px] font-inter text-global-1 truncate">ByeWind</span>
      </div>

      {/* Favorites section */}
      <div className="flex flex-col gap-[4px] mb-[16px]">
        <div className="flex">
          <span className="text-[14px] font-inter text-global-3">Favorites</span>
          <span className="ml-[8px] text-[14px] font-inter text-global-2">Recently</span>
        </div>
        <div className="flex flex-col gap-[4px] mb-[12px]">
          {["Overview", "Projects"].map(name => (
            <div key={name} className="flex items-center">
              <img src="/images/img_dot.svg" alt="dot" className="w-[16px] h-[16px] themed-icon" />
              <span className="ml-[4px] text-[14px] font-inter text-global-1 truncate">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dashboards section */}
      <div className="flex flex-col gap-[4px] mb-[12px]">
        <span className="px-[12px] text-[14px] font-inter text-global-3">Dashboards</span>
        <div className="flex flex-col gap-[4px]">
          {dashboardItems.map(item => renderMenuItem(item))}
        </div>
      </div>

      {/* Pages section */}
      <div className="flex flex-col gap-[4px] mb-auto">
        <span className="px-[12px] text-[14px] font-inter text-global-3">Pages</span>
        <div className="flex flex-col gap-[4px]">
          {pagesItems.map(item => renderMenuItem(item))}
        </div>
      </div>
    </div>
  );
};


export default Sidebar;