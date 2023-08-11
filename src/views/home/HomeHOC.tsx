import { useEffectOnce } from '@/hooks/useEffectOnce';
import { useDisGetProducts, useSelProductLoad, useSelProducts } from '@/store/product.store';
import React, { ReactNode, useEffect } from 'react';

const HomeHOC = (Component: any) =>  {
  const Compo = () => {
    const getProductsAct = useDisGetProducts();
    const products = useSelProducts();
    const productLoad = useSelProductLoad(); 

    // request
    useEffectOnce(() => {
      getProductsAct({page: 1, limit: 20});
      console.log('love', products)
    })
    
    if (productLoad) return <div>Loading...</div>

   // console.log(pizzas)
    return <Component {...{
      products: products,
    }}/>;
  }
  return Compo
}

export default HomeHOC;