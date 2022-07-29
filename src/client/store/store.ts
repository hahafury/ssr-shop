import { configureStore } from '@reduxjs/toolkit';
import { Context, createWrapper } from 'next-redux-wrapper';
import { reducer } from './reducers';

const makeStore = (context: Context) =>
  configureStore({
    reducer: reducer,
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
