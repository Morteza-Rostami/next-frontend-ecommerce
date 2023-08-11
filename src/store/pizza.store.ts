
import api from '@/routes/api';
import {create} from 'zustand';

// pizza store
type StoreType = {
  pizzas: any[],
  currentPage: number,
  nextPage: number,
  totalPage: number,
  pizzaLoading: boolean,
  getPizzas: Function,
  setLoading: Function,
}

const useStorePizza = create((set, get): StoreType => ({
  pizzas: [],
  currentPage: 1,
  nextPage: 2,
  totalPage: 0,
  pizzaLoading: false,

  getPizzas: async (data: {
    page: number, limit: number,
  }) => {
    try {
      (get() as unknown as any).setLoading();
      // fetch pizzas
      const results = await api.getPizzas(data);
      const res = results.data;

      (get() as unknown as any).setLoading();

      // set store
      set((state: StoreType) => ({
        ...state, 
        pizzas: [...state.pizzas, ...res.data],
        currentPage: res.currentPage,
        nextPage: res.nextPage,
        totalPage: res.totalPage,
      }));
    } catch(err: any) {
      console.log({msg: 'action: getPizzas/ failed', err: err.message});
    }
  },

  setLoading: () => set((state: any) => ({...state, pizzaLoading: !state.pizzaLoading})),
}))

// subscribe
useStorePizza.subscribe((state) => console.log(state));

// actions

export const useDisGetPizzas = () => useStorePizza((state: any) => state.getPizzas);
export const useSelPizzas = () => useStorePizza((state: any) => state.pizzas);
export const useSelPizzaLoad = () => useStorePizza((state: any) => state.pizzaLoading); 
