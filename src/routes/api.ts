
import fake from '@/config/faker';
import { Cart, Product, User } from '@/types/types';
import { getSoonMinutes } from '@/utils/helpers';
import { compareLinkDate } from '@/views/auth/utils/authHelper';
import { fakerFA } from '@faker-js/faker';
import axios from 'axios';
import { getDoc } from './formatResponse';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

//const BASE = process.env.NEXT_PUBLIC_API_ENDPOINT + '/api/'
const BASE = process.env.NEXT_PUBLIC_API_ENDPOINT

const PRODUCT = BASE + 'products/';
const USER = BASE + 'users/';
const CART = BASE + 'carts/';

const api = {

  // GET: /api/pizzas
  getProducts: async (data: {
    page: number,
    limit: number,
  }) => {
    //?page=${data.page}&limit=${data.limit}
    //console.log('making a request', PRODUCT)
    return await axios.get(`${PRODUCT}`);
  },
  
  //==================================================
  
  getProduct: async (data: {
    slug: string
  }): Promise<any> => {
    const url = `${PRODUCT}?slug=${data.slug}`;
    //console.log('url', url)
    return await axios.get(url);
    //console.log('booob', resp)
    //return resp;
  },

  //==================================================

  createProduct: async (data: any) => {
    axios.post('/api/upload', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      // handle response data
    })
    .catch(error => {
      // handle error
    });
  },

  //==================================================

  signup: async (data: {
    username: string,
    email: string,
  }) => {

    // create a cart for user
    const cartPayload: Cart = {
      id: fakerFA.string.uuid(),
      items: [],
      total: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const cart = await axios.post(CART, cartPayload);
    
    if (!cart) throw new Error('create cart failed');
console.log('cart------', cart);
    const payload: User = {
      id: fakerFA.string.uuid(),
      username: data.username,
      email: data.email,
      lastLink: null,
      cart: cart.data.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    // check if user is in db    
    const user = await axios.get(USER + `?email=${data.email}`);
   
    if (user && user.data.length) {
      console.log('asdsd---', user, '-----', Object.keys(user).length);
      throw new Error('user already exist');
    }
    
    // store user in db
    const response = await axios.post(USER, payload);

    if (!response) throw new Error('create user failed');
    
    return response;
  },

  //===========================================================

  login: async (data: {
    email: string,
  }) => {

    // check if user exist
    const user = await axios.get(USER + `?email=${data.email}`);
   
    if (!user || !(user.data.length)) {
      throw new Error('user does not exist');
    }

    // add 1 minutes
    const currentDate = new Date();
    currentDate.setMinutes(currentDate.getMinutes() + 3);
    const formattedDate = currentDate.toISOString();

    console.log('**************  ', user.data[0].lastLink);
    // set lastLink

    async function updateLastLink() {
      const payload = {
        lastLink: formattedDate,
      }
      const response = await axios.patch(USER + `${user.data[0].id}` , payload);
      console.log('/loging api', response.data.lastLink);
      if (response) {
        return {
          msg: 'login success',
          err: 0,
          data: response.data.lastLink,
        };
      }
    }

    // lastLink === null
    if (!user.data[0].lastLink) {
      updateLastLink();
    } 
    // lasLink !== null && date has passed
    else if (!compareLinkDate(user.data[0].lastLink)) {
      updateLastLink();
    }
    
    console.log('end:: ', user.data[0].l)
    return {
      msg: 'wait',
      err: 0,
      data: user.data[0].lastLink,
    }
  },

  //===========================================================

  verify: async (data: {email: string}) => {
    console.log(data.email)
    const user = await axios.get(USER + `?email=${data.email}`);
    console.log('verify : ', user)
    if (user && user.data.length) {
      return user.data[0];
    }
    else {
      throw new Error('user does not exist exist');
    }
  },

  //===========================================================

  // Cart

  getCart: async (userId: string) => {
    const userRes = await axios.get(USER + `${userId}`); 
    if (!userRes) throw new Error('addToCart: user does not exist!');
    const user = getDoc(userRes);

    const cartRes = await axios.get(CART + `${user.cart}`);
    if (!cartRes) throw new Error('api.addToCart: cart does not exist')
    const cart = getDoc(cartRes);

    return cart;
  },

  isItemInDb: async (userId: string, itemId: string) => {
    let isItemIn = false;
    const userRes = await axios.get(USER + `${userId}`); 
    if (!userRes) throw new Error('addToCart: user does not exist!');
    const user = getDoc(userRes);

    const cartRes = await axios.get(CART + `${user.cart}`);
    if (!cartRes) throw new Error('api.addToCart: cart does not exist')
    const cart = getDoc(cartRes);

    const { items } = cart;
    
    if (items) {
      isItemIn = items.some((item, i) => {
        if (item.product.id === itemId) {
          return true;
        }
      });
    }

    return isItemIn;
  },

  //==================================================

  // add to cart
  addToCart: async (userId: string, product: Product) => {
    let user = await axios.get(USER + `${userId}`);

    if (!user) {
      throw new Error('addToCart: user does not exist!');
    }

    user = getDoc(user);
//console.log('my user:: ', user)
    let cart = await axios.get(CART + `${user.cart}`);

    if (!cart) throw new Error('api.addToCart: cart does not exist')

    cart = getDoc(cart);
    //console.log('my cart:: ', cart)

    const item = {
      product: product,
      quantity: 1,
    }

    cart.items.push(item);
    
    const resp = await axios.patch(CART + `${cart.id}`, cart);

    if (resp) {
      return resp
    }
  },

  //==================================================

  // increment item
  incItem: async (userId: string, product: Product) => {
    const userRes = await axios.get(USER + `${userId}`); 
    if (!userRes) throw new Error('addToCart: user does not exist!');
    const user = getDoc(userRes);

    const cartRes = await axios.get(CART + `${user.cart}`);
    if (!cartRes) throw new Error('api.addToCart: cart does not exist')
    const cart = getDoc(cartRes);

    const { items } = cart;

    if (items) {
      const itemInx = items.findIndex((x: any) => x.product.id === product.id);
      // if: there is a + button in ui -: there is also: an item in cart
      items[itemInx].quantity += 1;
    }

    const resp = await axios.patch(CART + `${cart.id}`, cart);

    if (resp) {
      return resp
    }

  },

  //==================================================

  // decrement item
  decItem: async (userId: string, product: Product) => {
    const userRes = await axios.get(USER + `${userId}`); 
    if (!userRes) throw new Error('addToCart: user does not exist!');
    const user = getDoc(userRes);

    const cartRes = await axios.get(CART + `${user.cart}`);
    if (!cartRes) throw new Error('api.addToCart: cart does not exist')
    const cart = getDoc(cartRes);

    const { items } = cart;

    const itemInx = items.findIndex((x: any) => x.product.id === product.id);
    // if: only one of these item
    if (items[itemInx].quantity === 1) {
      // remove item
      items.splice(itemInx, 1);
    } 
    else items[itemInx].quantity -= 1;
console.log('===', itemInx, items)
    const resp = await axios.patch(CART + `${cart.id}`, cart);

    if (resp) {
      return resp
    }
  },

  //==================================================

  // delete item
  deleteItem: async (userId: string, productId: string) => {
    const userRes = await axios.get(USER + `${userId}`); 
    if (!userRes) throw new Error('addToCart: user does not exist!');
    const user = getDoc(userRes);

    const cartRes = await axios.get(CART + `${user.cart}`);
    if (!cartRes) throw new Error('api.addToCart: cart does not exist')
    const cart = getDoc(cartRes);

    let { items } = cart;

    if (items) {
      items = items.filter((x: any) => x.product.id !== productId);
    }
//console.log('M...............', items);
    cart.items = items;
    const resp = await axios.patch(CART + `${cart.id}`, cart);

    if (resp) {
      return resp
    }
  },

  //==================================================
    
  // store ls to db 
  storeLsToDb: async (userId: string, items: any) => {
    const userRes = await axios.get(USER + `${userId}`); 
    if (!userRes) throw new Error('addToCart: user does not exist!');
    const user = getDoc(userRes);

    const cartRes = await axios.get(CART + `${user.cart}`);
    if (!cartRes) throw new Error('api.addToCart: cart does not exist')
    const cart = getDoc(cartRes);

    const newItems = cart.items.concat(items);
    cart.items = newItems;

    const resp = await axios.patch(CART + `${cart.id}`, cart);

    if (resp) {
      return resp
    }

  },
}

export default api;