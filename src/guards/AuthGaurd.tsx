import { getAuthUserLs } from '@/views/auth/utils/authHelper';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

type AuthGaurdProps = {
  children: ReactNode,
};

const AuthGaurd:React.FC<AuthGaurdProps> = ({
  children,
}) => {
  const router = useRouter();
  const authUser = getAuthUserLs();

  if (!authUser) return router.push('/signup');

  return children
}

export default AuthGaurd;