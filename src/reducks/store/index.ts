import { configureStore } from '@reduxjs/toolkit';
import { counter } from '../counters/slices';

export const store = configureStore({
  reducer: {
    counter: counter
  },
});

export type RootState = ReturnType<typeof store.getState>;