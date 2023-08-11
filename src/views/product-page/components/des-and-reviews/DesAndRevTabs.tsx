import { Tabs } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import ReviewForm from './ReviewForm';
import ReviewCard from './ReviewCard';

function DesAndRevTabs({
  product
}: any) {
  return (
    <Tabs 
    defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab 
        value="gallery" 
        icon={<IconPhoto size="0.8rem" />}
        >
          <span
          className='
          text-lg font-semibold text-slate-700
          '
          >
            توضیحات
          </span>
        </Tabs.Tab>
        <Tabs.Tab 
        value="messages" 
        icon={<IconMessageCircle size="0.8rem" />}
        >
          <span
          className='
          text-lg font-semibold text-slate-700
          '
          >
          نظرات (2)
          </span>
        </Tabs.Tab>
       
      </Tabs.List>

      <Tabs.Panel value="gallery" pt="xs">
        <p
        className='
        text-slate-800
        '
        >
          {product.description}
        </p>
      </Tabs.Panel>

      <Tabs.Panel value="messages" pt="xs">
        <div
        className='
        flex flex-col gap-8
        '
        >
          <ReviewForm/>

          {/* review list */}
          <div
          className='
          space-y-4
          '
          >
            <div>
              <h3
              className='
              border-b-2 text-slate-700
              '
              >
                نظرات شما
              </h3>
            </div>
            <div
            className='
            space-y-6
            '
            >
              <ReviewCard/>
              <ReviewCard/>

            </div>
          </div>
        </div>
      </Tabs.Panel>
    </Tabs>
  );
}

export default DesAndRevTabs;