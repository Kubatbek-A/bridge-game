import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from '../../components/Navbar';
import Balance from '../../components/Balance';
import WhoWin from '../../components/WhoWin';
import Board from '../../components/Board';
import { getDeck } from '../../store/reducers/CardsSlice';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDeck());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Balance />
      <WhoWin />
      <Board />
    </div>
  );
}

export default Home;
