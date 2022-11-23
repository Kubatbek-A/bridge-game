import React from 'react';

import cardBg from '../../assets/images/card-bg.png';

import styles from './index.module.css';

// eslint-disable-next-line react/prop-types
export default function Card({ image }) {
  return (
    <div className={styles.card}>
      <img src={image || cardBg} alt="card" />
    </div>
  );
}
