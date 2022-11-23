/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import checkResult from '../../helpers/checkResult';
import { fetchDeck, fetchDeckCards } from './ActionCreators';

const initialState = {
  balance: 50000,
  isAuthenticated: false,
  deckId: '',
  deckCards: [],
  isLoading: false,
  selectedSide: '',
  result: '',
  isRoundFinished: false,
};

const BID_COUNT = 100;

export const getDeck = createAsyncThunk('cards/fetchDeck', async () => {
  const {
    data: { deck_id: deckId },
  } = await fetchDeck();
  return deckId;
});

export const getDeckCards = createAsyncThunk(
  'cards/fetchDeckCards',
  async (deckId) => {
    const {
      data: { cards },
    } = await fetchDeckCards(deckId);
    return cards;
  },
);

export const CardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    selectSide: (state, action) => {
      state.selectedSide = action.payload;
    },
    playAgain: (state) => {
      state.isRoundFinished = false;
      state.selectedSide = '';
      state.result = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDeck.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDeck.fulfilled, (state, action) => {
        state.deckId = action.payload;
        state.isLoading = false;
      })
      .addCase(getDeckCards.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDeckCards.fulfilled, (state, action) => {
        state.deckCards = action.payload;
        state.isLoading = false;
        state.isRoundFinished = true;
        state.result = checkResult(
          state.deckCards[0],
          state.deckCards[1],
          state.selectedSide,
        );
        state.balance += state.result === 'win' ? BID_COUNT : 0;
        state.balance -= state.result === 'lose' ? BID_COUNT : 0;
      });
  },
});

export const {
  selectSide, playAgain,
} = CardsSlice.actions;

export const selectBalance = (state) => state.cards.balance;
export const selectState = (state) => state.cards;

export default CardsSlice.reducer;
