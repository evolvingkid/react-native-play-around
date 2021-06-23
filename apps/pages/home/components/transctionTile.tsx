import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const TransactionText: React.FC<{
  items: { id: number; name: string; type: string; amount: number; img: any };
}> = ({ items }) => {
  return (
    <View style={style.tile}>
      <View style={style.outerTile}>
        <View style={style.innerTile}>
          <Image source={items.img} style={style.icon} />
          <View style={style.textSection}>
            <Text style={style.titleText}> {items.name} </Text>
            <Text style={style.subText}> {items.type} </Text>
          </View>
        </View>
        <Text style={style.amountText}> - $ {items.amount} </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  icon: {
    height: 38,
    width: 38,
    backgroundColor: '#CFD0D3',
    padding: 20,
    borderRadius: 6,
  },
  tile: {
    padding: 10,
  },
  innerTile: {
    flexDirection: 'row',
  },
  outerTile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textSection: {
    marginLeft: 5,
  },
  titleText: {
    fontWeight: 'bold',
  },
  subText: {
    fontWeight: '100',
  },
  amountText: {
    color: '#34AA44',
    fontSize: 14,
    fontWeight: '700',
  },
});

export default TransactionText;
