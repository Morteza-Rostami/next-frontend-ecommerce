import ItemCard from '@/components/ItemCard';
import { useEffectOnce } from '@/hooks/useEffectOnce';
import { useDisGetProducts, useSelProducts } from '@/store/product.store';
import { getRandomSlice } from '@/utils/helpers';
import React, { useEffect } from 'react';

type FSGridProps = {
  
};

const DGrid:React.FC<any> = () => {
  
  const products = useSelProducts();
  const getProducts = useDisGetProducts();
  let fruits = [];

  if (products) {
    fruits = getRandomSlice(products, 6);
  }

  useEffectOnce(() => {
    getProducts();
  });

  return (
    <div
    className='
    #flex #flex-wrap
    grid 
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3 
    bg-sky-50 h-full w-full
    #divide-x-4 #divide-y

    '
    >
      {
        fruits && fruits.length
        ? (
          fruits.map((item) => {
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
export default DGrid;