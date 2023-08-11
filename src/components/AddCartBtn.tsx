import { useDisAddToCart, useDisGetItemQuantity, useDisIsItemIn, useSelCart, useSelCartHasItem, useSelCartLoad, useSelItemExist } from '@/store/cart.store';
import { Loader } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { Nossr } from './NoSsr';
import IncAndDec from './IncAndDec';
import { useEffectOnce } from '@/hooks/useEffectOnce';

type AddCartBtnProps = {
};

const AddCartBtn:React.FC<any> = ({
  tail,
  product,
}: any) => {
  //const cartLoad = useSelCartLoad();
  const cart = useSelCart();
  const itemExist = useSelItemExist(product.id);
  const cartLoad = useSelCartLoad();
  //const cartHasItem = useSelCartHasItem();
  const addToCartAct = useDisAddToCart();
  //const isItemInAct = useDisIsItemIn();
  // loacal load: triggered after
  // # addToCart #remove decrement #increment
  const [load, setLoad] = useState(false);
  const getItemQuantityAct = useDisGetItemQuantity();
  //const [count, setCount] = useState(getItemQuantityAct(product.id));

  //const [inCart, setInCart] = useState(false);
  
  function handleAddToCart(e: any) {
    console.log('add to cart  clicked')
    addToCartAct(product, {
      handleLoad,
      //handleIsInCart,
      //handleCountUpdate,
    });
  }

  /* function handleCountUpdate(count: number) {
    setCount(count);
  } */

  const handleLoad = () => setLoad((c: any) => !c);
  const loadOn = () => setLoad(true);
  const loadOff = () => setLoad(false);
  
  //const handleIsInCart = (inCart: boolean) => setInCart(inCart);

  // run on init render and check if item is added to db or not 
  useEffectOnce(() => {
    // isInsideCart: global state
    //isItemInAct(product.id, 'all', {})
  });

  // if: product changes (on productPage): is item in cart?
  useEffect(() => {
    //isItemInAct(product.id);
  }, [product]);
  
  /* useEffect(() => {
    setCount(getItemQuantityAct(product.id))
  }, [load]) */


  if (cartLoad) return(
    <Nossr>
      <div>
        Loading...
      </div>
    </Nossr>
  )

  //console.log('SEX DO.....', load, cartHasItem)
  console.log('itsm exist-----------:', itemExist);
  if (!load && itemExist) return(
    <Nossr>
      <IncAndDec
      product={product}
      //count={count}
      //handleCountUpdate={handleCountUpdate}
      //handleIsInCart={handleIsInCart}
      />
    </Nossr>
  )
  
  //console.log('_____', cartLoad)
  return (
    <Nossr>
    <button
    className={`
    ${tail}
    relative
    flex gap-2 items-center justify-center
    self-center w-full
    text-white font-bold
    py-2 px-4 rounded-md
    transition-all
    `}
    onClick={handleAddToCart}
    disabled={load ? true : false}
    key={Math.floor(Math.random() * 1000)}
    >
      اضافه به سبد
      {
        load
        ? (
          <span
          /* className='
          absolute
          left-3 top-4 #mx-auto #w-full
          ' */
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
          }}
          >
            <Loader
            size={22}
            color='green'
            />
          </span>
        ): ('')
      }

      
    </button>
    </Nossr>
  )
}
export default AddCartBtn;