import Image from 'next/image';
import React from 'react';

type PhotoProps = {
  image: any,
  setActiveImg: any,
};

const Photo:React.FC<PhotoProps> = ({
  image,
  setActiveImg,
}) => {
  
  function handleActiveImg() {
    const imageElement = document.querySelector('#main-item-img');
    if (imageElement)
      imageElement.classList.add('my-fade-out');

    setTimeout(() => {
      if (imageElement) {
        setActiveImg(image)
        imageElement.classList.remove('my-fade-out');
      }
    }, 500); // same as transition duration
  }

  //console.log('imgs: ', image)
  return (
    <div
    className='
    relative #h-full #w-full aspect-square
    rounded-md overflow-hidden
    cursor-pointer
    '
    onClick={handleActiveImg}
    style={{
      //aspectRatio: '10/10'
    }}
    >
      <Image
      className='
      object-cover
      '
      src={image}
      alt={'product image'}
      fill
      />
    </div>
  )
}
export default Photo;