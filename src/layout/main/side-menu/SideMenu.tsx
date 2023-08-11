import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Group } from '@mantine/core';
import { HiMiniBars3 } from 'react-icons/hi2';

const SideMenu = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer 
      opened={opened} 
      onClose={close} 
      title="">
        {/* Drawer content */}
      </Drawer>

      <Group position="center">
        <button 
        className='
        block
        bg-sky-50
        rounded-full
        border-none
        p-2
        transition
        hover:bg-sky-100
        text-sky-400
        lg:hidden
        '
        onClick={open}>
          <HiMiniBars3
          size={24}
          color={'gray'}
          />
        </button>
      </Group>
    </>
  );
}

export default SideMenu