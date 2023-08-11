import React from 'react';

type IconBtnProps = {
  
};

const IconBtn:React.FC<any> = ({
  bgCol,
  bgColHover,
  icon,
  iconCol='',
}: any) => {
  
  if (!bgCol && !bgColHover) return <></>

  return (
    <button
    className={`
    block lg:hidden
    ${bgCol}
    rounded-full
    border-none
    p-2
    transition
    hover:${bgColHover}
    ${iconCol}
    `}
    >
      {icon}
    </button>
  )
}
export default IconBtn;