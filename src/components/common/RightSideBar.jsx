import React from 'react';
import NotificationsList from './NotificationsList';
import Activities from './Activities';
import Contacts from './Contacts';

const RightSideBar = ({ notificationVisible, notifications, activities, contacts }) => {
  return (
    <div className="flex flex-col gap-[24px] justify-start items-center w-[320px] min-w-[320px] max-w-[320px] border-l border-global-2 pt-[20px] pr-[20px] pb-[20px] pl-[20px] overflow-y-auto">
      <div className="flex flex-row justify-start items-center w-full pt-[8px] pb-[8px]">
        <span className="text-[14px] font-inter font-semibold leading-[17px] text-left text-global-1 truncate">
          Notifications
        </span>
      </div>
      {notificationVisible && <NotificationsList notifications={notifications} />}
      <Activities activities={activities} />
      <Contacts contacts={contacts} />
    </div>
  );
};


export default RightSideBar;
