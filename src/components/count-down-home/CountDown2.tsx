import React from 'react';
//import ExpiredNotice from './ExpiredNotice';
import ShowCounter from './ShowCounter2';
import useCountDown from '@/hooks/useCountDown';

type CountDown2Props = {
  targetDate: any,
};

const CountDown2:React.FC<CountDown2Props> = ({
  targetDate
}) => {
  
  const [days, hours, minutes, seconds] = useCountDown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <></>;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
}
export default CountDown2;