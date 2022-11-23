import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginForm from '../../components/LoginForm';
import { isLoggedIn } from '../../helpers/setLocalStorage';

import styles from './index.module.css';

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn()) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className={styles.login}>
      <h2>Sign in to your account</h2>
      <LoginForm />
    </div>
  );
}

export default Login;
