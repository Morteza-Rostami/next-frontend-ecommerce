
import React, { useEffect, useRef, useState } from 'react';
import HomeHOC from './HomeHOC';
import { fake } from '@/config/faker';
import { Button } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import Discount from './components/Discount';
import HeroCard from './components/HeroCard';
import { isSsr } from '@/components/NoSsr';
import Categories from './components/categories/Categories';
import Offers from './components/offers/Offers';
import CatBannerOne from './components/cat-banner-one/CatBannerOne';
import Cats from './components/cat-section/Cats';
import BannersTwo from './components/banners-two/BannersTwo';
import Blogs from './components/blogs/Blogs';
import Footer from '@/layout/main/footer/Footer';
import { getCartFromDb } from '../cart/utils/cartLs';
import Nav from '@/layout/main/navigation/Nav';
//import CartDrop from '@/layout/main/header/cart/CartDrop';

//import { noSSR } from 'next/dynamic';
//import dynamic from 'next/dynamic';
//import { Nossr } from '@/components/NoSsr';

type HomeViewProps = {
};

const Home:React.FC<any> = (props: {
  products: any[],
  categories: any[],
  specials: any[]
}) => {
  const {
    products, 
    categories,
    specials,
    
  } = props;

  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [price, setPrice] = useState('')

  useEffect(() => {
    setName(fake.commerce.productName())
    setText(fake.lorem.words(2))
    setPrice(fake.commerce.price({min: 10, max: 2000}))
  }, [])

  useEffect(() => {
    console.log('lover', name, text, price);
  }, [name])

  //console.log('home..', getCartFromDb())
  return (
    
    <div
      className='
      container mx-auto w-full
      p-4
      flex-1
      space-y-8
      '
    >
      {/* <Nav/> */}
      {/* <CartDrop/> */}
      <Discount/>

      {/* hero */}
      <div
      className='
      hero
      flex flex-col items-center flex-wrap gap-4
      lg:flex-row
      '
      >
        <HeroCard
        key={1}
        image='https://klbtheme.com/bacola/wp-content/uploads/2021/08/home-banner-18.jpg'
        discount={30}
        name={name}
        text={text}
        price={price}
        btnCol={"bg-rose-600"}
        hoverState={"hover:bg-rose-500"}
        />
        <HeroCard
        key={2}
        image='https://klbtheme.com/bacola/wp-content/plugins/bacola-core/elementor/images/banner-box4.png'
        discount={20}
        name={name}
        text={text}
        price={price}
        btnCol={"bg-sky-400"}
        hoverState={"hover:bg-sky-300"}

        />

      </div>

      {/* categories */}
      <Categories
      categories={categories}
      />

      {/* special offers */}
      <Offers
      specials={specials}
      />

      {/* catgories banners one */}
      <div
      className='
      flex flex-col gap-4 justify-between items-center
      w-full
      lg:flex-row
      '
      >
        <CatBannerOne
          image={'https://klbtheme.com/bacola/wp-content/uploads/2021/08/home-banner-19.jpg'}
          text={'غذای بچه'}
          subText={'تخفیف ویژه هفته'}
          btnTail={'bg-rose-500 hover:bg-rose-400'}
        />
        <CatBannerOne
          image={'https://klbtheme.com/bacola/wp-content/uploads/2021/08/home-banner-20.jpg'}
          text={'صبحانه طبیعی'}
          subText={'تخفیف ویژه هفته'}
          btnTail={'bg-rose-500 hover:bg-rose-400'}
        />
        <CatBannerOne
          image={'https://klbtheme.com/bacola/wp-content/uploads/2021/08/home-banner-21.jpg'}
          text={'غذاهای محلی'}
          subText={'تخفیف ویژه هفته'}
          btnTail={'bg-sky-500 hover:bg-sky-400'}
        />
      </div>

      <Cats
      catName={'میوه و سبزیجات'}
      bannerImg={'https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-17.jpg'}
      />

      {/* banner two */}
      <BannersTwo/>

      <Cats
      catName={'نوشیدنی ها'}
      bannerImg={'https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-16.jpg'}
      />

      <Blogs/>

      {/* <Footer/> */}
    </div>
    
  )
}

//export default HomeHOC(Home);
export default Home;