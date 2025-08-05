// Contacts component displays a list of contacts with avatars and names
import React from 'react';

const Contacts = ({ contacts }) => (
  // Main container for the contacts list
  <div className="flex flex-col gap-[8px] justify-start items-center w-full mb-[284px]">
    {/* Header */}
    <div className="flex flex-row justify-start items-center w-full pt-[8px] pb-[8px]">
      <span className="text-[14px] font-inter font-semibold leading-[17px] text-left text-global-1">
        Contacts
      </span>
    </div>
    {/* List of contacts */}
    <div className="flex flex-col gap-[8px] w-full">
      {contacts?.map((contact) => (
       
        <div key={contact?.id} className="flex flex-row justify-start items-center w-full">
          <div className="flex flex-row justify-start items-center w-full">
            {/* Avatar */}
            <img
              src={contact?.avatar}
              className="w-[24px] h-[24px] rounded-[12px]"
              alt="avatar"
            />
            {/* Name */}
            <div className="flex flex-row justify-start items-center flex-1 pr-[8px] pl-[8px]">
              <span className="text-[14px] font-inter font-normal leading-[17px] text-left text-global-1">
                {contact?.name}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Contacts;
