import React from 'react';
import { useSelector } from 'react-redux';

import { selectBalance } from '../../store/reducers/CardsSlice';

import styles from './index.module.css';

export default function Balance() {
  const balance = useSelector(selectBalance);

  return (
    <div className={styles.balance}>
      Balance:
      {balance}
    </div>
  );
}
