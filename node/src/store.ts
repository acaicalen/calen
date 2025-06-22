import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
  },
});

// RootState型をエクスポート
export type RootState = ReturnType<typeof store.getState>;
// AppDispatch型をエクスポート
export type AppDispatch = typeof store.dispatch;
export default store;