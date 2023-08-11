
import api from '@/routes/api';
import { Product } from '@/types/types';
import {create} from 'zustand';

// pizza store
type StoreType = {
  products: any[],
  product: any,
  currentPage: number,
  nextPage: number,
  totalPage: number,
  productLoad: boolean,

  // methods
  getProducts: Function,
  getProduct: Function,
  setLoading: Function,
}

const userStoreProduct = create((set, get): StoreType => ({
  products: [],
  product: {},
  currentPage: 1,
  nextPage: 2,
  totalPage: 0,
  productLoad: false,

  getProducts: async (data: {
    page: number, limit: number,
  }) => {
    try {
      (get() as unknown as any).setLoading();
      // fetch pizzas
      const results = await api.getProducts(data);
      const res = results.data;
      (get() as unknown as any).setLoading();

      // set store
      set((state: StoreType) => ({
        ...state, 
        products: [...state.products, ...res],
        //currentPage: res.currentPage,
        //nextPage: res.nextPage,
        //totalPage: res.totalPage,
      }));
    } catch(err: any) {
      console.log({msg: 'action: getProducts/ failed', err: err.message});
      return;
    }
  },

  getProduct: async (data: {
    slug: string,
  }) => {
    try {
      //console.log('================================');
      (get() as unknown as any).setLoading();
      // fetch pizzas
      const results = await api.getProduct(data);
      //console.log('=====444', results)
      const res = results.data[0];
      //console.log('get: /product: ', res);
      (get() as unknown as any).setLoading();

      // set store
      set((state: StoreType) => ({
        ...state, 
        product: {...res},
        //currentPage: res.currentPage,
        //nextPage: res.nextPage,
        //totalPage: res.totalPage,
      }));
    } catch(err: any) {
      console.log({msg: 'action: getProducts/ failed', err: err.message});
      return;
    }
  },

  setLoading: () => set((state: any) => ({...state, productLoad: !state.productLoad})),
}))

// subscribe
userStoreProduct.subscribe((state) => console.log('product-store-updated:', state));

// actions

// products
export const useDisGetProducts = () => userStoreProduct((state: any) => state.getProducts);
export const useSelProducts = () => userStoreProduct((state: any) => state.products);

// GET: product
export const useDisGetProduct = () => userStoreProduct((state: any) => state.getProduct);
export const useSelProduct = () => userStoreProduct((state: any) => state.product);

export const useSelProductLoad = () => userStoreProduct((state: any) => state.productLoad); 
