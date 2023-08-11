import { useDisVerify } from '@/store/auth.store';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';

function verify(t: any, email: string, verifyAct: any, router: any) {
  verifyAct({email: email}, router);
  toast.dismiss(t.id);
}

export const GetVerifyToast = (t: any, email: string) => {
  const router = useRouter();
  const verifyAct = useDisVerify();

  return (
    <span>
      <button onClick={() => verify(t, email, verifyAct, router)}>
        لینک ورود به ایمیل ({email}) ارسال شد
      </button>
    </span>
  )
}
//2023-08-03T15:13:33.695Z
/* const VerifyToast:React.FC<any> = ({
  t
}) => {
  
  return (
    <span>
      <button onClick={() => toast.dismiss(t.id)}>Dismiss</button>
    </span>
  )
} */
//export default VerifyToast;