import React from 'react';
import InputGroup from './InputGroup';
import LoginHoc from './LoginHoc';
import CountDown from '@/components/count-down/CountDown';

type LoginFormProps = {
  state: {email: string} | any,
  setState: any,
  inputs: any[],
  coolDown: boolean,
  linkDate: any,
  handleSubmit: () => {},
  handleChange: any,
};
//const now = new Date();

const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();

const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

const LoginForm:React.FC<LoginFormProps> = ({
  state, setState,
  inputs,
  handleSubmit,
  handleChange,
  coolDown,
  linkDate,
}) => {
  
  return (
    <form 
    className='
    flex flex-col gap-6 items-center justify-between
    w-full
    '
    onSubmit={handleSubmit}
    >
      {/* email */}
      {
        inputs.map((input, i) => (
          <InputGroup
          key={input.id} 
          {...input} 
          value={state[input.name]}
          // e.target.name
          onChange={handleChange}
          errors={state[`${input.name}Err`]}
          coolDown={coolDown}
          />
        ))
      }
      {/* count down */}
      {
        coolDown
        ? (
          <CountDown
          targetDate={linkDate}
          />
        ) : ('')
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
        ورود
      </button>

      
    </form>
  )
}
export default LoginHoc(LoginForm);