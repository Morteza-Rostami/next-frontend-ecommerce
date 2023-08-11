import fake from '@/config/faker';
import { useDisDelItem } from '@/store/cart.store';
import Image from 'next/image';
import React, { useState } from 'react';
import { HiOutlineTrash } from 'react-icons/hi2';

type CartItemProps = {
  item: any,
};

const CartItem:React.FC<CartItemProps> = ({
  item,
}) => {
  const deleteItemAct = useDisDelItem();
  const [load, setLoad] = useState(false);
  const {product, quantity} = item;

  function handleLoad() {
    setLoad((c: boolean) => !c);
  }

  if (!product) return <></> 

  //console.log('pooooooo.....', product)
  return (
    <div
    className='
    flex items-center justify-between gap-2
    p-2
    #w-60
    #last:border-b-2 #border-b

    '
    >
      <div
      className='
      relative
      h-10 w-10 aspect-square
      rounded-md overflow-hidden
      
      '
      >
        <Image
        src={product.image}
        alt={product.name}
        //width={50}
        //height={50}
        style={{
          objectFit: 'cover',
        }}
        fill
        />
      </div>
      <div>
        <p
        className='
        text-sm text-gray-600 
        truncate
        '
        >
          {product.name}
        </p>
        <p
        className='
        text-sm
        '
        >
          {quantity} * <span className='text-rose-600'>{product.price}</span>
        </p>
      </div>
      <button
      className={`
      bg-sky-50
      rounded-full
      border-none
      p-1
      transition
      hover:bg-sky-100
      text-rose-600
      `}
      onClick={() => deleteItemAct(product, {
        handleLoad,
      })}
      >
        <HiOutlineTrash
        size={18}
        />
      </button>
    </div>
  )
}
export default CartItem;