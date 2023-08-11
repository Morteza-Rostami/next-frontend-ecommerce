//const { fake } = require("@/config/faker");
const { fakerFA } = require("@faker-js/faker");
//const slugify = require("slugify");
var slugify = require('slugify-persian')
const fs = require('fs'); 
const axios = require('axios');

const productImgs = [
  'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32-346x310.jpg',
  'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-38-346x310.jpg',
  'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-48-346x310.jpg',
  'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-50-346x310.jpg',
  'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg',
  'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-346x310.jpg',
  'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg',
  'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-54-346x310.jpg',
  'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-50-346x310.jpg',
  'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-57-346x310.jpg',
  'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-45-346x310.jpg',
  'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-50-346x310.jpg',
]

const photos = [
  'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1153&q=80',
  'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80',
  'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=699&q=80',
  'https://images.unsplash.com/photo-1577303935007-0d306ee638cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1140&q=80',
  'https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
]

function getRandomPhoto() {
  const rand = fakerFA.datatype.number({min: 0, max: photos.length - 1});
  const image = photos[rand];
  return image;
} 

module.exports = () => {
  const data = {
    products: [],
  };

  async function generate() {
    for (let i = 0; i < productImgs.length; i++) {
      const name = fakerFA.commerce.productName();
      const catName = fakerFA.commerce.department();
  
      const doc = {
        id: fakerFA.string.uuid(),
        name: name,
        slug: slugify(name),
        description: fakerFA.lorem.words(20),
        discount: fakerFA.number.int({min: 5, max: 80}),
        price: fakerFA.commerce.price({min: 10, max: 2000}),
        inStock: fakerFA.number.int({min: 0, max: 100}),
        rating: fakerFA.number.int({min: 0, max: 5}),
        category: slugify(catName),
        createdAt: fakerFA.date.anytime(),
        updatedAt: fakerFA.date.anytime(),
        image: productImgs[fakerFA.number.int({min: 0, max: 11})],
      }
  
      doc.images = 
        Array.from(Array(3).keys())
        .map( (i) => getRandomPhoto());
      ///if (i === 1) console.log(doc)
  
      data.products.push(doc);
    }
  }
  generate();
  return data;
}

// json-server --watch ./db/db.ts --port 3001 --routes routes.json