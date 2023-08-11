import React from 'react';

type DateTimeDisplayProps = {
  value: number,
  type: string,
  isDanger: boolean,
};

const DateTimeDisplay:React.FC<DateTimeDisplayProps> = ({
  value,
  type,
  isDanger,
}) => {
  
  return (
    <div 
    /* isDanger ? 'countdown danger' : 'countdown' */
    className={`
    grid place-items-center gap-0
    text-center
    #bg-rose-500
    #w-14 #h-14 rounded-md #aspect-square
    p-0 #text-white font-bold text-rose-700
    `}
    
    >
      <p
      className='
      font-extrabold text-lg w-full h-full p-0
      '
      /* style={{
        lineHeight: 1,
      }} */
      >
        {value}
      </p>
      {/* <span
      className='
      text-sm font-thin
      '
      >
        {type}
      </span> */}
    </div>
  );
}
export default DateTimeDisplay;