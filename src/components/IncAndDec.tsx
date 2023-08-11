import { useDisDecItem, useDisGetItemQuantity, useDisIncItem, useSelItemQuantity } from '@/store/cart.store';
import { Loader } from '@mantine/core';
import React, { useState } from 'react';
import { HiMinus, HiPlus } from 'react-icons/hi';

type IncAndDecProps = {
  
};

const IncAndDec:React.FC<any> = ({
  product,
  handleIsInCart,
  //count,
  //handleCountUpdate,
}) => {
  const incItemAct = useDisIncItem();
  const decItemAct = useDisDecItem();
  const [load, setLoad] = useState(false);
  const itemQuant = useSelItemQuantity(product.id);

  function handleLoad() {
    setLoad((c) => !c);
  }

  

  function handleIncItem() {
    incItemAct(product, {
      handleLoad,
      //handleCountUpdate,
    })
  }

  function handleDecItem() {
    decItemAct(product, {
      handleLoad,
      //handleCountUpdate,
      handleIsInCart,
    })
  }
//console.log('*******************', count)
  //if (!count) return <></>

  return (
    <div
    className='
    flex items-center gap-2 justify-between
    bg-white rounded-md overflow-hidden w-full
    '
    style={{
      minWidth: '150px'
    }}
    >
      <button
      className='
      relative
      p-2 bg-sky-400 hover:bg-sky-300 transition-all
      '
      onClick={handleIncItem}
      disabled={load}
      >
        <HiPlus/>
        {
          load
          ? (
            <span
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%,-50%)',
            }}
            >
              <Loader
              size={22}
              color='dark'
              />
            </span>
          ): ('')
        }
      </button>

      {/* count */}
      <span>
        {itemQuant}
      </span>
      <button
      className='
      relative
      p-2 bg-rose-400 hover:bg-rose-300 transition-all
      '
      onClick={handleDecItem}
      disabled={load}
      >
        <HiMinus/>
        {
          load
          ? (
            <span
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%,-50%)',
            }}
            >
              <Loader
              size={22}
              color='dark'
              />
            </span>
          ) : ('')
        }
      </button>
    </div>
  )
}
export default IncAndDec;