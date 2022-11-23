import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getDeck,
  getDeckCards,
  selectSide,
  selectState,
  playAgain,
} from '../../store/reducers/CardsSlice';

import styles from './index.module.css';

export default function SelectButtons() {
  const dispatch = useDispatch();
  const { deckId, isLoading, isRoundFinished } = useSelector(selectState);

  const handleSelectSide = (side) => {
    dispatch(selectSide(side));
    dispatch(getDeckCards(deckId));
  };

  const handlePlayAgain = () => {
    dispatch(getDeck());
    dispatch(playAgain());
  };

  return (
    // eslint-disable-next-line no-nested-ternary
    isRoundFinished ? (
      <button onClick={handlePlayAgain} className={styles.btn} type="button">
        Сыграть еще
      </button>
    ) : isLoading ? (
      <span>LOADING</span>
    ) : (
      <div className={styles.btnsWrapper}>
        <button
          onClick={() => handleSelectSide('left')}
          className={styles.btn}
          type="button"
        >
          Слева
        </button>
        <button
          onClick={() => handleSelectSide('right')}
          className={styles.btn}
          type="button"
        >
          Справа
        </button>
      </div>
    )
  );
}
