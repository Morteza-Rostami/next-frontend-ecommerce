import React from 'react';
import Newsletter from './newsletter/Newsletter';
import Infos from './infos/Infos';
import Links from './links/Links';

type FooterProps = {
  
};

const Footer:React.FC<any> = () => {
  
  return (
    <footer
    className='
    flex flex-col
    #container #mx-auto
    space-y-10
    mt-10
    bg-gray-50
    '
    >
      <div
      className='
      bg-blue-800
      '
      >
      <Newsletter/>
      </div>
      <Infos/>
      <Links/>
    </footer>
  )
}
export default Footer;