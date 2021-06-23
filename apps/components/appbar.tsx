import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
const notifications = require('../../assets/images/Groupnoti.png');
const profileImage = require('../../assets/images/profile.png');

const Appbar = () => {
  return (
    <View style={styles.appbar}>
      <View>
        <Text style={styles.AppbarTitle}> Hi, Mohammed Fayez</Text>
        <Text style={styles.appbarLocation}> Ernakulam, Kerala</Text>
      </View>
      <View style={styles.appbarIconRow}>
        <Image style={styles.Appbaricons} source={notifications} />
        <Image style={styles.Appbaricons} source={profileImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appbar: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  AppbarTitle: {
    fontSize: 11,
    color: '#C4C4C4',
    fontWeight: '100',
  },
  appbarLocation: {
    fontSize: 16,
  },
  Appbaricons: {
    height: 24,
    width: 24,
    margin: 5,
  },
  appbarIconRow: {
    flexDirection: 'row',
    marginTop: 5,
  },
});

export default Appbar;
