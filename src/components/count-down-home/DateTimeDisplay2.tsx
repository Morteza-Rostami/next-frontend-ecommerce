import React from 'react';

type DateTimeDisplay2Props = {
  value: number,
  type: string,
  isDanger: boolean,
};

const DateTimeDisplay2:React.FC<DateTimeDisplay2Props> = ({
  value,
  type,
  isDanger,
}) => {
  
  return (
    <div
    className='
    flex flex-col items-center justify-center gap-3
    '
    >

      <div 
      /* isDanger ? 'countdown danger' : 'countdown' */
      className={`
      
      text-center
      bg-rose-500
      w-14 h-14 rounded-md aspect-square
      p-0 text-white font-bold
      `}
      
      >
        <p
        className='
        flex items-center justify-center text-center
        font-extrabold text-lg w-full h-full p-0
        #-m-4
        '
        /* style={{
          lineHeight: 1.1,
        }} */
        >
          {value}
        </p>
      </div>
      <span
      className='
      text-sm font-thin -m-2
      '
      >
        {type}
      </span>
    </div>
  );
}
export default DateTimeDisplay2;