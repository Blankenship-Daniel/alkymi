import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { tableApi } from './services/table'

export const store = configureStore({
  reducer: {
    [tableApi.reducerPath]: tableApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tableApi.middleware),
})

setupListeners(store.dispatch)