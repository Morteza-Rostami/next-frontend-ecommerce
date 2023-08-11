
import React, { useEffect, useState } from 'react';
import { useEffectOnce } from '@/hooks/useEffectOnce';
import { HiOutlineCurrencyDollar, HiOutlineTruck } from 'react-icons/hi';
import { HiOutlineBuildingStorefront, HiReceiptPercent } from 'react-icons/hi2';
import Info from './Info';
import fake from '@/config/faker';

type InfosProps = {
};

const icons =[
  <HiOutlineBuildingStorefront key={0} size={24}/>,
  <HiOutlineTruck key={1} size={24}/>,
  <HiReceiptPercent key={2} size={24}/>,
  <HiOutlineCurrencyDollar key={3} size={24}/>,
]

const terms = [
  'محصولات تازه و خوشمزه',
  'ارسال رایگان به منزل',
  'محصولات با تخفیف عالی',
  'بهترین قیمت در بازار',
]

const Infos:React.FC<any> = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffectOnce(() => {
    
    const sex: any[] = icons.map((icon, i) => {
      return {
        icon: icon,
        text: terms[i]
      }
    })
    
    //console.log(items)
    setItems(sex);
  });

  return (
    <div
    className='
    flex items-center justify-between flex-wrap gap-4
    container mx-auto
    px-4
    md:px-8
    pb-6 border-b-2
    '
    >
      {
        items && items.length
        ? (
          items.map((item: any, inx: any) => {
            return (
              <Info
              icon={item.icon}
              text={item.text}
              key={inx}
              />
            )
          })
        ) : ('')
      }
    </div>
  )
}

export default Infos;