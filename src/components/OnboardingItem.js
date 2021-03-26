import React, {Component} from 'react';

import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';

export default OnboardingItem = ({item}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <Image
        source={item.image}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />
      <View style={{flex: 0.3}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '400',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Nunito-Black',
  },
  description: {
    fontSize: 16,
    color: '#818181',
    marginBottom: 10,
    textAlign: 'center',
    paddingHorizontal: 64,
    fontFamily: 'Nunito-Regular',
  },
});
