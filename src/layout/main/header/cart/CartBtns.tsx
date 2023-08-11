import { getAuthUserLs } from '@/views/auth/utils/authHelper';
import { useRouter } from 'next/router';
import React from 'react';

type CartBtnsProps = {
  
};

const CartBtns:React.FC<CartBtnsProps> = () => {
  const router = useRouter();
  function handleShopping() {
    console.log('asdsadasdasdas')
    const authUser = getAuthUserLs();

    if (!authUser) router.push('/signup');
  }

  return (
    <div
    className='
    grid place-items-center gap-3
    '
    >
      <button
      className='
      border py-2 px-4 w-full rounded-md
      text-center
      transition-all hover:bg-gray-50
      '
      >
        سبد خرید
      </button>
      <button
      className='
      py-2 px-4 w-full rounded-md
      bg-rose-600 text-white 
      text-center
      transition-all hover:bg-rose-500
      '
      onClick={() => handleShopping()}
      >
        پرداخت نهایی
      </button>
    </div>
  )
}
export default CartBtns;