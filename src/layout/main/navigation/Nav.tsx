import React, { useEffect, useRef, useState } from 'react';
import CategoriesBtn from './CategoriesBtn';
import NavItem from './NavItem';
import {PiCoffeeBold} from 'react-icons/pi'
import { GiMeat, GiSlicedBread } from 'react-icons/gi';
import { HiChevronDown } from 'react-icons/hi';
import HeaderMegaMenu from './mega-menu/MegaMenu';
import useIntersect from '@/hooks/useIntersect';
import useScrollPosition from '@/hooks/useScrollPosition';
import { useWindowScroll } from '@mantine/hooks';
import {AnimatePresence, motion} from 'framer-motion'

type NavProps = {
  
};

const Nav:React.FC<NavProps> = () => {
  const scrollPosition = useScrollPosition();
  //const [scroll, scrollTo] = useWindowScroll();
  const [isVisible, setIsVisible] = useState(true);
  //const hide = useRef(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(scrollPosition)
      if (scrollPosition > 150) {
        setIsVisible(false);
      } 
      if (scrollPosition <= 150) {
        setIsVisible(true);
      }
    }, 200);

    return () => clearTimeout(timeout);
  }, [scrollPosition]);

  //useEffect
 //
  return (
    <AnimatePresence>
      {
        isVisible
        ? (
        <motion.div

        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{ opacity: 0 }}
    //${hide ? 'lg:hidden' : ''}
        className={`
        bg-white
        header-navigation
        hidden
        lg:flex items-center justify-between w-full
        container mx-auto
        px-4
        py-4 h-20
        `}
        >
          {/* <CategoriesBtn/> */}
          
          <HeaderMegaMenu/>

          <nav
          className='
          flex gap-4 items-center
          '
          >
            <NavItem
            text={'تماس'}
            link={''}
            icon={''}
            />
            <NavItem
            text={'بلاگ'}
            link={''}
            icon={''}
            />
            <NavItem
            text={'نوشیدنیها'}
            link={''}
            icon={<PiCoffeeBold size={24}/>}
            />
            <NavItem
            text={'نان و شیرینی'}
            link={''}
            icon={<GiSlicedBread size={24}/>}
            />
            <NavItem
            text={'گوشت و ماهی'}
            link={''}
            icon={<GiMeat size={24}/>}
            />
            <NavItem
            text={'بیشتر'}
            link={''}
            icon={<HiChevronDown
              color={'lightGray'}
              size={24}
              />}
            />
            
          </nav>
        </motion.div>
          
        ): ('')
      }
    </AnimatePresence>
  )
}
export default Nav;