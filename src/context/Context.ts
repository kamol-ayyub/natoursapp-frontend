import { createContext } from 'react';
import { GlobalContext } from '@/types/types';

export let logged: boolean = false;
export const setLogged = (params: boolean) => (logged = params);

export const UserIsLoggedContext = createContext<GlobalContext>({
  logged,
  setLogged,
});
