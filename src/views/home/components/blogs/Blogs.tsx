import { fake } from '@/config/faker';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Blog from './Blog';
import { useEffectOnce } from '@/hooks/useEffectOnce';

type BlogsProps = {
};

const Blogs:React.FC<any> = () => {
  const [blogs, setBlogs] = useState<any>([]);
  
  useEffectOnce(() => {
    for (let i = 0; i < 3; i++) {
      const blog = {
        id: i,
        title: fake.lorem.words(6),
        image: fake.image.urlLoremFlickr({category: 'food'}),
        category: fake.lorem.word(),
        author: fake.person.firstName(),
        createdAt: fake.date.past(),
      }
      blogs.push(blog);
    }
  });

  return (
    <div
    className='
    blogs-grid
    '
    >
      {
        blogs && blogs.length
        ? (
          blogs.map((item: any) => {
            return (
              <Blog
              key={item.id}
              item={item}
              />
            )
          })
        ) : ('')
      }
    </div>
  )
}

/* const GridC = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

` */

export default Blogs;