import { ConfigureStoreOptions, configureStore } from '@reduxjs/toolkit';
import { pokemonsApi } from '../services/pokemonApi';

export const createStore = (options?: ConfigureStoreOptions['preloadedState'] | undefined) =>
  configureStore({
    reducer: {
      [pokemonsApi.reducerPath]: pokemonsApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(pokemonsApi.middleware),
    ...options,
  });

export const appStore = createStore();

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
