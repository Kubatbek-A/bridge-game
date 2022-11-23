import axios from 'axios';

const API_URL = 'https://deckofcardsapi.com/api';

export async function fetchDeck() {
  return axios.get(`${API_URL}/deck/new/shuffle/`);
}

export async function fetchDeckCards(deckId) {
  return axios.get(
    `${API_URL}/deck/${deckId}/draw/?count=2`,
  );
}
