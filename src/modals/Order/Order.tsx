import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react'

import { useMultiStep } from '@/hooks/useMultiStep';
import PickSize from './steps/PickSize';
import PickDrink from './steps/PickDrink';
import Address from './steps/Address';
import InVoice from './steps/InVoice';
import Success from './steps/Success';
import { useState } from 'react';
import {MdArrowBackIosNew} from 'react-icons/md'

function Order({
  isOpen,
  onOpen,
  onClose,
}: any) {
  const [currentSize, setCurrentSize] = useState(0);
  const [sizes, setSizes] = useState([
    'small', 'medium', 'large',
  ]);

  const [state, setState] = useState({
    size: 0,
    drinks: [
      //drink._id
      // quantity
    ],
    address: '',
    total: 0,
  });

  const {
    currentStep,
    step,
    goTo,
    next,
    back,
    isFistStep,
    isLastStep,
  } = useMultiStep([
    <PickSize key={0}/>,
    <PickDrink key={1}/>,
    <Address key={2}/>,
    <InVoice key={3}/>,
    <Success key={4}/>
  ]);

  return (
    <>

      <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      size={'lg'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Button 
            variant='ghost'
            onClick={back}
            size={'xs'}
            >
              <MdArrowBackIosNew
              size={20}
              />
            </Button>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
          className='
          bg-gray-50
          '
          >
            {step}
          </ModalBody>
          <ModalFooter
            justifyContent={'center'}
          >
            <Button 
            variant='solid'
            onClick={next}
            >
              next
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Order