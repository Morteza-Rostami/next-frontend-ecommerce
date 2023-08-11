import React from 'react';
import ExpiredNotice from './ExpiredNotice';
import ShowCounter from './ShowCounter';
import useCountDown from '@/hooks/useCountDown';

type CountDownProps = {
  targetDate: number,
};

const CountDown:React.FC<CountDownProps> = ({
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
export default CountDown;