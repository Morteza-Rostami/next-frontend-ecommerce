import { Nossr } from '@/components/NoSsr';
import CountDown2 from '@/components/count-down-home/CountDown2';
import React from 'react';

type HeadProps = {
  
};

const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();

const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

const Head:React.FC<HeadProps> = () => {
  
  return (
    <div
    className='
    flex flex-col items-center justify-center gap-10 
    py-4 w-full 
    text-center
    md:flex-row md:text-right
    '
    >
      <div>
        <h3>
        پیشنهاد های ویژه&nbsp;<span className='text-rose-600'>این هفته</span><span>!</span>
        </h3>
        <p>
        در شرکت لبنی کاله هم‌اکنون سه واحد (ماست و نوشیدنی) و فرادما
        </p>
      </div>

      {/* count down */}
      <Nossr>
        <div>
          <CountDown2
          targetDate={dateTimeAfterThreeDays}
          />
        </div>
      </Nossr>
    </div>
  )
}
export default Head;