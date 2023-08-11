import api from "@/routes/api";
import { getAuthUserLs } from "@/views/auth/utils/authHelper";

// is in cart
/* export const isItemInCartDb = async (itemId: string) => {
  const authUser = getAuthUserLs();
  const dbCart = await api.getCart(authUser.id);
  let isItemIn = false;

  if (dbCart) {
    const {items} = dbCart;
    
    isItemIn = items.some((item, i) => {
      if (item.product.id === itemId) {
        return true;
      }
    });

    return isItemIn;
  }

  return isItemIn;
} */