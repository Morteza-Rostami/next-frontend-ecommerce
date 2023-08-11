import React from 'react';
import Head from './Head';
import Specials from './Specials';

type OffersProps = {
  
};

const Offers:React.FC<any> = ({
  specials,
}: any) => {
  
  return (
    <div
    className='
    #bg-gray-50
    space-y-4
    '
    >
      <Head/>
      <Specials
      specials={specials}
      />
    </div>
  )
}
export default Offers;