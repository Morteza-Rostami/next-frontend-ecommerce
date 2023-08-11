import React, { useEffect, useMemo, useState } from 'react';
import Photo from './Photo';
import Image from 'next/image';
import LightBoxImg from './LightBoxImg';

type PhotoAreaProps = {
  product: any,
  slug: string,
};

const PhotoArea:React.FC<PhotoAreaProps> = ({
  product,
  slug,
}) => {
  const [activeImg, setActiveImg] = useState(product.image);
  const [images, setImages] = useState<any>({
    img1: product.image,
    img2: product.images[0],
    img3: product.images[1],
    img4: product.images[2],
  });
	const [toggler, setToggler] = useState(false);

  useEffect(() => {
    setActiveImg(product.image);
    setImages({
      img1: product.image,
      img2: product.images[0],
      img3: product.images[1],
      img4: product.images[2],
    })
  }, [slug, product]);

  return (
    <div
    className='
    col-span-5
    flex flex-col gap-4
    md:col-span-2
    #md:w-1/3 #md:basis-1/2 #md:flex-grow
    '
    >
      {/* active image */}
      <div
      className='
      relative h-full w-full aspect-square
      rounded-md overflow-hidden max-h-96
      '
      onClick={() => setToggler((c) => !c)}
      >
        <Image
        id="main-item-img"
        className='
        object-cover transition-all
        '
        src={activeImg}
        alt={product.name}
        fill

        style={{
          transition: "opacity 0.4s ease-in",
        }}
        />
      </div>

      {/* lightbox */}
      <LightBoxImg
      activeImg={activeImg}
      images={images}
      product={product}
      toggler={toggler}
      />
      
      {/* more images */}
      <div
      className='
      flex #justify-between gap-3 h-14
      #overflow-hidden

      '
      >
        {
          images && Object.keys(images).length
          ? (
            Object.keys(images).map((key, i) => {
              return (
                <Photo
                image={images[key]}
                key={i}
                setActiveImg={setActiveImg}
                />
              )
            })
          )
          :('')
        }
      </div>

    </div>
  )
}
export default PhotoArea;