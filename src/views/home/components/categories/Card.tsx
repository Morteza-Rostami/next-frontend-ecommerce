import Image from 'next/image';
import React from 'react';

type CardProps = {
  
};

const Card:React.FC<any> = ({
  cat,
}: any) => {
  
  return (
    <div
    className='
    flex flex-col gap-3 items-center justify-center
    #bg-gray-50 #border
    '
    >
      <div>
        <Image
          src={cat.image}
          width={150}
          height={150}
          alt={cat.name}
        />
      </div>
      <p>
        {cat.name}
      </p>
      <p
      className='
      text-gray-600 text-sm
      '
      >
        محصولات {cat.id}
      </p>
    </div>
  )
}
export default Card;