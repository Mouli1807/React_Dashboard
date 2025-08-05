import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setOrders } from '../../store/ordersSlice';

const Table = ({ orders, selectedRows, handleSelectAll, handleRowSelect }) => {
  const dispatch = useDispatch();
  const [actionMenu, setActionMenu] = useState(null); // order id or null

  // Delete order by id
  const handleDelete = (orderId) => {
    const filtered = orders.filter((order) => order.id !== orderId);
    dispatch(setOrders(filtered));
    setActionMenu(null);
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="grid grid-cols-[40px_100px_200px_200px_1fr_180px_100px_60px] gap-0 bg-global-6">
        {/* Headers */}
        <div className="contents">
          <div className="bg-global-7 p-3 border-b border-global-2">
            <input 
              type="checkbox" 
              checked={selectedRows?.length === orders?.length}
              onChange={handleSelectAll}
              className="w-4 h-4 themed-icon"
            />
          </div>
          {['Order ID', 'User', 'Project', 'Address', 'Date', 'Status', ''].map(header => (
            <div key={header} className="bg-global-7 p-3 border-b border-global-2">
              <span className="text-xs font-inter text-global-3">{header}</span>
            </div>
          ))}
        </div>

        {/* Table Body */}
        {orders?.map((order) => (
          <div key={order.id} className="contents">
            {/* Checkbox */}
            <div className="p-3 border-b border-global-1">
              <input 
                type="checkbox" 
                checked={selectedRows?.includes(order.id)}
                onChange={() => handleRowSelect(order.id)}
                className="w-4 h-4 themed-icon"
              />
            </div>

            {/* Order ID */}
            <div className="p-3 border-b border-global-1">
              <span className="text-xs font-inter text-global-1">{order.id}</span>
            </div>

            {/* User */}
            <div className="p-3 border-b border-global-1">
              <div className="flex items-center gap-2">
                <img src={order.user.avatar} alt="" className="w-6 h-6 rounded-full" />
                <span className="text-xs font-inter text-global-1">{order.user.name}</span>
              </div>
            </div>

            {/* Project */}
            <div className="p-3 border-b border-global-1">
              <span className="text-xs font-inter text-global-1">{order.project}</span>
            </div>

            {/* Address */}
            <div className="p-3 border-b border-global-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-inter text-global-1">{order.address}</span>
              </div>
            </div>

            {/* Date */}
            <div className="p-3 border-b border-global-1">
              <div className="flex items-center gap-1">
                <img src="/images/img_calendarblank.svg" alt="" className="w-4 h-4 themed-icon" />
                <span className="text-xs font-inter text-global-1">{order.date}</span>
              </div>
            </div>

            {/* Status */}
            <div className="p-3 border-b border-global-1">
              <div className="flex items-center gap-1">
                <img src={order.status.icon} alt="" className="w-4 h-4 themed-icon" />
                <span 
                  className="text-xs font-inter"
                  style={{ color: order.status.color }}
                >
                  {order.status.type}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="relative p-3 border-b border-global-1">
              <img
                src="/images/img_dotsthreeoutlinevertical.svg"
                alt="actions"
                className="w-4 h-4 cursor-pointer themed-icon"
                onClick={() => setActionMenu(actionMenu === order.id ? null : order.id)}
              />
              {actionMenu === order.id && (
                <div className="absolute right-0 top-6 z-50 bg-white border border-gray-200 rounded shadow-md min-w-[80px] p-0">
                  <button
                    className="w-full text-left px-2 py-1 text-xs text-red-600 hover:bg-gray-100"
                    onClick={() => handleDelete(order.id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;