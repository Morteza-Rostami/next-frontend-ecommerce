import AdminLay from '@/layout/AdminLay';
import React from 'react';

type productsProps = {
  
};

const products:React.FC<productsProps> = () => {
  
  return (
    <AdminLay>
      <div
      className='
      products-list-page
      '
      >
        list of all products
      </div>
    </AdminLay>
  )
}
export default products;