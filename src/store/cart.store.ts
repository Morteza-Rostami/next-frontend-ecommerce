
import api from '@/routes/api';
import { Cart, Product, User } from '@/types/types';
import {create} from 'zustand';
import { authGuard } from '@/guards/authGaurd';
import { addToCartLs, decItemLs, deleteItemLs, getCartFromDb, getItemQuantityLs, incItemLs, isItemInCartLs } from '@/views/cart/utils/cartLs';
import { deleteLs, readLs } from '@/utils/localstorage';
import { pause } from '@/utils/helpers';
import { itemAddedNote } from '@/views/auth/utils/notifications';
import { getAuthUserLs } from '@/views/auth/utils/authHelper';
import { isItemInCartDb } from '@/views/cart/utils/cartDb';

// pizza store
type StoreType = {
  cart: Cart | {},
  cartLoad: boolean,
  cartActionLoad: boolean,
  cartHasItem: boolean,
  addToCart: (product: any, funca: any) => void,
  incItem: (product: any, funcs: any) => void,
  decItem: (product: any, funcs: any) => void,
  deleteItem: (product: any, funcs: any) => void,
  toggleCartLoad: () => void,
  cartLoadOn: () => any,
  cartLoadOff: () => any,
  isItemIn: (itemId: string, funcs: any) => any,
  getItemQuantity: (itemId: string) => number,
  refreshState: (init: boolean) => any,
}

export const useCartStore = create((set, get): StoreType => ({
  cart: {},
  cartLoad: true,
  cartActionLoad: false,
  cartHasItem: false,

  // referesh sate
  refreshState: async (init=false) => {

    try {
      // on initial page load
      // state is refreshed =: so: now check if item exist.
      if (init) {
        (get() as unknown as any).cartLoadOn();
      }
      const cart = await getCartFromDb();
      set((s: any) => ({...s, cart: cart}));

      if (init) {
        (get() as unknown as any).cartLoadOff();
      }
    } catch (err: any) {
      console.log('act: refreshState: ', err.message);
    }
    
  },

  addToCart: async (product, funcs) => {
    const authUser = getAuthUserLs();
    try {

      //(get() as unknown as any).toggleCartLoad();
      funcs.handleLoad();
      //pause(2000);
      // auth user
      setTimeout(async () => {
        if (authGuard()) {
          // if: item exist: increment quantity
          // else: push items into items
          console.log('auth: ', authUser.id)
          const result = await api.addToCart(authUser.id, product);
          console.log('addToCart: db', result);
        }
        // no auth user
        else {
          addToCartLs(product);
        } 

        //(get() as unknown as any).toggleCartLoad();

        // local state for load off
        funcs.handleLoad();
        /* funcs.handleIsInCart(
          (get() as unknown as any).isItemIn(product.id)
        ); */
        itemAddedNote();
        (get() as unknown as any).refreshState();
        (get() as unknown as any).isItemIn(product.id);
        /* funcs.handleCountUpdate((get() as unknown as any)
          .getItemQuantity(product.id)); */
      }, 3000);
    } catch(err: any) {
      console.log('patch: /cards/:id act: act: addToCart', err.message);
      return;
    }

  },

  //=======================================================

  // increment item
  incItem: async (product, funcs) => {
    const authUser = getAuthUserLs();
    funcs.handleLoad();

    try {
      
      setTimeout(async () => {
      if (authGuard()) {
        const result = await api.incItem(authUser.id, product);
        console.log('act: incItem: ', result);
      }
      else incItemLs(product);
      
        (get() as unknown as any).refreshState();
        funcs.handleLoad();
        /* funcs.handleCountUpdate((get() as unknown as any)
          .getItemQuantity(product.id)); */
        (get() as unknown as any).isItemIn(product.id);
      }, 2000);

    } catch(err: any) {
      console.log('patch: /cards/:id act: incItem', err.message);
      return;
    }
  },

  //=======================================================

  // decrement item
  decItem: async (product, funcs) => {
    const authUser = getAuthUserLs();

    try {
      
      funcs.handleLoad();
        setTimeout(async () => {
        if (authGuard()) {
          // if: only one item =: remove item
          // else: decrement item
          const result = await api.decItem(authUser.id, product);
          console.log('act: decItem: ', result);

        } 
        else {
          decItemLs(product);
        }
        (get() as unknown as any).refreshState();
        funcs.handleLoad();
        /* funcs.handleCountUpdate((get() as unknown as any)
          .getItemQuantity(product.id)); */
        /* funcs.handleIsInCart(
          (get() as unknown as any).isItemIn(product.id)
        ); */
        (get() as unknown as any).isItemIn(product.id);
      }, 2000);

    } catch(err: any) {
      console.log('patch: /cards/:id act: decItem', err.message);
      return;
    }

  },

  //=======================================================

  // delete item
  deleteItem: async (product, funcs) => {
    const authUser = getAuthUserLs();
    try {

      funcs.handleLoad();
      setTimeout(async () => {
        if (authGuard()) {
          // find and remove
          const result = await api.deleteItem(authUser.id, product.id)
          console.log('act: delete item: result: ', result);
        }
        else {
          deleteItemLs(product);
        }
      
        funcs.handleLoad();
        (get() as unknown as any).refreshState();
        (get() as unknown as any).isItemIn(product.id);
        /* funcs.handleCountUpdate((get() as unknown as any)
          .getItemQuantity(product.id)); */
      }, 2000);
      

    } catch(err: any) {
      console.log('patch: /cards/:id act: deleteItem', err.message);
      return;
    }

  },

  //=======================================================

  // is item in cart (*** deprecated)
  isItemIn: async (itemId, type='one' , funcs) => {
    let isItemInCart: any = false;
    const authUser = getAuthUserLs();

    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~', itemId)
    //funcs.loadOn();
    //if (type === 'all')  
    /* 

    const items = (get() as unknown as any).cart.items;
console.log(items);
    if (items) {
      isItemInCart = items.some((item, i) => {
        console.log(item.product.id , itemId)
        if (item.product.id === itemId) {
          return true;
        }
      });
    }
      console.log('is in =========', isItemInCart) */
      if (type === 'all') (get() as unknown as any).cartLoadOn();
      try {
      
      //setTimeout(async () => {
        if (authGuard()) { 
          isItemInCart = await api.isItemInDb(authUser.id, itemId);
        }
        else {
          isItemInCart = isItemInCartLs(itemId);
        }
        console.log('is in cart act: ...', isItemInCart ? itemId : '');
        
        //if (type === 'all')  
        if (type === 'all') (get() as unknown as any).cartLoadOff();
        //funcs.loadOff();
        /* funcs.handleCountUpdate((get() as unknown as any)
          .getItemQuantity(product.id)); */
        
        return set((s: any) => ({...s, cartHasItem: isItemInCart}));
      //}, 2000);

    } catch(err: any) {
      console.log('act: isItemIn', err.message);
      return;
    }
    //(get() as unknown as any).
    //return isItemInCart;
  },

  getItemQuantity: (itemId: string) => {
    //return getItemQuantityLs(itemId);
    const items: any = (get() as unknown as any).cart.items;
    if (items) {
      const item = items.find((x, i) => {
        if (x.product.id === itemId) {
          return true;
        }
      })
      if (item) return item.quantity;
    }
    return 0;
  },

  storeLsToDb: async () => {
    const authUser = getAuthUserLs();

    try {
      const items = readLs('items');
      // check: if auth user and localstorage has items
      if (authUser && items) {
        console.log('save ls items to db');
        const result = await api.storeLsToDb(authUser.id, items);

        if (result) {
          (get() as unknown as any).refreshState();
          deleteLs('items');
        }
        console.log('act: storeLsToDb: ', result)
      }
    } catch(err: any) {
      console.log('act: storeLsToDb: failed', err.message);
    }

  },

  toggleCartActionLoad: 
    () => set((s: any) => ({...s, cartActionLoad: !s.cartActionLoad})),
  /* toogleCartHasItem: 
    () => set((s: any) => ({...s, cartHasItem: !s.cartHasItem})), */
  cartLoadOn: () => set((s: any) => ({...s, cartLoad: true})),
  cartLoadOff: () => set((s: any) => ({...s, cartLoad: false})),
}))

