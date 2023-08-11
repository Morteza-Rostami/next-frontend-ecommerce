import { Rating, Textarea } from '@mantine/core';
import React from 'react';

type ReviewFormProps = {
  
};

const ReviewForm:React.FC<ReviewFormProps> = () => {
  
  return (
    <div
    className='
    space-y-4
    '
    >
      {/* head */}
      <div
      className='
      border-b-2
      '
      >
        <h2
        className='
        text-slate-700
        '
        >
          نظرت رو بنویس
        </h2>
      </div>

      {/* rating */}
      <div
      className='
      flex flex-col gap-3
      '
      >
        <h3
        className='
        font-thin text-slate-700 text-sm
        '
        >
          امتیاز بده*
        </h3>
        <Rating 
        size='xl'
        defaultValue={2} />
      </div>

      {/* form */}
      <div
      className='
      flex flex-col gap-3
      '
      >
        <h3
        className='
        font-thin text-slate-700 text-sm
        '
        >
          نظر بده*
        </h3>
        <form 
        className='
        flex flex-col gap-3
        '
        >
          <Textarea
          /* className='
          bg-slate-50
          ' */
          //label="Autosize with 4 rows max"
          //placeholder="نظر شما..."
          autosize
          minRows={6}
          maxRows={8}
          //color=''
          />

          <button 
          className='
          p-2 px-3 rounded-md
          text-white font-semibold
          bg-blue-800
          transition-all
          hover:bg-blue-600
          self-start
          '
          type="submit">
            ارسال
          </button>
        </form>
      </div>
    </div>
  )
}
export default ReviewForm;