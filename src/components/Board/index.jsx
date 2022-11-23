import React from 'react';
import { useSelector } from 'react-redux';

import { selectState } from '../../store/reducers/CardsSlice';
import Card from '../Card';
import SelectButtons from '../SelectButtons';

import styles from './index.module.css';

export default function Board() {
  const { deckCards } = useSelector(selectState);
  return (
    <div className={styles.board}>
      <Card image={deckCards[0]?.image} />
      <SelectButtons />
      <Card image={deckCards[1]?.image} />
    </div>
  );
}
