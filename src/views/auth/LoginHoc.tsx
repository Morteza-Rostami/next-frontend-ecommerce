import { useEffectOnce } from '@/hooks/useEffectOnce';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { checkEmailErr, checkUsernameErr } from './utils/authHelper';
import { useDisLogin, useSelLinkDate, useSelSetCooldown } from '@/store/auth.store';

type State = {
  email: string,
  emailErr: string[],
}

const LoginHoc = (Component: any) =>  {
  const Compo = () => {
    const loginAct = useDisLogin();
    const coolDown = useSelSetCooldown();
    const linkDate = useSelLinkDate();
    const initEmailRef = useRef(false);

    const [state, setState] = useState<State>({
      email: '',
      emailErr: []
    });

    // input fields
    const inputs = [
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

    // request
    /* useEffectOnce(() => {
    }) */

    function handleSubmit(e: any) {
      e.preventDefault();
      const emailErrors = checkEmailErr(state, setState);
      
      if (emailErrors.length) {
        return;
      }

      loginAct({email: state.email});
    }

    function handleChange(e: any) {
      if (e.target.name === 'email')
        initEmailRef.current = true;

      setState(
        (c: any) => ({...c, [e.target.name]: e.target.value}))
    }

    useEffect(() => {
      if (initEmailRef.current) checkEmailErr(state, setState);
    }, [state.username, state.email]);
    
    //if (productLoad) return <div>Loading...</div>

    return <Component {...{
      //products: products,
      state, setState,
      inputs,
      handleSubmit,
      handleChange,
      coolDown,
      linkDate,
    }}/>;
  }
  return Compo
}

export default LoginHoc;