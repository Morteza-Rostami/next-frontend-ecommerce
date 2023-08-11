
import api from '@/routes/api';
import { Product, User } from '@/types/types';
import {create} from 'zustand';
import toast from 'react-hot-toast'
import { GetVerifyToast } from '@/components/VerifyToast';
import { loginCodeNote, loginCooldownNote, loginFailedNote, loginSuccessNote, signupFailedNote, signupSuccessNote, verifyFailedNote, verifySuccessNote } from '@/views/auth/utils/notifications';
//import {Redirect} from '@/components/redirects/Redirect';
import { createLs, readLs } from '@/utils/localstorage';
//import { useRouter } from 'next/router';
import {redirect} from 'next/navigation';
import { compareLinkDate } from '@/views/auth/utils/authHelper';

import { useCartStore } from './cart.store';

// pizza store
type StoreType = {
  user: User | {},
  // go to next fomr slide
  goTo: ((index: number) => void) | null, 
  userLoad: boolean,
  coolDown: boolean,
  linkDate: any,
  signup: (
    data: {username: string, email: string}, 
    func: () => void
    ) => void,
  login: (
    data: {email: string}, 
    func: () => void
    ) => void
  verify: (data: {email: string}, router: any) => void
  //getAuthUser: () => User | void,
  setLoading: () => void,
  onCooldown: () => void,
  offCooldown: () => void,
  setGoto: any,
  setLinkDate: any,
}

export const useUserStore = create((set, get): StoreType => ({
  user: readLs('user') || {},
  userLoad: false,
  coolDown: false,
  linkDate: 0,
  goTo: null,

  //======================================================

  signup: async (data, func) => {
    try {
      (get() as unknown as any).setLoading();
      // fetch pizzas
      const results = await api.signup(data);
      
      console.log('getproducts res:: ', results);
      (get() as unknown as any).setLoading();

      // create user: success
      const newUser = results.data;
      if (newUser) {
        // success toast
        console.log('signup sex------------')
        signupSuccessNote();
        (get() as unknown as any).goTo(1);
      } else {
        // failed toast
        signupFailedNote();
      }

      // set store
      /* set((state: StoreType) => ({
        ...state, 
      })); */
    } catch(err: any) {
      console.log({msg: 'action: signup/ failed', err: err.message});
      return;
    }
  },

  //======================================================

  login: async (data, func) => {
    try {
      (get() as unknown as any).setLoading();
      // fetch pizzas
      const results: any = await api.login(data);
      
      console.log('login res:: ', results);
      (get() as unknown as any).setLoading();

      if (!results.err) {

        // if recently made a request : set cool down to true.
        if (compareLinkDate(results.data)) {
          // you have to wait
          // set the link exairy date in state
          (get() as unknown as any).setLinkDate(results.data);
          (get() as unknown as any).onCooldown();
          loginCooldownNote();
        } else {
          (get() as unknown as any).offCooldown();
          loginCodeNote(data.email);
          loginSuccessNote();
        }
      } else {
        loginFailedNote();
      }

      // 

      // set store
      /* set((state: StoreType) => ({
        ...state, 
      })); */
    } catch(err: any) {
      console.log({msg: 'action: login/ failed', err: err.message});
      return;
    }
  },

  //======================================================

  verify: async (data, router) => {
    try {
      (get() as unknown as any).setLoading();
      //const router = useRouter();
      // fetch pizzas
      const results: Promise<any> | undefined = await api.verify(data);
      
      console.log('verify res:: ', results);
      (get() as unknown as any).setLoading();

      if (results) {
        verifySuccessNote();
      } else {
        verifyFailedNote();
      }

      // store user in local storage
      createLs(results, 'user');
      
      // set store
      set((state: StoreType) => ({
        ...state, 
        user: readLs('user') || {},
      }));

      // store ls items in db
      (useCartStore as unknown as any).getState().storeLsToDb();
      //(useCartStore as unknown as any).getState().refreshState();
      console.log('cart asfter login: ', (useCartStore as unknown as any).getState().cart);

      router.push('/');
      

    } catch(err: any) {
      console.log({msg: 'action: verify/ failed', err: err.message});
      return;
    }
  },

  setGoto: (func: any) => set((state: any) => ({...state, goTo: func})),
  setLinkDate: (date: any) => set((state: any) => ({...state, linkDate: date})),
  setLoading: () => set((state: any) => ({...state, userLoad: !state.userLoad})),
  offCooldown: () => set((state: any) => ({...state, coolDown: false})),
  onCooldown: () => set((state: any) => ({...state, coolDown: true})),
}))

// subscribe
useUserStore.subscribe((state) => console.log('user-store-updated:', state));

// actions

// products
/* export const useDisGetUser = 
  () => useUserStore((state: any) => state.user); */
export const useSelUser = 
  () => useUserStore((state: any) => state.user);

// GET: product
export const useDisSignup = 
  () => useUserStore((state: any) => state.signup);
//export const useSelUser = () => useUserStore((state: any) => state.user);

// /login
export const useDisLogin = 
  () => useUserStore((state: any) => state.login);

// verify
export const useDisVerify = 
  () => useUserStore((state: any) => state.verify);

// cool down
export const useSelSetCooldown = 
  () => useUserStore((state: any) => state.coolDown);

// linkDate
export const useSelLinkDate =
  () => useUserStore((state: any) => state.linkDate);

export const useSelUserLoad = () => useUserStore((state: any) => state.userLoad); 

// move to next form
export const useDisSetGoto = () => useUserStore((state: any) => state.setGoto);