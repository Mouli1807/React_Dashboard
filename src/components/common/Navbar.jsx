// Navbar component for the dashboard header
// Handles menu, search, theme toggle, and quick actions
import React from 'react';


const Navbar = ({
  isDarkMode, // Boolean for dark mode state
  toggleTheme, // Function to toggle theme
  toggleSidebar, // Function to toggle left sidebar
  toggleNotification, // Function to toggle notifications
  toggleRightSidebar, // Function to toggle right sidebar
}) => (
  // Main navbar container
  <div className="flex flex-row justify-start items-center w-full border-b border-global-2 pt-[20px] pr-[20px] pb-[20px] pl-[20px]">
    {/* Left section: logo, breadcrumbs */}
    <div className="flex flex-row justify-center items-center w-full sm:w-[46%]">
      {/* Sidebar icon and star icon */}
      <div className="flex flex-row justify-center items-center w-full sm:w-[16%]">
        {/* Sidebar toggle button (visible on lg screens) */}
        <div
          className="hidden lg:block pt-[4px] pr-[4px] pb-[4px] pl-[4px] cursor-pointer"
          onClick={toggleSidebar}
        >
          <img
            src="/images/img_sidebar.svg"
            className="w-[20px] h-[20px] themed-icon"
            alt="sidebar"
          />
        </div>
        {/* Star icon */}
        <div className="pt-[4px] pr-[4px] pb-[4px] pl-[4px]">
          <img src="/images/img_star.svg" className="w-[20px] h-[20px] themed-icon" alt="star" />
        </div>
      </div>
      {/* Breadcrumbs */}
      <div className="flex flex-row gap-[4px] justify-center items-center flex-1">
        {/* Dashboard label */}
        <div className="flex flex-row justify-center items-center w-auto">
          <div className="flex flex-row justify-center items-center w-auto">
            <span className="text-[14px] font-inter font-normal leading-[17px] text-center text-global-3">
              Dashboards
            </span>
          </div>
        </div>
        {/* Slash separator */}
        <div className="flex flex-col justify-start items-end w-auto">
          <span className="text-[14px] font-inter font-normal leading-[17px] text-left text-global-2">
            /
          </span>
        </div>
        {/* Default label */}
        <div className="flex flex-row justify-start items-center flex-1 mr-[8px] ml-[8px]">
          <div className="flex flex-row justify-start items-center w-full  ">
            <span className="text-[14px] font-inter font-normal leading-[17px] text-center text-global-1 dark:text-white">
              Default
            </span>
          </div>
        </div>
      </div>
    </div>
    {/* Right section: search, actions */}
    <div className="flex flex-row justify-end items-center flex-1">
      {/* Search bar with input and ⌘/ placeholder, not using SearchView */}
      <div className="flex flex-row justify-between items-center w-full sm:w-[34%] ">
        <div className="relative flex-1 bg-global-1 rounded-[8px] h-6 p-2 flex items-center">
          <img
            src="/images/img_search.svg"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-[16px] h-[16px] themed-icon"
            alt="search"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent outline-none border-none text-[14px] font-inter font-normal leading-[17px] text-left text-global-2 pl-8 pr-8"
            style={{ minWidth: 0 }}
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[14px] font-inter font-normal leading-[17px] text-global-2 select-none pointer-events-none">
            ⌘/
          </span>
        </div>
      </div>
      {/* Action icons: theme, reload, notifications, right sidebar */}
      <div className="flex flex-row gap-[4px] justify-end items-center w-full sm:w-[32%]">
        {/* Theme toggle button */}
        <div
          className="flex flex-col justify-start items-end flex-1 pt-[4px] pr-[4px] pb-[4px] pl-[4px] cursor-pointer"
          onClick={toggleTheme}
        >
          <img
            src={isDarkMode ? '/images/img_sun.svg' : '/images/img_sun.svg'}
            className="w-[20px] h-[20px] themed-icon"
            alt={isDarkMode ? 'moon' : 'sun'}
          />
        </div>
        {/* Reload button */}
        <div
          className="flex flex-col justify-start items-end w-auto pt-[4px] pr-[4px] pb-[4px] pl-[4px] cursor-pointer"
          onClick={() => window.location.reload()}
        >
          <img
            src="/images/img_clockcounterclockwise.svg"
            className="w-[20px] h-[20px] themed-icon"
            alt="clock"
          />
        </div>
        {/* Notification button */}
        <div
          className="flex flex-col justify-start items-end w-auto pt-[4px] pr-[4px] pb-[4px] pl-[4px] cursor-pointer"
          onClick={toggleNotification}
        >
          <img src="/images/img_bell.svg" className="w-[20px] h-[20px] themed-icon" alt="bell" />
        </div>
        {/* Right sidebar toggle button (visible on lg screens) */}
        <div
          className="hidden lg:block pt-[4px] pr-[4px] pb-[4px] pl-[4px] cursor-pointer"
          onClick={toggleRightSidebar}
        >
          <img
            src="/images/img_sidebar.svg"
            className="w-[20px] h-[20px] themed-icon"
            alt="right sidebar"
          />
        </div>
      </div>
    </div>
  </div>
);


export default Navbar;
