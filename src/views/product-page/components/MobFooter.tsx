import AddCartBtn from '@/components/AddCartBtn';
import React from 'react';

type MobFooterProps = {
  product: any,
};

const MobFooter:React.FC<MobFooterProps> = ({
  product,
}) => {
  
  return (
    <div
    className='
    fixed bottom-0 left-0 right-0
    w-full bg-gray-50 shadow-md border-t
    p-6 z-50
    md:hidden
    '
    >
      <AddCartBtn
      tail={`
      bg-rose-700 hover:bg-rose-600
      `}
      product={product}
      />
    </div>
  )
}
export default MobFooter;