import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Tabs } from 'expo-router'

export class tabLayout extends Component {
  render() {
    return (
        <Tabs>
            <Tabs.Screen name='home' options={{headerShown:true,}} />
            <Stack.Screen name="home" options={{headerTitle:""}}/>
        </Tabs>
        
       
    )
  }
}

export default tabLayout