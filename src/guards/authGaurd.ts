
// if: there is a auth user in localStorage

import { readLs } from "@/utils/localstorage";

// return: true
export function authGuard(): boolean {
  const user = readLs('user');
  //console.log()
  if (user) return true;
  return false;
}