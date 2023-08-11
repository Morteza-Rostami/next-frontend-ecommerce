import { useRouter } from "next/router"

export const Redirect = (path: string) => {
  const router = useRouter();
  router.push(path);
  return (<></>)
}
