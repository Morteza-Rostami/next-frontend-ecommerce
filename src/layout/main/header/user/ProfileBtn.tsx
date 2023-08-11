import { Nossr } from '@/components/NoSsr';
import fake from '@/config/faker';
import { getAuthUserLs } from '@/views/auth/utils/authHelper';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiUserCircle } from 'react-icons/hi';
import ProfileMenu from './ProfileMenu';

type ProfileBtnProps = {
};

const avatar = fake.image.avatarGitHub();

const ProfileBtn:React.FC<ProfileBtnProps> = () => {
  const authUser = getAuthUserLs();
  
  return (
    <Nossr>
      {
        authUser
        ? (
          <ProfileMenu/>
          
        ): (
          <Link
          href={'/signup'}
          className={`
          bg-sky-50
          rounded-full
          border-none
          p-2
          transition
          hover:bg-sky-100
          text-sky-400
          `}
          >
            <HiUserCircle
            size={28}
            />
          </Link>
        )
      }

    </Nossr>
  )
}
export default ProfileBtn;