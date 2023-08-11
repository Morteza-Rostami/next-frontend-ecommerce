
import { useEffectOnce } from '@/hooks/useEffectOnce';
import { useMultiStep } from '@/hooks/useMultiStep';
import { useDisSetGoto } from '@/store/auth.store';
import LoginForm from '@/views/auth/LoginForm';
import SignupForm from '@/views/auth/SignupForm';
import React from 'react';
import { Toaster, toast } from 'react-hot-toast';

type indexProps = {
};

const SignupPage:React.FC<any> = () => {
  const {
    currentStep,
    step,
    goTo,
    next,
    back,
    isFistStep,
    isLastStep,
  } = useMultiStep([
    <SignupForm key={0}/>,
    <LoginForm key={1}/>,
  ]);
  const setGoto = useDisSetGoto();

  useEffectOnce(() => {
    setGoto(goTo);
  });
  
  return (
    <div
    className='
    container mx-auto p-4
    grid place-items-center
    #bg-slate-50
    h-full py-10
    '
    >
      {/* form wrapper */}
      <div
      className='
      #border-2 #border-gray-100 rounded-md p-10
      shadow w-full
      space-y-10
      md:w-auto
      '
      >
        <div
        className='
        flex items-center justify-center gap-8
        w-full
        '
        >
          <button
          className='
          transition-all
          hover:text-blue-500
          underline text-center
          '
          type='button'
          onClick={() => goTo(0)}
          >
            ثبت نام
          </button>
          <button
          className='
          transition-all
          hover:text-blue-500
          underline
          '
          type='button'
          onClick={() => goTo(1)}
          >
            ورود
          </button>

        </div>
        {step}
      </div>
      
    </div>
  )
}
export default SignupPage;