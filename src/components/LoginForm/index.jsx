import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { setLogin } from '../../helpers/setLocalStorage';

import styles from './index.module.css';

const RIGHT_LOGIN_DATA = {
  username: 'admin',
  password: '123456',
};

const INITIAL_LOGIN_DATA = {
  username: '',
  password: '',
};

export default function LoginForm() {
  const [loginData, setLoginData] = useState(INITIAL_LOGIN_DATA);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      RIGHT_LOGIN_DATA.username === loginData.username
      && RIGHT_LOGIN_DATA.password === loginData.password
    ) {
      setLogin();
      navigate('/');
    } else {
      alert('Имя пользователя или пароль введены не верно');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <input
        value={loginData.username}
        onChange={handleInputChange}
        className={styles.formInp}
        name="username"
        type="text"
        placeholder="username"
        required
      />
      <input
        value={loginData.password}
        onChange={handleInputChange}
        className={styles.formInp}
        name="password"
        type="text"
        placeholder="password"
        required
      />
      <button type="submit" className={styles.formBtn}>Sign in</button>
    </form>
  );
}
