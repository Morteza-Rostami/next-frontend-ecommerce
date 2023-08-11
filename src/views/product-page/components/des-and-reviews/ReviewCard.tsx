import { Group, Rating } from '@mantine/core';
import React from 'react';
import { HiMiniUserCircle } from 'react-icons/hi2';

type ReviewCardProps = {
  
};

const ReviewCard:React.FC<ReviewCardProps> = () => {
  
  return (
    <div
    className='
    flex flex-col gap-3
    bg-gray-50 p-4 rounded-md
    '
    >
      
      <div
      className='
      flex flex-col gap-3
      '
      >
        {/* head */}
        <div
        className='
        flex flex-row gap-4 items-center
        '
        >
          <div>
            <HiMiniUserCircle
            size={46}
            color={'lightgray'}
            />
          </div>
          <div
          className='
          flex flex-col items-start gap-2
          '
          >
            <Group position="center">
              <Rating 
              size='xs'
              value={3.5} 
              fractions={2} 
              readOnly />
            </Group>
            <p
            className='
            flex gap-2 items-center
            '
            >
              <span
              className='
              text-sm
              #md:text-lg
              '
              >
                صبا رستمی
              </span>
              <span>-</span>
              <span
              className='
              text-gray-500 font-thin text-sm
              '
              >
                May 1, 2021
              </span>
            </p>
          </div>
        </div>

        {/* body */}
        <div
        className='
        text-gray-700
        '
        >
        در شرکت لبنی کاله هم‌اکنون سه واحد کسب و کار پنیر، محصولات پاستوریزه (ماست و نوشیدنی) و فرادما (UHT) وجود دارد که هریک از این واحدها با نوآوری خود، با کیفیت‌ترین و متنوع‌ترین محصولات را در حجم تولید بالا به بازار عرضه می‌نمایند.
        </div> 
        </div>  
    </div>
  )
}
export default ReviewCard;