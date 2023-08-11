import getConfig from "next/config";

const {publicRuntimeConfig} = getConfig();

export const API = 
  publicRuntimeConfig.PRODUCTION
  ? 'https://morteza.com'
  : process.env.NEXT_PUBLIC_API_ENDPOINT;

export const APP_NAME = publicRuntimeConfig.APP_NAME;
