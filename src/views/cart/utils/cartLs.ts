import { authGuard } from "@/guards/authGaurd";
import api from "@/routes/api";
import { createLs, readLs } from "@/utils/localstorage";
import { getAuthUserLs } from "@/views/auth/utils/authHelper";

// when not auth: add item to localStorage
export function addToCartLs(product: any): void {
  let items: {id: any, quantity: number}[] | any = [];
  const item = {
    product: product,
    quantity: 1,
  }
  let itemInx = null;
  items = readLs('items');

  if (items) {
    // if: item exist in the cart
    items.some((item: any, i: number) => {
      if (item.product.id === product.id) {
        itemInx = i;
        return true;
      }
    })

  } else {
    // if: not items in ls =: set item to []
    items = [];
  }

  // if item exist in the cart: increment
  // itemInx = null or -1 or some other index (found)
  if (itemInx !== null && itemInx !== -1) 
    items[itemInx].quantity += 1;
  else 
    items.push(item);

  // store new items in localstorage
  createLs(items, 'items');
}

// increment item
export function incItemLs(product: any): void {
  // find item and increment quantity
  let items: {id: any, quantity: number}[] | any = [];

  items = readLs('items');
  if (items) {
    const itemInx = items.findIndex((x: any) => x.product.id === product.id);
    // if: there is a + button in ui -: there is also: an item in cart
    items[itemInx].quantity += 1;
  }

  createLs(items, 'items');
}

// decrement item
export function decItemLs(product: any): void {
  let items: any = [];
  let itemInx = 0;

  items = readLs('items');
  itemInx = items.findIndex((x: any) => x.product.id === product.id);

  // if: only one of these item
  if (items[itemInx].quantity === 1) {
    // remove item
    items.splice(itemInx, 1);
  } 
  else items[itemInx].quantity -= 1;

  createLs(items, 'items');
}

// delete item
export function deleteItemLs(product: any): void {
  let items: any = [];
  let deleted = {};
  
  items = readLs('items');
  if (items) {
    items = items.filter((x: any) => x.product.id !== product.id);
    console.log('deleteeeeee', items, deleted)
    createLs(items, 'items');
  }
}

// get cart from localstorage or db
export async function getCartFromDb(): any {
  let items: any = [];
  const authUser = getAuthUserLs();

  if (authGuard()) {
    // get cart from db
    const dbCart = await api.getCart(authUser.id);
    console.log('db cart: :', dbCart)
    return dbToCart(dbCart.items);
  }
  else {

    items = readLs('items');

    return dbToCart(items);

  }
  return {};
}

// create cart from db or localstorage to refresh state
function dbToCart(items: any) {
  let cart: any = {};

  if (items) {      
    // calc price of each item * quantity
    items = items.map((item: any) => {
      const obj = {
        product: item.product,
        quantity: item.quantity,
        subTotal: item.product.price * item.quantity,
      }
      return obj;
    })

    // cart object
    cart = {
      items: items,
      // accumulator, currentItem
      total: items.reduce((acc: number, item: any) => {
        //return acc + (item.product.price * item.quantity);
        return acc + item.subTotal;
      }, 0),
      itemsCount: items.reduce((acc: number, item: any) => {
        return acc + item.quantity;
      }, 0)
    }

    return cart;
  } 
  return {};
}

// is item in localstorage:
export function isItemInCartLs(itemId: string): boolean {
  let items: any = [];
  let isItemIn: boolean = false;

  items = readLs('items');
  if (items) {
    isItemIn = items.some((item, i) => {
      console.log(item.product.id , itemId );
      if (item.product.id === itemId) {
        return true;
      }
    });
    console.log('looppppppppp........', items, isItemIn);
    return isItemIn;
  } 
  else {
    return isItemIn;
  }
}

export function getItemQuantityLs(itemId: string): number {
  const items: any = readLs('items');
  if (items) {
    const item = items.find((x, i) => {
      if (x.product.id === itemId) {
        return true;
      }
    })
    if (item) return item.quantity;
  }
  return 0;
}