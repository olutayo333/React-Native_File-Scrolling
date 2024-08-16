import { View, Text, TextInput, StyleSheet,TouchableOpacity, Platform, StatusBar, ScrollView, KeyboardAvoidingView, Alert,
        
 } from 'react-native'
import React, { useState } from 'react'
import  axios  from 'axios';
import {router} from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage';


const login = () => {
   let loginURL="https://nodejs-lernyappeccommerceserver.onrender.com/user/signin";
    const [email, setemail]=useState(""); 
    const[password, setpassword]=useState("")
    
    //SAVING STRING VALUE TO ASYNC STORAGE
    const loginEmail = async() => {
        try {
          await AsyncStorage.setItem('login_email', email)
        }
        catch(error){
          console.log('setitem didnt work')
        }
      }

      //SAVING OBJECT VALUE TO ASYNC STORAGE
    const loginDetails = async ()=>{
        let obj = {email, password}
        try{
            const jsonValue = JSON.stringify(obj);
            await AsyncStorage.setItem('login_details', jsonValue);
        }
        catch(e){console.log(error);}
    }

    const userLogin = ()=>{
        let obj ={email, password}
        console.log(obj); 
        axios.post(loginURL, obj)
        .then(response=>{
             if(response.data.status){
                loginEmail(); loginDetails();
                Alert.alert('Login successful')
                router.push('fileListExample')
                //router.push('home') 
            }
             else{
                 Alert.alert(response.data.message)
             }
        })
        .catch(error=>{
            console.log(error);
        })
    }

  return (
    <KeyboardAvoidingView > 
        <View >
        <StatusBar backgroundColor={"red"} barStyle={Platform.OS === "android" ? "light-content" : "dark-content"} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{fontSize:25}}>Login</Text>
                <TextInput placeholder='Email' onChangeText={(e) => setemail(e)} style={styles.inputStyle} keyboardType='email-address' placeholderTextColor={"#202425"} />
                <TextInput placeholder='Password' onChangeText={(e) => setpassword(e)} style={styles.inputStyle} secureTextEntry={true} placeholderTextColor={"#202425"} />
                <TouchableOpacity onPress={userLogin} style={{ backgroundColor: 'red', borderRadius: 5, padding: 10, marginVertical: 5 }}>
                    <Text style={{ color: 'white', textAlign: 'center', fontWeight: '500' }} > Sign in </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    </KeyboardAvoidingView>
)
}
const styles = StyleSheet.create({
    
    inputStyle: {
        color: 'black', borderRadius: 5, alignItems: 'center',
        borderWidth: 1, padding: 10, marginVertical: 5, borderColor: 'black',
      },
})
export default login