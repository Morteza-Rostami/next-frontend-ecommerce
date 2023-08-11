import React from 'react';
import DesAndRevTabs from './DesAndRevTabs';

type DesAndReviewsProps = {
  product: any
};

const DesAndReviews:React.FC<DesAndReviewsProps> = ({
  product,
}) => {
  
  return (
    <div
    className='
    bg-white rounded-md p-3
    '
    >
      <DesAndRevTabs
      product={product}
      />
    </div>
  )
}
export default DesAndReviews;