import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/cryptoApi';
{/* Desde donde se obtienen los datos de Redux y la Api*/}

export default configureStore({
reducer: {
[cryptoApi.reducerPath]: cryptoApi.reducer,
},
});