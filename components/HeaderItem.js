import React from 'react';

const HeaderItem = ({title, Icon}) => {
  return (
    <div className="flex flex-col group items-center cursor-pointer w-12 sm:w-20 hover:text-white">
      <Icon className='h-8 mb-1 group-hover:animate-bounce' />
      <p className="opacity-0 tracking-wider group-hover:opacity-100">{title}</p>
    </div>
  );
};

export default HeaderItem;