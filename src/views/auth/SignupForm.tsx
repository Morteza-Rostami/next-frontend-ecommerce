import React from 'react';
import SignupHoc from './SignupHoc';
import InputGroup from './InputGroup';
//import { Toaster } from 'react-hot-toast';

type SignupFormProps = {
  state: {username: string, email: string} | any,
  setState: any,
  inputs: any[],
  handleSubmit: () => {},
  handleChange: any,
};

const SignupForm:React.FC<SignupFormProps> = ({
  state, setState,
  inputs,
  handleSubmit,
  handleChange,
}) => {
  
  return (
    <form 
    className='
    flex flex-col gap-6 items-center justify-between
    w-full
    '
    onSubmit={handleSubmit}
    >
      {/* username and email */}
      {
        inputs.map((input, i) => (
          <InputGroup
          key={input.id} 
          {...input} 
          value={state[input.name]}
          // e.target.name
          onChange={handleChange}
          errors={state[`${input.name}Err`]}
          />
        ))
      }
      

      <button 
      className='
      p-3 px-4 rounded-md
      text-white
      bg-blue-700
      hover:bg-blue-600
      self-stretch
      '
      type="submit">
        ثبت نام
      </button>
      
    </form>
  )
}
export default SignupHoc(SignupForm);