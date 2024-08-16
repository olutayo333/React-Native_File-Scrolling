import { View, Text, StyleSheet, Platform, StatusBar, Alert, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import  axios  from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {router} from 'expo-router'

const fileListExample = () => {
    let loginURL="https://nodejs-lernyappeccommerceserver.onrender.com/user/signin";
    let productsURL= "https://nodejs-lernyappeccommerceserver.onrender.com/user/allproducts";
        
    let productArray =[]; let token =""; const [productdata, setproductdata]=useState([])
    const [email, setemail]=useState(""); const[loginDetails, setloginDetails]=useState([])

    //READING STRING VALUE FROM ASYNCSTORAGE
    const getData = () => {
      try {
        AsyncStorage.getItem('login_email') 
        .then((value)=>{
          if(value!=null){
            setemail(value); 
            //console.log(value);
             console.log(email);
          }
          else{
            setemail("")
          }
        })
      }catch(error){
        console.log(error)
      }
    }

  //READING OBJECT VALUE FROM ASYNCSTORAGE
    const getLoginDetails = () =>{
      AsyncStorage.getItem('login_details')
      .then((value)=>{
        if (value!=null){
          //console.log(value); console.log(JSON.parse(value));
          setloginDetails(JSON.parse(value));
        }
        else{
          setloginDetails("")
        }
      })
    }

    useEffect(()=>{
      getData(); getLoginDetails();
      console.log(email);
        axios.get(productsURL, {headers: {"Content-Type":"application/json", "Accept": "application/json"}})
        .then((response)=>{
            setproductdata(response.data.result)
                     
        })
     },[])

     const logout = ()=>{
      AsyncStorage.removeItem('login_details');
      AsyncStorage.removeItem('login_email');
      getData(); getLoginDetails();
      router.push('login')
     }

    // const getdashboard = ()=>{
    //     axios.get(this.dashboardURL,{ headers: { "Authorization": `Bearer ${token}`,  "Content-Type": "application/json", "Accept": "application/json" } })
    //         .then((response)=>{
    //             if(!response.data.status){
    //                 alert("Login expired")
    //                 router.push('/login')
    //             }
    //             else{
    //                 Alert.alert("Yoc can now go to dashboard")
    //                     // name = response.data.user.name;
    //                     // phonenumber=response.data.user.phonenumber;  
    //                     // // getProduct();
    //                     // console.log(name);
    //                 }
    //         })
    // }
    
  return (
    <View style={styles.container}>
        <View>
            <Text>ECCOMERCE  Email : {email}  {loginDetails.password} {loginDetails.email} </Text>
            <FlatList 
            
                data={productdata}
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                renderItem={({item})=>(
                  <View>
                    {/* <Text>{item.email}</Text> */}
                    <Text>{item.productName}</Text>
                    <Text>{item.productCategory}</Text>
                    <Text>{item.productPrice}</Text>
                    <Image source={{uri:`${item.productImage}`}} style={{width:150, height:150}} />
                  </View>
                )}
                keyExtractor={(item)=>item._id}
            />
        </View>
      <Text>fileListExample</Text>
      <TouchableOpacity onPress={logout} style={{ backgroundColor: 'red', borderRadius: 5, padding: 10, marginVertical: 5 }}>
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: '500' }} > Logout </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? StatusBar.height : 0,
        flex: 1,
        //alignItems: "center",
        padding: 10,
        paddingHorizontal:20,
        justifyContent:'center',
      },
})

export default fileListExample