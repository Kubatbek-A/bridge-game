import React from 'react';
import { useNavigate } from 'react-router-dom';

import { setLogout } from '../../helpers/setLocalStorage';

import styles from './index.module.css';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    setLogout();
    navigate('/login');
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>Bridge</div>
      <button type="button" className={styles.logoutBtn} onClick={handleLogout}>
        Sign out
      </button>
    </div>
  );
}
