import { createContext, useContext } from 'react';

export const RouteContext = createContext(globalThis.routeData);
export function useRouteData<T = any>(): T {
  return useContext(RouteContext);
}