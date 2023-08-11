
import api from '@/routes/api';
import {create} from 'zustand';

// pizza store
type StoreType = {
  // for picking the size
  //currentSize: number,
  //items: any[],
  // data we send to the server.
  size: string,
  drinks: [
    //drink: string,
    //quantity: number,
  ],
  address: string,
  total: number,

  //getSize: Function,
  setSize: Function,
  //getDrinks: Function,
  setDrinks: Function,
}

const useStoreOrder = create((set, get): StoreType => ({
  size: 'small',
  drinks: [],
  address: '',
  total: 0,
  //getSize: () => (get() as unknown as any).currentSize,
  setSize: (size: string) => set(
    (state: any) => ({...state, size: size})),
  
  //getDrinks: () => {},
  setDrinks: () => {},

  //setLoading: () => set((state: any) => ({...state, pizzaLoading: !state.pizzaLoading})),
}))

// subscribe
useStoreOrder.subscribe((state) => console.log(state));

// actions

export const useDisSetSize = 
  () => useStoreOrder((state: any) => state.setSize);
export const useSelSize = 
  () => useStoreOrder((state: any) => state.size);
/* export const useSelPizzaLoad = 
  () => useStoreOrder((state: any) => state.pizzaLoading);  */
