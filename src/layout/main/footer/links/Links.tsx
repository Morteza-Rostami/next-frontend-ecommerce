//import { fake } from '@/config/faker';
import { useEffectOnce } from '@/hooks/useEffectOnce';
import React, { useState } from 'react';
import LinkList from './LinkList';
//import { fakerFA } from '@faker-js/faker';

type LinksProps = {
  
};

const Links:React.FC<LinksProps> = () => {
  const [links, setLinks] = useState([]);  

  useEffectOnce(() => {
    const stuff: any = Array.from(Array(5).keys()).map(() => {
      const list = {
        head: 'تیتر لینک',
        items: Array.from(Array(9).keys()).map((i) => {
          return 'این یه لینک هست';
        })
      }
      return list;
    })

    setLinks(stuff);
  })
  
  return (
    <div
    className='
    grid grid-cols-1 gap-8
    md:justify-items-center lg:gap-0
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-5 
    #w-full container mx-auto
    px-4
    py-10
    pb-20
    '
    >
      {
        links && links.length
        ? (
          links.map((link, inx) => {
            return (
              <LinkList
              link={link}
              key={inx}
              />
            )
          })
        ): ('')
      }
    </div>
  )
}
export default Links;