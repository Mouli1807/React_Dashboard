import React from 'react';

// NotificationsList component displays a list of notifications with icons and messages
const NotificationsList = ({ notifications }) => (
  // Main container for the notifications list
  <div className="flex flex-col gap-[8px] justify-start items-center w-full">
    {/* List of notifications */}
    <div className="flex flex-col gap-[8px] w-full mr-[8px]">
      {notifications?.map((notification) => (
        // Each notification row
        <div
          key={notification?.id}
          className="flex flex-row gap-[8px] justify-center items-start w-full"
        >
          {/* Icon */}
          <div
            className="pt-[4px] pr-[4px] pb-[4px] pl-[4px] w-auto rounded-[8px]"
            style={{ background: '#e3f5ff' }}
          >
            <img
              src={
                notification?.type === 'bug'
                  ? '/images/img_iconset.svg'
                  : '/images/img_iconset_gray_900.svg'
              }
              className="w-[24px] h-[24px]"
              alt="icon"
            />
          </div>
          {/* Message and time */}
          <div className="flex flex-col justify-center items-start self-center w-full">
            <span className="text-[14px] font-inter font-normal leading-[17px] text-left text-global-1 w-full">
              {notification?.message}
            </span>
            <span className="text-[12px] font-inter font-normal leading-[15px] text-left text-global-3">
              {notification?.time}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default NotificationsList;
