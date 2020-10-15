import React from 'react';
import { useSelector } from 'react-redux';

import AppLayout from '../components/Applayout';
import LoginForm from '../components/LoginForm';

const Home = () => {
    const { isLoggedIn } = useSelector(state => state.user);

    return (
      <>
        {isLoggedIn ? <AppLayout /> : <LoginForm />}
      </>
    );
}

export default Home;