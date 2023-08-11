import React from "react"
import { Radio, RadioGroup, Stack } from "@chakra-ui/react"
import {GiFullPizza} from 'react-icons/gi'
import { useDisSetSize, useSelSize } from "@/store/order.store"

function SizeOptions() {
  //const [value, setValue] = React.useState('small')
  const size = useSelSize();
  const setSize = useDisSetSize();

  return (
    <RadioGroup 
    width={'100%'}
    onChange={setSize} 
    value={size}>
      <Stack 
      direction='column'
      gap={8}
      >
        <div
        className="
        flex flex-col gap-2 items-center
        w-full
        "
        >
          <GiFullPizza
            size={24}
            color={'orange'}
          />
          <Radio 
          //colorScheme="blackAlpha"
          //ringColor={'black'}
          borderColor={'#808080'}
          value='small'>
            <span>
              Small
            </span>
          </Radio>
        </div>
        <div
        className="
        flex flex-col gap-2 items-center
        w-full
        "
        >
          <GiFullPizza
            size={48}
            color={'orange'}
          />
          <Radio 
          borderColor={'#808080'}
          value='medium'>
            <span>
              Medium
            </span>
          </Radio>
        </div>

        <div
        className="
        flex flex-col gap-2 items-center
        #border-2
        w-full
        "
        >
          <GiFullPizza
            size={72}
            color={'orange'}
          />
          <Radio 
          borderColor={'#808080'}
          value='large'>
            <span>
              Large
            </span>
          </Radio>
        </div>
      
      </Stack>
    </RadioGroup>
  )
}

export default SizeOptions;