import React from 'react';
import Special from './Special';

type SpecialsProps = {
  
};

const Specials:React.FC<any> = ({
  specials
}) => {
  
  return (
    <div
    className='
    grid grid-cols-1 gap-2
    sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5
    w-ful
    '
    >
      {
        specials && specials.length
        ? (
          specials.map((item: any) => {
          return <Special 
            key={item.id}
            item={item}
          />
          })
        )
        : ('')
      }
    </div>
  )
}
export default Specials;