import { createContext, useState } from 'react';
export let logged: any = false;

export const setLogged = (params: any) => (logged = params);

export const UserIsLoggedContext = createContext({ logged, setLogged });
