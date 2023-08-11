import { Popover, Text, Button } from '@mantine/core';
import CartItem from './CartItem';
import { HiShoppingBag } from 'react-icons/hi2';
import { useSelCart } from '@/store/cart.store';
import { getAuthUserLs } from '@/views/auth/utils/authHelper';
import { useRouter } from 'next/router';
import CartBtns from './CartBtns';

function CartDrop({
  opened,
  setOpened,
}: any) {
  const cart = useSelCart();
  const router = useRouter();
  //console.log('cart.....', cart.items);

  if (!cart) return <></>

  return (
    <Popover 
    opened={opened}
    onChange={setOpened}
    //onClose={(e) => handlePopoverClose(e)}
    width={300} 
    position="bottom-end" 
    //withArrow 
    offset={10}
    shadow="md"
    //clickOutsideEvents={['']}
    //outsideClick={}
    
    >
      
      <Popover.Target>
        <button
          className={`
          
          bg-sky-50
          rounded-full
          border-none
          p-2
          transition
          group-hover:bg-sky-100
          #group-hover:cursor-pointer
          text-rose-400
          `}
          >
          <HiShoppingBag
          size={28}
          />
        </button>
      </Popover.Target>

      <Popover.Dropdown>
        <div
        className='
        my-popover-content
        '
        onClick={(e) => e.stopPropagation()}
        style={{
          zIndex: 1000
        }}
        >

        <div
        className='
        flex flex-col gap-1
        divide-y-2
        border-b-2
        '
        style={{
          maxHeight: '300px',
          overflow: 'auto',
        }}
        >
          {
            cart && cart.items?.length
            ? (
              cart.items.map((x, i) => {
                return (
                <CartItem
                item={x}
                key={x.product.id}
                />
                )
              })
            ): ('')
          }
          
        </div>

        <div
        className='
        flex items-center justify-between p-3 px-2
        '
        >
          <span>
            جمع کل
          </span>
          <span
          className='
          text-rose-800
          '
          >
            ${cart.total}
          </span> 
        </div>

          <CartBtns/>
        </div>

      </Popover.Dropdown>
    </Popover>
  );
}

export default CartDrop;