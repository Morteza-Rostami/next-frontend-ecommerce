import React, { useState } from 'react';
import Slider from './Sider'
import SizeOptions from './SizeOptions';

type PickSizeProps = {
};

const PickSize:React.FC<PickSizeProps> = ({
  next,
  currentSize,
  setCurrentSize,
  sizes,
  setSizes,
}: any) => {

  function handleSubmit() {

  }

  return (
    <div
    className='
    flex flex-col items-center justify-center gap-10
    w-full
    p-4
    '
    >
      <h2
      className='
      text-xl font-bold text-gray-600
      '
      >
        ( pick a pizza size )
      </h2>
      
      <SizeOptions/>

    </div>
  )
}
export default PickSize;