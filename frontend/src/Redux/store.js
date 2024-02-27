import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productsApi,OneproductApi } from './productsApi'
import cartReducer from './cartSlice'


export const store = configureStore({
  reducer: {
    //  "carttt" ======>  useSelector
    carttt: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [OneproductApi.reducerPath]: OneproductApi.reducer
  },
 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware).concat(OneproductApi.middleware),
})

setupListeners(store.dispatch)