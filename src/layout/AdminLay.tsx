import Link from 'next/link';
import React from 'react';

type AdminLayProps = {
  
};

const AdminLay:React.FC<any> = ({
  children
}) => {
  
  return (
    <div
    className='
    admin-layout
    container mx-auto
    bg-green-100
    h-full
    '
    >
      <nav
      className='
      flex gap-3
      '
      >
        <Link
        href={'/admin'}
        >
          admin
        </Link>
        <Link
        href={'/admin/create-product'}
        >
          create-product
        </Link>
        <Link
        href={'/admin/products'}
        >
          products
        </Link>
      </nav>
      {children}
    </div>
  )
}
export default AdminLay;