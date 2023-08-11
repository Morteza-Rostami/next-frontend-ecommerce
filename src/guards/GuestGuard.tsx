import { getAuthUserLs } from '@/views/auth/utils/authHelper';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

type GuestGuardProps = {
  children: ReactNode,
};

const GuestGuard:React.FC<GuestGuardProps> = ({
  children,
}) => {
  const authUser = getAuthUserLs();
  const router = useRouter();

  if (authUser) return router.push('/');

  return children;
}
export default GuestGuard;