// subscribe
useCartStore.subscribe((state) => console.log('cart-store-updated:', state));

// call action
(useCartStore as unknown as any).getState().storeLsToDb();
(useCartStore as unknown as any).getState().refreshState('init');

// actions

// get cart
export const useSelCart = () => 
  useCartStore((s: any) => s.cart);

// add to cart
export const useDisAddToCart = () => 
  useCartStore((state: any) => state.addToCart);

// get cart loading
export const useSelCartLoad = () => 
 useCartStore((s: any) => s.cartLoad);

// increment
export const useDisIncItem = () => 
  useCartStore((s: any) => s.incItem);

// decrement
export const useDisDecItem = () => 
  useCartStore((s: any) => s.decItem);

// delete
export const useDisDelItem = () =>
  useCartStore((s: any) => s.deleteItem);

// get item quantity
export const useDisGetItemQuantity = () => 
  useCartStore((s: any) => s.getItemQuantity)

// isItem in cart
export const useDisIsItemIn = () => 
  useCartStore((s: any) => s.isItemIn);

// state: cartHasItem
export const useSelCartHasItem = () => 
  useCartStore((s: any) => s.cartHasItem);

// state quantity
export const useSelItemQuantity = (itemId: string) => {
  const items = useCartStore((s: any) => s.cart.items)
  let item = [];
  if (items) {
    item = items.filter((x: any) => {
      if (x.product.id === itemId) return true;
    })
  }

  console.log('loveeeeeeeeeeee', item)
  if (item && item.length) {
    const quantity = item[0].quantity;
    return quantity;
  }
  return 0;
}

// state: cart.items.item.product
export const useSelItemExist = (itemId: string) => {
  const items = useCartStore((s: any) => s.cart.items)
  let item = [];
  if (items) {
    item = items.filter((x: any) => {
      if (x.product.id === itemId) return true;
    })
  }

  console.log('loveeeeeeeeeeee', item)
  if (item && item.length) {
    return item[0];
  }
  return null;
}

// total items count
export const useSelCartItemsCount = () => 
  useCartStore((s: any) => s.cart.itemsCount);
