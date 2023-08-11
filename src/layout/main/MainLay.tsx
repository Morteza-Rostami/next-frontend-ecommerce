//import { APP_NAME } from '@/config/config';
import React, { ReactNode } from 'react';
import Header from './header/Header';
import Nav from './navigation/Nav';
import Footer from './footer/Footer';
import { Toaster } from 'react-hot-toast';

type MainLayProps = {
};

const MainLay:React.FC<any> = ({
  children
}: {
  children: ReactNode,
}) => {

  return (

    <div
    className='
    main-layout
    flex flex-col
    pt-20
    lg:pt-40
    '
    /* style={{
      height: '100%',
    }} */
    >
      {/* <div
      className='
      fixed -top-20
      container mx-auto
      '
      >
      <Header/>
      </div> */}

      <div
      className='
      container mx-auto
      shadow-md
      #h-72
      '
      style={{
        zIndex: 50,
        position: 'fixed',
        top: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        left: 0,
        right: 0,
      }}
      >
      <Header/>
      <Nav/>
      </div>
      {children}
      <Footer/>
      {/* toast */}
      <Toaster
        //onClick={() => toast.dismiss()}
        />
    </div>
  )
}

export default MainLay;