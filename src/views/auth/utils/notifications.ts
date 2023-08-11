import { GetVerifyToast } from "@/components/VerifyToast";
import { toast } from "react-hot-toast";

export const signupSuccessNote = () => toast.success('ثبت نام موفقیت آمیز بود', {
  duration: 10000,
});
export const signupFailedNote = () => toast.error('ثبت نام شکست خورد', {
  duration: 10000,
});

export const loginSuccessNote = () => toast.success('با موفقیت وارد شدی', {
  duration: 6000,
});

export const loginCodeNote = 
  (email: string) => toast(
    (t) => (
      GetVerifyToast(t, email)
    ),
    {
      //duration: Infinity,
      duration: 16000,
    }
  );
  
export const loginFailedNote = () => toast.error('شکست ورود به سایت', {
  duration: 6000,
});

export const loginCooldownNote = () => toast.error('صبر کنید!', {
  duration: 6000,
});

export const verifySuccessNote = () => 
  toast.success('به سایت ما خوش آمدید', {duration: 6000})

export const verifyFailedNote = () => 
  toast.error('ناموفقیت آمیز', {duration: 6000})

// item was added to the cart
export const itemAddedNote = () => 
  toast.success('اضافه شد', {duration: 6000})