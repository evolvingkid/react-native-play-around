import Appbar from '../../components/appbar';
import React from 'react';
import { View } from 'react-native';
import Creditcard from './components/creditCard';
import TransactionList from './components/transactionList';

const HomePage = () => {
  return (
    <View>
      <Appbar />
      <Creditcard />
      <TransactionList />
    </View>
  );
};

export default HomePage;
