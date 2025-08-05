const SearchView = ({ 
  placeholder = "Search", 
  value = "", 
  onChange, 
  leftIcon = "/images/img_search.svg",
  className = "",
  ...props 
}) => {
  return (
    <div className={`relative w-full sm:w-[14%] ${className}`}>
      <div className="relative">
        {leftIcon && (
          <img 
            src={leftIcon} 
            alt="search" 
            className="absolute left-[10px] top-1/2 transform -translate-y-1/2 w-[16px] h-[16px]"
          />
        )}
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full pt-[4px] pr-[10px] pb-[4px] pl-[30px] text-[14px] font-inter font-normal leading-[17px] text-left text-global-2 bg-searchview-1 border border-solid border-global-2 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-global-5 focus:border-transparent transition-all duration-200"
          {...props}
        />
      </div>
    </div>
  );
};



export default SearchView;