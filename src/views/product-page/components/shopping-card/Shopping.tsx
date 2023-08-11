import AddCartBtn from '@/components/AddCartBtn';
import Info from '@/layout/main/footer/infos/Info';
import { calcDiscount } from '@/utils/helpers';
import React from 'react';
import { HiOutlineHeart, HiOutlineTruck } from 'react-icons/hi';
import { HiArrowsUpDown, HiBuildingStorefront, HiMiniBanknotes } from 'react-icons/hi2';

type ShoppingProps = {
  product: any,
};

const Shopping:React.FC<ShoppingProps> = ({
  product,
}) => {
  
  return (
    <div
    className='
    col-span-5
    space-y-8 
    md:col-span-3
    #md:w-1/2 #basis-1/2
    '
    >
      <div
      className='
      flex flex-col gap-4
      '
      >
        <p
        className='
        flex gap-3 items-center justify-center
        w-fit
        '
        >
          <span
          className='
          text-rose-700 text-xl
          '
          >
            ${product.price}
          </span>
          <span
          className='
          text-gray-600
          line-through
          '
          >
            ${calcDiscount(product.price, product.discount)}
          </span>
        </p>

        <div>
          {
          product.inStock 
          ? <div className='bg-green-100 text-green-500 text-sm py-1 px-2 rounded-full w-fit'>موجود</div> 
          : <div className='bg-rose-100 text-rose-500 text-sm py-1 px-2 rounded-full w-fit'>ناموجود</div>
          }
        </div>
        
        <p
        className='
        text-gray-800 truncate
        '
        >
          {product.description}
        </p>
        

        <div
        className='
        flex flex-col gap-6 items-start
        mt-4
        '
        >
          {/* add to cart */}
          <span
          className='
          hidden md:block
          '
          >
          <AddCartBtn
          tail={`bg-rose-700 hover:bg-rose-600`}
          product={product}
          />
          </span>

          {/* favorite and compare */}
          <div
          className='
          flex flex-row gap-2 flex-wrap
          text-gray-500
          '
          >
            <button
            className='
            flex gap-2 items-center 
            border border-rose-100 rounded-full p-2 px-3
            transition-all
            hover:bg-rose-200
            '
            >
              <HiOutlineHeart
              className={'text-red-500'}
              />
              مورد علاقه
            </button>
            <button
            className='
            flex gap-2 items-center 
            border border-sky-100 rounded-full p-2 px-3
            transition-all
            hover:bg-sky-200
            '
            >
              <HiArrowsUpDown/>
              مقایسه
            </button>
          </div>
        </div>

      </div>

      {/* infos */}
      <div
      className='
      flex flex-col gap-4
      bg-slate-50 rounded-md p-4
      '
      >
        <Info
        icon={<HiOutlineTruck size={24}/>}
        text={'ارسال سریع به تمام ایران'}
        />
        <Info
        icon={<HiMiniBanknotes size={24}/>}
        text={'پرداخت بسیار آسان'}
        />
        <Info
        icon={<HiBuildingStorefront size={24}/>}
        text={'بهترین و تازه ترین محصولات'}
        />
      </div>
    </div>
  )
}
export default Shopping;