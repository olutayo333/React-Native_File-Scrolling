import { Stack } from 'expo-router'
import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

const RootLayout = ()=>{
    return(
        <Stack screenOptions={{}}>
            <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
            <Stack.Screen name="index" options={{headerTitle:"Login", headerRight:()=>(
                <>
                    <Ionicons name="checkmark-circle" size={32} color="green" />
                    <Ionicons name="checkmark-circle" size={32} color="green" />
                    <Ionicons name="battery-full-outline"></Ionicons>
                </>
            )}}/>
            
            <Stack.Screen name="fileListExample" options={{headerTitle:"", headerRight:()=>(
                <>
                    {/* <Button color='red' title='Right' />  */}
                    <Ionicons name="checkmark-circle" size={32} color="green" />
      
                </>
            ),
            // headerLeft:()=>(
            //     <>
            //         <View style={{padding: 30, marginHorizontal: 50}}>
            //             <Button style={{}} color='blue' title='left ' />
            //         </View>

            //     </>
            // ),
            }} />
            
            
            {/* <Stack.Screen name='details/[id]' /> */}
            
        </Stack>
    )
}

export default RootLayout

// const styles = StyleSheet.create({})