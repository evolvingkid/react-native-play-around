import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import TransactionText from './transctionTile';

const TransactionList = () => {
  const transcationData: Array<{
    id: number;
    name: string;
    type: string;
    amount: number;
    img: any;
  }> = [
    {
      id: 1,
      name: 'Dropbox Plan',
      type: 'Subscription',
      amount: 144.0,
      img: require('../../../../assets/images/_ionicons_svg_logo-dropbox.png'),
    },
    {
      id: 2,
      name: 'Spotify Subscrtion',
      type: 'Subscription',
      amount: 24.0,
      img: require('../../../../assets/images/_ionicons_svg_logo-dropbox.png'),
    },
  ];

  const renderItem = (data: {
    index: number;
    item: { id: number; name: string; type: string; amount: number; img: any };
  }) => {
    const items: {
      id: number;
      name: string;
      type: string;
      amount: number;
      img: any;
    } = data.item;
    return <TransactionText items={items} />;
  };

  return (
    <View style={style.tile}>
      <View style={style.transactionDetailsCard}>
        <Text style={style.tileTile}> Recent Transactions </Text>
        <Text style={style.seeAll}> See all </Text>
      </View>

      <View style={style.transactionListContainer}>
        <FlatList data={transcationData} renderItem={renderItem} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  transactionDetailsCard: {
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seeAll: {
    color: '#031A6E',
    fontWeight: 'bold',
  },
  tileTile: {
    fontWeight: 'bold',
  },
  tile: {
    backgroundColor: '#F9FAFC',
  },
  transactionListContainer: {
    backgroundColor: 'white',
    marginHorizontal: 24,
    marginTop: 10,
    borderRadius: 8,
  },
});

export default TransactionList;
