import Link from 'next/link';
import React from 'react';

type NavItemProps = {
  
};

/* 
props:
  # name
  # link (optional)
  # icon (optional)
*/
const NavItem:React.FC<any> = ({
  text,
  link='',
  icon,
}: any) => {
  
  return (
    <Link
    className='
    flex gap-2 items-center justify-center
    hover:bg-sky-100 hover:text-sky-400
    p-3
    py-1
    rounded-full
    transition-all ease-in-out 
    text-gray-700
    '
    href={link}
    >
      <span
      className='
      text-base
      '
      >
        {text}
      </span>
      <span>
        {icon}
      </span>
    </Link>
  )
}
export default NavItem;