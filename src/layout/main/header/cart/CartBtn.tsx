import IconBtn from '@/components/IconBtn';
import { ActionIcon, Popover } from '@mantine/core';
import React, { useState } from 'react';
import { HiShoppingBag } from 'react-icons/hi';
import CartDrop from './CartDrop';
import { useSelCartItemsCount } from '@/store/cart.store';
import { Nossr } from '@/components/NoSsr';

type CartBtnProps = {
  
};

const CartBtn:React.FC<CartBtnProps> = () => {
  const itemsCount = useSelCartItemsCount();
  const [opened, setOpened] = useState(false);
  /* function handlePopoverClose(event: any) {
    const popoverContent: any = document.querySelector('.my-popover-content');
    if (popoverContent.contains(event.target)) {
      return false;
    }
    return true;
  } */

  /* function handleOpen(e: any) {
    if (handlePopoverClose(e)) {
      setOpened(false);
    } else {
      setOpened(true)
    }
  } */

  return (
    <Nossr>
      <div
      className='relative group cursor-pointer' 
      onClick={() => setOpened((c) => !c)}
      >
        <div className="t-0 absolute -left-1">
        <p 
        className="
        flex 
        h-2 w-2 items-center justify-center 
        rounded-full bg-red-400 p-2
        text-xs text-white font-bold text-center"
        style={{
          lineHeight: 0
        }}
        >
          {itemsCount}
        </p>
        </div>
        

        {/* <Popover.Target>
        </Popover.Target> */}
        <CartDrop
        opened={opened}
        setOpened={setOpened}
        />
      </div>
    </Nossr>
  )
}
export default CartBtn;