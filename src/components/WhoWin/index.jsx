import React from 'react';
import { useSelector } from 'react-redux';

import { selectState } from '../../store/reducers/CardsSlice';

import styles from './index.module.css';

export default function WhoWin() {
  const { isLoading, result, isRoundFinished } = useSelector(selectState);
  let text = 'Кто выиграет?';
  if (result === 'win') {
    text = 'Вы выиграли!';
  } else if (result === 'lose') {
    text = 'Вы проиграли :(';
  } else if (result === 'draw') {
    text = 'Ничья!';
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{isLoading ? 'LOADING' : text}</h2>
      {!isRoundFinished && (
        <p className={styles.desc}>Сыграй в игру и испытай удачу</p>
      )}
    </div>
  );
}
