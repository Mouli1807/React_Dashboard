import React from 'react';
const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  type = 'button',
  fullWidth = false,
  className = "",
  ...props 
}) => {
  const baseClasses = 'font-inter font-normal transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer';
  
  const variants = {
    primary: 'bg-button-1 text-button-1 hover:opacity-90 focus:ring-global-5',
    secondary: 'bg-global-1 text-global-1 hover:bg-global-2 focus:ring-global-5',
    outline: 'border border-global-2 text-global-1 hover:bg-global-1 focus:ring-global-5',
  };
  
  const sizes = {
    small: 'pt-[2px] pr-[8px] pb-[2px] pl-[8px] text-[12px] leading-[15px]',
    medium: 'pt-[4px] pr-[10px] pb-[4px] pl-[10px] text-[14px] leading-[17px]',
    large: 'pt-[6px] pr-[12px] pb-[6px] pl-[12px] text-[16px] leading-[20px]',
  };
  
  const buttonClasses = `
    ${baseClasses} 
    ${variants?.[variant]} 
    ${sizes?.[size]} 
    ${fullWidth ? 'w-full' : 'w-auto'} 
    ${disabled ? 'cursor-not-allowed opacity-50' : ''}
    rounded-[8px]
    ml-[8px]
    text-center
    ${className}
  `?.trim()?.replace(/\s+/g, ' ');
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};


export default Button;