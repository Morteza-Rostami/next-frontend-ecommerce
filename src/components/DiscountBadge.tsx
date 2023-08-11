import React from 'react';

type DiscountBadgeProps = {
};

const DiscountBadge:React.FC<DiscountBadgeProps> = () => {
  
  return (
    <span
    className='
    inline-flex items-center justify-center
    absolute top-5 right-5
    bg-sky-500
    p-1 rounded-md aspect-square 
    text-white font-semibold
    '
    style={{
      letterSpacing: 0,
      verticalAlign: 'baseline',
      lineHeight: 1,
    }}
    >
      10%
    </span>
  )
}
export default DiscountBadge;