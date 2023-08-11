import ItemCard from '@/components/ItemCard';
import { useEffectOnce } from '@/hooks/useEffectOnce';
import { useDisGetProducts, useSelProducts } from '@/store/product.store';
import { getRandomSlice } from '@/utils/helpers';
import React, { useEffect, useRef } from 'react';

type CatGridProps = {
  
};

const CatGrid:React.FC<any> = () => {
  
  const products = useSelProducts();
  const getProducts = useDisGetProducts();
  const fruits: any = useRef([]);

  
  useEffectOnce(() => {
    getProducts();
  });

  useEffect(() => {
    if (!fruits.current.length && products) {
      fruits.current = getRandomSlice(products, 6);
    }
  }, [products])

  return (
    <div
    className='
    grid gap-x-2 gap-y-2
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3 
    #bg-sky-50 h-full w-full
    #divide-x-4 #divide-y

    '
    >
      {
        fruits.current && fruits.current.length
        ? (
          fruits.current.map((item: any) => {
            return (
              <ItemCard
              item={item}
              key={item.id}
              />
            )
          })
        ): ('')
      }
    </div>
  )
}
export default CatGrid;