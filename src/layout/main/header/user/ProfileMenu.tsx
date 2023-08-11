import { Nossr } from '@/components/NoSsr';
import fake from '@/config/faker';
import { getAuthUserLs } from '@/views/auth/utils/authHelper';
import { Popover } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiUserCircle } from 'react-icons/hi';
import ProfileBtn from './ProfileBtn';

type ProfileMenuProps = {
};

const avatar = fake.image.avatarGitHub();

const ProfileMenu:React.FC<ProfileMenuProps> = () => {
  const [opened, setOpened] = useState(false);
  const authUser = getAuthUserLs();
  
  return (
    <Popover 
    opened={opened}
    onChange={setOpened}
    //onClose={(e) => handlePopoverClose(e)}
    width={200} 
    position="bottom-end" 
    //withArrow 
    offset={10}
    shadow="md"
    //clickOutsideEvents={['']}
    //outsideClick={}
    
    >
      
      <Popover.Target>
        <button
        className='
        bg-sky-50
        rounded-full
        border-none
        p-2
        transition
        text-rose-400
        '
        onClick={() => setOpened((o) => !o)}
        >
          <Image
          className='
          rounded-full
          '
          src={avatar}
          alt='avatar'
          width={30}
          height={30}
          />
        </button>
      </Popover.Target>

      <Popover.Dropdown>
        <div
        className='
        flex flex-col gap-2
        w-full
        '
        >
          <div
          className='
          flex flex-col gap-2
          border-b w-full p-2
          '
          >
            <Image
            className='
            rounded-full
            '
            src={avatar}
            alt='avatar'
            width={24}
            height={24}
            />
            <p
            className='
            text-sm text-gray-700
            '
            >
              {authUser.username}
            </p>
          </div>

          <div
          className='
          w-full p-2 self-stretch
          '
          >
            <Link
            className='
            block
            p-2 w-full
            hover:bg-gray-100 transition-all rounded-md
            '
            href={''}
            >
              خروج
            </Link>
          </div>
        </div>

      </Popover.Dropdown>
    </Popover>
  )
}
export default ProfileMenu;