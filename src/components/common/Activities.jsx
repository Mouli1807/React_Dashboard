// Activities component displays a list of recent activities with avatars, messages, and a timeline
import React from 'react';

const Activities = ({ activities }) => (
  // Main container for the activities list
  <div className="flex flex-col gap-[6px] justify-start items-center w-full">
    {/* Header */}
    <div className="flex flex-row justify-start items-center w-full pt-[8px] pb-[8px]">
      <span className="text-[14px] font-inter font-semibold leading-[17px] text-left text-global-1">
        Activities
      </span>
    </div>
    {/* List of activities */}
    <div className="flex flex-col gap-[8px] w-full mr-[8px] relative">
      <div className="flex flex-col gap-[8px] w-full">
        {activities?.map((activity) => (
          // Each activity row
          <div
            key={activity?.id}
            className="flex flex-row gap-[8px] justify-start items-start w-full"
          >
            {/* Avatar */}
            <img
              src={activity?.avatar}
              className="w-[24px] h-[24px] rounded-[12px]"
              alt="avatar"
            />
            {/* Message and time */}
            <div className="flex flex-col justify-center items-start self-center w-full">
              <span className="text-[14px] font-inter font-normal leading-[17px] text-left text-global-1 w-full">
                {activity?.message}
              </span>
              <span className="text-[12px] font-inter font-normal leading-[15px] text-left text-global-3">
                {activity?.time}
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* Timeline Lines */}
      <div className="absolute left-[16px] top-[40px] flex flex-col gap-[40px] justify-start items-center w-[1px]">
        {/* Vertical lines for timeline effect */}
        <div className="w-full h-[14px] bg-global-2"></div>
        <div className="w-full h-[14px] bg-global-2"></div>
        <div className="w-full h-[14px] bg-global-2"></div>
        <div className="w-full h-[14px] bg-global-2"></div>
      </div>
    </div>
  </div>
);


export default Activities;
