import { APP_NAME } from '@/config/config';
import { ActionIcon } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import {FaBars} from 'react-icons/fa'
import {FaShoppingBag} from 'react-icons/fa'
import {HiShoppingBag, HiUserCircle} from 'react-icons/hi'
import Search from './Search';
import LocBtn from './LocBtn';
import CartBtn from './cart/CartBtn';
import IconBtn from '@/components/IconBtn';
import SideMenu from '../side-menu/SideMenu';
import ProfileMenu from './user/ProfileMenu';
import { getAuthUserLs } from '@/views/auth/utils/authHelper';
import ProfileBtn from './user/ProfileBtn';

type HeaderProps = {
};

const Header:React.FC<any> = () => {
  const authUser = getAuthUserLs();

  return (
    <header
    className='
    #sticky #top-0 #z-30 w-full 
    container mx-auto
    flex gap-4 items-center justify-between
    p-4 
    h-20
    bg-white
    lg:gap-10
    '
    >
      {/* ham button */}
      <div
      className='
      flex items-center gap-3
      '
      >
       
        <SideMenu/>
        {/* <IconBtn
        bgCol={'bg-gray-50'}
        bgColHover={'bg-gray-100'}
        icon={<FaBars
          size={24}
          />}
        /> */}

        {/* logo */}
        <Link
        className='
        #bg-rose-50
        #hover:cursor-pointer
        '
        href={'/'}
        >
          <span>
            <Image 
            className='
            #h-12
            '
            width={120}
            height={40}
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-logo.png" 
            alt="Logo" 
            //layout='responsive'
            />
          </span>
        </Link>
      </div>

      {/* location */}
      <LocBtn/>

      {/* search */}
      <Search/>

      {/* right */}
      <div
      className='
      flex gap-3 items-center
      '
      >
        <ProfileBtn/>
        
        <CartBtn/>
      </div>
    </header>
  )
}
export default Header;