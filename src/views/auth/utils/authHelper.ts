import { User } from '@/types/types';
import { readLs } from '@/utils/localstorage';
import validator from 'email-validator'

export function checkUsernameErr(state: any, setState: any) {
  const usernameEmptyErr = 'نام کاربری الزامی است';
  const usernameCharsErr = 'فقط حروف فارسی وارد کن';
  const usernameCharsLimErr = 'نام کاربری باید حداقل ۶ حرف باشد';

  const errors: string[] = [];

  // username check
  if (state.username === '') {
    // username: not empty
    if (!errors.includes(usernameEmptyErr)) {
      errors.push(usernameEmptyErr);
    }
  }
  // /^[a-z]+$/.test(c.username))
  // only persian letters
  if (state.username && !(/[u\u0600-\u06FF]/.test(state.username))) {
    if (!errors.includes(usernameCharsErr)) {
      errors.push(usernameCharsErr);
    } 
  }
  // more than 5 chars
  // /^\S{6,}$/
  if (state.username && !(/^\S.{6,}\S$/.test(state.username))) {
    if (!errors.includes(usernameCharsLimErr)) {
      errors.push(usernameCharsLimErr);
    } 
  }

  setState((c: any) => ({
    ...c,
    usernameErr: errors,
  }))

  return errors;
}

export function checkEmailErr(state: any, setState: any) {
  const emptyErr = 'ایمیل الزامی است';
  const validErr = 'ایمیل واقعی نیست';

  const errors: string[] = [];

  if (state.email === '') {
    if (!errors.includes(emptyErr)) {
      errors.push(emptyErr);
    }
  }

  if (state.email && !(validator.validate(state.email))) {
    if (!errors.includes(validErr)) {
      errors.push(validErr);
    } 
  }

  setState((c: any) => ({
    ...c,
    emailErr: errors,
  }))

  return errors;
}

// compare lastLink date to current date
export function compareLinkDate(linkDate: string): boolean {
  const date = new Date(linkDate);
  const now = new Date();

  if (date.getTime() <= now.getTime()) {
    console.log('time has passed=====================');
    return false;
  }
  return true;
}

// get auth user from ls
export function getAuthUserLs(): any {
  return readLs('user');
}