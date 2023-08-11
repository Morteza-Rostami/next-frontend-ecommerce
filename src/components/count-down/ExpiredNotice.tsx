import React from 'react';

type ExpiredNoticeProps = {
  
};

const ExpiredNotice:React.FC<ExpiredNoticeProps> = () => {
  
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
}
export default ExpiredNotice;