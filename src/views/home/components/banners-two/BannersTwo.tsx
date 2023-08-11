import React from 'react';
import BannerTwo from './BannerTwo';

type BannersTwoProps = {
  
};

const BannersTwo:React.FC<any> = () => {
  
  return (
    <div
    className='
    flex flex-col gap-8
    md:flex-row
    '
    >
      <BannerTwo
      image='https://klbtheme.com/bacola/wp-content/uploads/2021/08/home-banner-22.jpg'
      btnCol={'bg-blue-900'}
      btnHovCol={'hover:bg-blue-700'}
      />
      <BannerTwo
      image='https://klbtheme.com/bacola/wp-content/uploads/2021/08/home-banner-23.jpg'
      btnCol={'bg-rose-600'}
      btnHovCol={'hover:bg-rose-500'}
      />
    </div>
  )
}
export default BannersTwo;