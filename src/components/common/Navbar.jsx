
// Navbar component for the dashboard UI
// Contains left section (sidebar toggle, star, breadcrumbs) and right section (search, action icons)
import React from 'react';


const Navbar = ({
  isDarkMode, // Boolean: true if dark mode is enabled
  toggleTheme, // Function: toggles theme between light/dark
  toggleSidebar, // Function: toggles the left sidebar
  toggleNotification, // Function: toggles notification panel
  toggleRightSidebar, // Function: toggles the right sidebar
}) => (
  <div
    className="flex flex-row justify-between items-stretch w-full border-b border-global-2 px-4 py-5 min-h-[64px]"
  >
    {/*
      Left Section: Contains sidebar toggle, star icon, and breadcrumbs
      - Sidebar toggle only visible on large screens
      - Star icon for favorite/featured indication
      - Breadcrumbs for navigation context
    */}
    <div className="flex items-center gap-4">
      {/* Sidebar Toggle (visible on lg screens only) */}
      <div className="hidden lg:block cursor-pointer" onClick={toggleSidebar}>
        <img
          src="/images/img_sidebar.svg"
          className="w-5 h-5 themed-icon"
          alt="sidebar"
        />
      </div>
      {/* Star Icon */}
      <div>
        <img
          src="/images/img_star.svg"
          className="w-5 h-5 themed-icon"
          alt="star"
        />
      </div>
      {/* Breadcrumbs: Dashboards / Default */}
      <div className="flex items-center flex-wrap gap-1 text-sm text-global-3">
        <span>Dashboards</span>
        <span className="text-global-2">/</span>
        <span className="text-global-1 dark:text-white font-medium">Default</span>
      </div>
    </div>

    {/*
      Right Section: Contains search bar and action icons
      - Search bar for quick search
      - Theme toggle, reload, notification, and right sidebar toggle icons
    */}
    <div className="flex items-center gap-4">
      {/* Search Bar */}
      <div className="relative w-[180px] sm:w-[220px] md:w-[250px]">
        <img
          src="/images/img_search.svg"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 themed-icon"
          alt="search"
        />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-global-1 rounded-md py-1.5 pl-9 pr-10 text-sm text-global-2 outline-none"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-global-2 select-none pointer-events-none">
          ⌘/
        </span>
      </div>

      {/* Action Icons: theme, reload, notification, right sidebar */}
      <div className="flex items-center gap-3">
        {/* Theme Toggle: toggles light/dark mode */}
        <div onClick={toggleTheme} className="cursor-pointer">
          <img
            src={isDarkMode ? '/images/img_sun.svg' : '/images/img_sun.svg'}
            className="w-5 h-5 themed-icon"
            alt="theme"
          />
        </div>
        {/* Reload: reloads the page */}
        <div onClick={() => window.location.reload()} className="cursor-pointer">
          <img
            src="/images/img_clockcounterclockwise.svg"
            className="w-5 h-5 themed-icon"
            alt="reload"
          />
        </div>
        {/* Notification: opens notification panel */}
        <div onClick={toggleNotification} className="cursor-pointer">
          <img
            src="/images/img_bell.svg"
            className="w-5 h-5 themed-icon"
            alt="notification"
          />
        </div>
        {/* Right Sidebar Toggle (visible on lg screens only) */}
        <div className="hidden lg:block cursor-pointer" onClick={toggleRightSidebar}>
          <img
            src="/images/img_sidebar.svg"
            className="w-5 h-5 themed-icon"
            alt="right sidebar"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Navbar;
