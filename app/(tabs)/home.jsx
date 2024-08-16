import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const home = () => {
const [email, setemail]=useState("")

  useEffect(()=>{
//   getLoginEmail()
  }, [])

  // const getLoginEmail = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('loginEmail');
  //     console.log(value);
  //     setemail(value);
  //     if (value !== null) {
  //       // value previously stored
  //       console.log(value);
  //       Alert.alert(value)
  //     }
  //   } catch (e) {
  //     // error reading value
  //   }
  // };

  // const getLoginDetails = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem('loginDetails');
  //     return jsonValue != null ? JSON.parse(jsonValue) : null;
  //   } catch (e) {
  //     // error reading value
  //   }
  // };

  return (
    <View  style={{margin:30}}>
      <Text >Email : {email} </Text>

    </View>
  )
}

export default home

const styles = StyleSheet.create({})