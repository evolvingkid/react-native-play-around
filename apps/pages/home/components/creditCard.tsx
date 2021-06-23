import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
const creditCard = require('../../../../assets/images/credictcardbg.png');

const Creditcard = () => {
  return (
    <View style={style.creditCard}>
      <ImageBackground source={creditCard} style={style.image}>
        <View style={style.creditCardInsider}>
          <View>
            <Text style={style.cardTitle}> Balance </Text>
            <Text style={style.cardDesc}> Today, 08 Sept 2019 </Text>
          </View>
          <View style={style.spacer} />
          <View>
            <Text style={style.cardMoney}> $6,420.00 </Text>
            <Text style={style.cardDesc}> up by 2% from last month </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  creditCard: {
    margin: 20,
    backgroundColor: '#031A6E',
    borderRadius: 8,
  },
  creditCardInsider: {
    paddingTop: 20,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  image: {
    resizeMode: 'stretch',
    justifyContent: 'center',
  },
  cardTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800',
  },
  cardDesc: {
    color: 'white',
    fontSize: 11,
  },
  spacer: {
    height: 50,
  },
  cardMoney: {
    fontSize: 24,
    color: 'white',
    fontWeight: '800',
  },
});

export default Creditcard;
