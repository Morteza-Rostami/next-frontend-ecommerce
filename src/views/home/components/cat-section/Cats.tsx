import React, { useEffect, useState } from 'react';
import Cathead from './CatHead';

import styled from 'styled-components'
import { fake } from '@/config/faker';
import Link from 'next/link';
import Image from 'next/image';
import CatGrid from './CatGrid';

type FruitsProps = {
  
};

const Cats:React.FC<any> = ({
  catName,
  bannerImg,
}: any) => {
  const [catNames, setCatNames] = useState<any[]>([]);

  useEffect(() => {
    const names: any[] = 
      Array.from(Array(7).keys()).map((i) => fake.commerce.productName());
    setCatNames([...names]);
  }, [])

  return (
    <div
    className='
    space-y-8
    '
    >
      <Cathead
      catName={catName}
      />

      {/* grid */}
      <div
      className='
      grid 
      grid-cols-1
      lg:grid-cols-5
      w-full
      #bg-slate-50
      '
      >
        {/* sub categories */}
        <div>
          <ul
          className='
          flex flex-col gap-3
          list-disc
          #p-8
          '
          >
            {
              catNames && catNames.length
              ? (
                catNames.map((item, inx) => {
                  return (
                    <Link
                    className='
                    text-gray-600
                    transition-all
                    hover:underline
                    '
                    href={''}
                    key={inx}
                    >
                      {item}
                    </Link>
                  )
                })
              ) : ('')
            }
          </ul>
        </div>

        {/* banner */}
        <div
        className='
        hidden lg:block
        relative
        aspect-auto
        h-full
        '
        >
          <Image
            className='
            object-cover
            '
            src={bannerImg}
            alt='Cats banner'
            fill  
          />
          {/* overlay */}
          <div
          className='
          absolute top-5 right-5
          bg-slate-300 bg-opacity-20 p-4 rounded-md
          text-slate-900
          '
          >
            <p>
              خوش مزه
            </p>
            <h2>
              تازه ترین
              &nbsp;
              <span>
              محصولات
              </span>
            </h2>
            <p
            className='
            text-gray-500 font-thin text-sm
            '
            >
               فقط در فروشگاه ما
            </p>
          </div>
        </div>

        {/* grid */}
        <div
        className='
        col-span-4
        lg:col-span-3
        #bg-rose-50
        '
        >
          <CatGrid/>
        </div>


      </div>
    </div>
  )
}

/* const Grid = styled.div`
  display: grid;

` */

export default Cats;