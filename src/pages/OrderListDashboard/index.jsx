// Dashboard page for displaying and managing a list of orders. Includes search, selection, pagination, and sidebar.
// Uses Tailwind CSS for layout and modular UI components.
import React, { useState } from 'react';
import SearchView from '../../components/ui/SearchView';
import Button from '../../components/ui/Button';
import Sidebar from '../../components/common/Sidebar';
import Table from '../../components/common/Table';
import { useTheme } from '../../context/ThemeContext';
import Navbar from '../../components/common/Navbar';
import AddOrderModal from '../../components/common/AddOrderModal';
import { useSelector, useDispatch } from 'react-redux';
import { addOrder } from '../../store/ordersSlice';

const OrderListDashboard = () => {
  // --- State for search, selection, pagination, sidebar, and modal ---
  const [searchValue, setSearchValue] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const { isDarkMode, toggleTheme } = useTheme();
  const [notificationVisible, setNotificationVisible] = useState(true);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);

  // Toggle selection for a single row by order ID
  const handleRowSelect = (orderId) => {
    setSelectedRows((prev) =>
      prev?.includes(orderId) ? prev?.filter((id) => id !== orderId) : [...prev, orderId]
    );
  };

  // Select or deselect all rows in the table
  const handleSelectAll = () => {
    setSelectedRows(
      selectedRows?.length === orders?.length ? [] : orders?.map((order) => order?.id)
    );
  };

  // Add new order via modal and redux
  const handleAddOrder = (order) => {
    dispatch(addOrder(order));
  };
  // State for Navbar menu and sidebar visibility
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  // Toggle left sidebar visibility
  const toggleSidebar = () => setSidebarVisible((prev) => !prev);
  // Toggle notification panel visibility
  const toggleNotification = () => setNotificationVisible((prev) => !prev);

  // Main dashboard layout
  return (
    <div className="flex flex-row w-full min-h-screen bg-global-7">
      {/* Use the new interactive Sidebar component */}
      {sidebarVisible && <Sidebar/>}

      {/* Main Content */}
      <div className={`flex flex-col gap-[28px] justify-start items-center ${sidebarVisible ? 'flex-1' : 'w-full'}`}>
        <Navbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          toggleSidebar={toggleSidebar}
          notificationVisible={notificationVisible}
          toggleNotification={toggleNotification}
        />

        {/* Order List Content */}
        <div className="flex flex-col gap-[12px] justify-start items-center w-full mx-[28px]">
          {/* Page Title */}
          <div className="flex flex-row justify-start items-center w-full px-[8px]">
            <span className="text-[14px] font-inter font-semibold leading-[17px] text-left text-global-1">
              Order List
            </span>
          </div>

          {/* Action Bar */}
          <div className="flex flex-row justify-start items-center w-full bg-global-6 rounded-[8px] pt-[8px] pr-[8px] pb-[8px] pl-[8px]">
            <div className="flex flex-row gap-[4px] justify-center items-center flex-1">
              {/* Add Button */}
              <div className="flex flex-col justify-start items-center w-auto pt-[4px] pr-[4px] pb-[4px] pl-[4px] cursor-pointer" onClick={() => setAddModalOpen(true)}>
                <img
                  src="/images/img_add.svg"
                  alt="add"
                  className="w-[20px] h-[20px] themed-icon"
                />
              </div>

              {/* Filter Button */}
              <div className="flex flex-col justify-start items-end w-auto pt-[4px] pr-[4px] pb-[4px] pl-[4px]">
                <img
                  src="/images/img_funnelsimple.svg"
                  alt="filter"
                  className="w-[20px] h-[20px] themed-icon"
                />
              </div>

              {/* Sort Button */}
              <div className="flex flex-col justify-start items-start flex-1 px-[8px] pt-[4px] pb-[4px]">
                <img
                  src="/images/img_arrowsdownup.svg"
                  alt="sort"
                  className="w-[20px] h-[20px] themed-icon"
                />
              </div>
            </div>

            {/* Search Input */}
            <SearchView
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e?.target?.value)}
              className="w-full sm:w-[14%] themed-icon"
            />
          </div>

          {/* Replace the existing table with the Table component */}
          <Table
            orders={orders}
            selectedRows={selectedRows}
            handleSelectAll={handleSelectAll}
            handleRowSelect={handleRowSelect}
          />

          {/* Pagination */}
          <div className="flex flex-row justify-center items-center w-full">
            <div className="flex flex-col justify-start items-end flex-1">
              <img
                src="/images/img_arrowlineleft.svg"
                alt="previous"
                className="w-[20px] h-[20px] themed-icon"
              />
            </div>

            <Button variant="primary" size="medium" className="ml-[8px]">
              1
            </Button>

           <Button variant="secondary" size="medium" className="ml-[8px]">
              2
            </Button>
            <Button variant="secondary" size="medium" className="ml-[8px]">
              3
            </Button>

            <Button variant="secondary" size="medium" className="ml-[8px]">
              4
            </Button>

            <Button variant="secondary" size="medium" className="ml-[8px]">
              5
            </Button>

            <div className="flex flex-col justify-start items-end w-auto pt-[4px] pr-[4px] pb-[4px] pl-[4px]">
              <img
                src="/images/img_arrowlineright.svg"
                alt="next"
                className="w-[20px] h-[20px] themed-icon"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Add Order Modal */}
      <AddOrderModal open={addModalOpen} onClose={() => setAddModalOpen(false)} onSubmit={handleAddOrder} />
    </div>
  );
};

export default OrderListDashboard;
