import { useEffectOnce } from '@/hooks/useEffectOnce';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { checkEmailErr, checkUsernameErr } from './utils/authHelper';
import { useDisSignup, useSelUser, useUserStore } from '@/store/auth.store';

type State = {
  username: string,
  usernameErr: string[],
  email: string,
  emailErr: string[],
}

const SignupHoc = (Component: any) =>  {
  const Compo = () => {
    const signupAct = useDisSignup();
    //const signupAct = useUserStore((state: any) => state.signup);
    //const authUser = useSelUser();
    const initUsernameRef = useRef(false);
    const initEmailRef = useRef(false);

    const [state, setState] = useState<State>({
      username: '',
      usernameErr: [],
      email: '',
      emailErr: []
    });

    // input fields
    const inputs = [
      {
        id: 0,
        name: 'username',
        type: 'text',
        placeholder: 'نام کاربری',
        label: 'نام کاربری',

        errorMsg: 'نام کاربری الزامی است',
        pattern: '^[A-Za-z09]{3, 24}$',
        required: true,
      },
      {
        id: 1,
        name: 'email',
        type: 'email',
        placeholder: 'ایمیل',
        label: 'ایمیل',

        errorMsg: 'ایمیل الزامی است',
        required: true,
      },
    ]

    /* const signupAct = useDisSignup(); */

    // request
    /* useEffectOnce(() => {
    }) */

    function handleSubmit(e: any) {
      e.preventDefault();
      const usernameErrors = checkUsernameErr(state, setState);
      const emailErrors = checkEmailErr(state, setState);

      // return if errors
      if (usernameErrors.length || emailErrors.length) {
        console.log('got error')
        return;
      }
      
      signupAct({
        username: state.username,
        email: state.email,
      });

      // clear
      /* setState((c) => ({
        username: '',
        email: '',
        usernameErr: [],
        emailErr: [],
      })); */
      
    }

    function handleChange(e: any) {
      // fist render
      if (e.target.name === 'username')
        initUsernameRef.current = true;
      if (e.target.name === 'email')
        initEmailRef.current = true;

      setState(
        (c: any) => ({...c, [e.target.name]: e.target.value}))
    }

    useEffect(() => {
      if (initUsernameRef.current) checkUsernameErr(state, setState);
      if (initEmailRef.current) checkEmailErr(state, setState);
    }, [state.username, state.email]);
    
    //if (productLoad) return <div>Loading...</div>

    return <Component {...{
      //products: products,
      state, setState,
      inputs,
      handleSubmit,
      handleChange,
    }}/>;
  }
  return Compo
}

export default SignupHoc;