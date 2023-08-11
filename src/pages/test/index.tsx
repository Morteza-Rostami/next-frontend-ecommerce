import React from 'react';
import fs from 'fs'
//import { seedProduct } from '../../../db/db';

// seed the database (json-server)
//seedProduct();

const test:React.FC<any> = () => {
  
  return <div>Have a good coding</div>
}

export async function getServerSideProps() {

  console.log(__dirname);
  // This code will only run on the server
  /* const data = await fetch("/api/data");
  return {
    props: {
      data,
    },
  }; */
  return {
    props: {name: 'sarah'}
  }
}

export default test;