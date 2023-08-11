import { ActionIcon } from '@mantine/core';
import React from 'react';
import {HiMagnifyingGlass} from 'react-icons/hi2'

type SearchProps = {
  
};

const Search:React.FC<SearchProps> = () => {
  
  return (

    <form
    className='
    hidden
    md:flex items-center
    bg-gray-100
    rounded-md
    flex-1
    focus-within:bg-gray-200
    '
    >
      <button
      type='submit'
      className='
      h-full
      #w-full
      p-2
      pr-4
      '
      >
        <HiMagnifyingGlass
        color={'gray'}
        size={24}
        />
      </button>
      <input 
      className='
      p-3
      rounded-sm
      w-full
      bg-transparent
      border-none
      outline-none
      #focus:ring-blue-500
      '
      type="text" 
      name="search" 
      placeholder='جستوجو برای محصول...'
      />
      
    </form>

  )
}
export default Search;