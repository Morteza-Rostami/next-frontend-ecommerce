import fake from '@/config/faker';

import MegaList from './MegaList';
import { Box, MediaQuery, Popover } from '@mantine/core';
import Link from 'next/link';
import CategoriesBtn from '../CategoriesBtn';
import { useDisclosure, useWindowEvent, useWindowScroll } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { HiBars3 } from 'react-icons/hi2';
import { HiChevronDown } from 'react-icons/hi';

const categories: any[] = [];

function makeCategories() {
  for (let i = 0; i < 4; i++) {
    const cat = {
      id: fake.string.uuid(),
      name: fake.commerce.department(),
      image: fake.image.urlLoremFlickr({category: 'hamburger'}),
      subCats: Array.from(Array(4).keys()).map((x, i) => {
        return fake.lorem.words({min: 2, max: 2})
      })
    };
    categories.push(cat);
  }
}
makeCategories();

const HeaderMegaMenu = () => {
  //const [opened, { close, open }] = useDisclosure(false);
  const [scroll, scrollTo] = useWindowScroll();
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (scroll.y > 150) {
      setTimeout(() => {
        setOpened(false);
      }, 200)
    }
  }, [scroll])

  return (
    <div 
    className='
    mega-menu
    hidden
    lg:flex
    '
    >
      <Popover 
      opened={opened} onChange={setOpened}
      //initiallyOpened={false}
      //width={'90vw'} 
      width={'80%'}
      position="bottom" 
      radius="md" 
      shadow="md" 
      withinPortal>

        {/* target */}
        <Popover.Target>
          <button 
          className="
          flex items-center justify-between gap-3
          bg-sky-400 
          hover:bg-sky-500 
          text-white 
          font-bold 
          py-2 px-4 rounded"
          onClick={() => setOpened((o) => !o)}
          >
            <HiBars3/>
            <span
            className='
            text-md
            '
            >
              دسته بندیها
            </span>

            <HiChevronDown
            color={'lightGray'}
            size={24}
            />
          </button>
        </Popover.Target>
        
        {/* drop down */}
        <Popover.Dropdown 
        className='mega-menu-drop'
        sx={(theme) => ({
          backgroundColor: '#FAFAFA',
          '@media (max-width: 1024px)': {
            display: 'none',
          },
          zIndex: 1000,
        })}
        >
        <div
        className='
        container mx-auto 
        '
        style={{
          zIndex: 1000,
        }}
        >
          {/* head */}
          <div
          className='
          flex items-center justify-between 
          py-4 px-6 border-b 
          '
          >
            <div
            className='
            font-extrabold text-lg
            '
            >
              دسته بندیها
            </div>
            <Link
            className='
            text-sm text-gray-500
            hover:text-blue-500
            '
            href={''}
            >
              بیشتر
            </Link>
          </div>
          {/* main */}
          <div>
            {/* categories */}
            <div
            className='
            flex items-center justify-start #gap-10
            #divide-x
            '
            >
              {
                categories && categories.length
                ? (
                  categories.map((x, i) => {
                    return (
                      <MegaList
                      key={x.id}
                      category={x}
                      />
                    )
                  })
                ): ('')
              }

            </div>
          </div>
        </div>
        </Popover.Dropdown> {/* end of drop down */}
      </Popover>

      
    </div>
  );
}

export default HeaderMegaMenu;