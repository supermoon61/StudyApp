import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'

export default class Initialising extends React.Component {
    async componentDidMount() {
      try {
        console.log('user: ')   
      } catch (err) {
        console.log('error: ', err)   
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
  
  
  