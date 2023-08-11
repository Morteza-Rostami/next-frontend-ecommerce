import { useEffectOnce } from '@/hooks/useEffectOnce';
import api from '@/routes/api';
import { useDisGetProduct, useSelProduct } from '@/store/product.store';
import { Product } from '@/types/types';
import MobFooter from '@/views/product-page/components/MobFooter';
import DesAndReviews from '@/views/product-page/components/des-and-reviews/DesAndReviews';
import Related from '@/views/product-page/components/related/Related';
import ShoppingCard from '@/views/product-page/components/shopping-card/ShoppingCard';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { HiChevronLeft } from 'react-icons/hi';

type ProductPageProps = {
  product: Product,
};

const ProductPage:React.FC<ProductPageProps> = ({
  product,
}: any) => {
  const router = useRouter();
  const {slug, cat} = router.query;
  const getProduct = useDisGetProduct();
  let thing = product;
  const product2 = useSelProduct();

  useEffect(() => {
    getProduct({slug});
    console.log('page changed', product2)
    if (!thing && product2) {
      thing = product2;
    }
  }, [slug]);

  if (!product) return <div>Loadding...</div>
  
  //console.log(product)
  return (
    <div
    className='
    flex flex-col
    container mx-auto p-4
    space-y-10
    bg-slate-50
    '
    >
      {/* header */}
      <div
      className='
      flex gap-4 flex-wrap
      #bg-slate-50
      '
      >
        <BadgeUrl
        text={'خانه'}
        link={`/`}
        />
        <BadgeUrl
        text={thing.category}
        link={`/categories/${thing.category}`}
        />
        <BadgeUrl
        text={thing.name}
        link={`/products/${thing.slug}?cat=${product.category}`}
        />
      </div>

      {/* shopping area */}
      <ShoppingCard
      product={thing}
      slug={slug}
      />

      {/* description & reviews */}
      <DesAndReviews
      product={thing}
      />

      {/* related products */}
      <Related/>
      <MobFooter
      product={product}
      />
    </div>
  )
}

const BadgeUrl = ({
  text,
  link,
}: any) => {
  return (
    <Link
    className='
    flex items-center justify-center gap-2
    bg-white 
    p-1 px-2 rounded-full
    text-sm text-center text-gray-500
    transition-all
    hover:bg-sky-300
    '
    href={link}
    >
    {text}
    <HiChevronLeft/>
    </Link>
  )
}

export const getServerSideProps: GetServerSideProps<{
  product: any
}> = async (context) => {
  const {slug}: any = context.params;
  //const {cat}: any = context.query;
  let product: any = {};
  //console.log('context', context);
  try {
    if (slug) {
      const res = await api.getProduct({slug})
      //console.log('rrrrrrrrrr', res.data);
      product = res.data[0];
    }

  } catch(err: any) {
    console.log('productPage: /products/:slug', err.message);
  }
  return { props: { product } }
}

export default ProductPage;