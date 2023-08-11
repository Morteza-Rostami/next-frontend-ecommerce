import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';

type ShowCounterProps = {
  days: number,
  hours: number,
  minutes: number,
  seconds: number,

};

const ShowCounter:React.FC<ShowCounterProps> = ({
  days,
  hours,
  minutes,
  seconds,
}) => {
  
  return (
    <div 
    className="
    show-counter
    flex gap-2 flex-row-reverse items-center

    ">
      {/* <DateTimeDisplay value={days} type={'روز'} isDanger={days <= 3} />
      <p>:</p> */}
      <DateTimeDisplay value={hours} type={'ساعت'} isDanger={false} />
      <p
      className='
      font-extrabold text-xl
      '
      >:</p>
      <DateTimeDisplay value={minutes} type={'دقیقه'} isDanger={false} />
      <p
      className='
      font-extrabold text-xl
      '
      >:</p>
      <DateTimeDisplay value={seconds} type={'ثانیه'} isDanger={false} />
    </div>
  );
}
export default ShowCounter;