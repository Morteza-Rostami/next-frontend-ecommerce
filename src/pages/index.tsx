import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import MainLay from '@/layout/main/MainLay';
import Home from '@/views/home/Home';
import { GetServerSideProps } from 'next';
import { fake } from '@/config/faker';
import axios from 'axios';
import { getRandomSlice } from '@/utils/helpers';

export default function HomePage({
  categories,
  specials,
}: any) {
  //console.log('index-----', categories)
  return <>
  <Home
  categories={categories}
  specials={specials}
  />
  </>
}

export const getServerSideProps: GetServerSideProps<any> = async () => {
  const catImgUrls = [
    'https://klbtheme.com/bacola/wp-content/uploads/2021/05/household-1.jpg',
    'https://klbtheme.com/bacola/wp-content/uploads/2021/05/meat-1.jpg',
    'https://klbtheme.com/bacola/wp-content/uploads/2021/05/baverages-1.jpg',
    'https://klbtheme.com/bacola/wp-content/uploads/2021/05/biscuitssnacks-1.jpg',
    'https://klbtheme.com/bacola/wp-content/uploads/2021/05/breadbakery-1.jpg',
    'https://klbtheme.com/bacola/wp-content/uploads/2021/05/dairy-1.jpg',
    'https://klbtheme.com/bacola/wp-content/uploads/2021/04/category-image4.png',
    'https://klbtheme.com/bacola/wp-content/uploads/2021/05/fruitvegetables-1.jpg',
    'https://klbtheme.com/bacola/wp-content/uploads/2021/04/category-image2.png'
  ]
  const categories: any[] = []

  for (let i = 0; i < catImgUrls.length; i++) {
    const cat = {
      id: i,
      name: fake.commerce.productName(),
      image: catImgUrls[i],
    }
    categories.push(cat);
  }

  // special offers:
  //======================

  let specials: any[] = [];

  // fetch products
  const productsRes: any = await axios.get('http://localhost:3001/products');

  const products: any = productsRes.data; 
  
  if (products && products.length)
    specials = getRandomSlice(products, 5);

  return { 
    props: { 
      categories,
      specials,
    } 
  }
}
