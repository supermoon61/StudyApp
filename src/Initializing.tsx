import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  AsyncStorage
} from 'react-native'




import { goToAuth, goHome } from './navigation'

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
        <Text style={styles.welcome}>STUDY HUNT</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 24,
    padding:10,
    fontFamily: 'Nunito-Bold',
    

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 80,
    height: 80,
    
  },
})


