import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native'

import AsyncStorage from "@react-native-async-storage/async-storage";


import { goToAuth, goHome, goToSwiper } from './navigation'

import { USER_KEY } from './config'

export default class Initialising extends React.Component {
  async componentDidMount() {
    try {
      const user = await AsyncStorage.getItem(USER_KEY)
      console.log('user: ', user)
      var delayInMilliseconds = 3000; //1 second

setTimeout(function() {
  //your code to be executed after 1 second
   if (user) {
        goHome()
      } else {
        goToAuth()
      }
}, delayInMilliseconds);
     
    } catch (err) {
      console.log('error: ', err)
      goToAuth()
    }
  }

  render() {
    return (
      <View style={styles.container}>
       <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
      />
      <View style={styles.title}>
      <Text style={styles.blackText}>STUDY</Text>
        <Text style={styles.greenText}> HUNT</Text>
      </View>
       
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    padding:10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100,
    
  },
  blackText:{
    color: '#000000',
    fontSize: 24,
    fontFamily: 'Nunito-Black',
 
  },
  greenText:{
    color: '#08bd80',
    fontSize: 24,
    fontFamily: 'Nunito-Black',

  }
})


