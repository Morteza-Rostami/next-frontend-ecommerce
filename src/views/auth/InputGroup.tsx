import React from 'react';

type InputGroupProps = {
  id: number,
  name: string,
  type: string,
  placeholder: string,
  label: string,
  value: any,
  onChange: any, 
  errors: any[],
  //errorMsg: string,
  //required: boolean,
  //pattern: any,
  coolDown: boolean,
};

const InputGroup:React.FC<InputGroupProps> = ({
  id,
  name,
  type,
  placeholder,
  label,
  value,
  onChange,
  errors,
  //errorMsg,
  //required,
  //pattern,
  coolDown,
}) => {
  
  console.log('errors: ', name, errors, value)
  return (
    <div
      className='
      w-full
      flex flex-col gap-2 
      '
      >
        <label 
        htmlFor={name}>
          {label} 
          {
            errors && errors.length
            ? (
              <span 
              className={`
              text-rose-600
              `}
              >*</span>
            ): ('')
          }
        </label>
        <input 
        className='
        p-2 px-4
        rounded-md
        w-full
        bg-slate-100
        border-none
        outline-none

        md:w-96
        peer
        '
        autoComplete='off'
        type={type}
        name={name} 
        id={name}
        //required={required}
        //pattern={pattern}
        
        //disabled={coolDown ? true : false}
        value={value}
        onChange={onChange}
        />
        {/* errors */}
        <div
        className='
        flex flex-col gap-1
        '
        >
        {
        errors && errors.length
        ? (
          errors.map((err, i) => {
            return (
              <span
              key={i}
              className='
              text-sm text-rose-600 font-thin
              #peer-required:block #invalid:block
              '
              >
                {err}
              </span>
            )
          })
        ): ('')
        }
        </div>
        
      </div>
  )
}
export default InputGroup;