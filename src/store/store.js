import { configureStore } from '@reduxjs/toolkit';

import cardsReducer from './reducers/CardsSlice';

const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

export default store;
