import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect } from "react";
import { View, Text, StyleSheet, Alert,Button,Image, TextInput,TouchableOpacity} from "react-native";

import Field from "../components/Field";
import {darkGreen} from "../components/Constants";
import Btn from "../components/Btn";



const Register=() =>{
    const [name,setName] = useState('');
    
    return (
      
        <View style={{alignItems: 'center', justifyContent:"center",width: 420}}>
          <Text
            style={{
              color: 'white',
              fontSize: 64,
              fontWeight: 'bold',
              marginTop: 20,
            }}>
            Register
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Create a new account
          </Text>
          <View 
            style={{
           
              backgroundColor: 'white',
              height: 600,
              width: 360,
              borderRadius: 50,
              paddingTop: 50,
              alignItems: 'center',
            }}>
            <Field placeholder="Name" onChangeText={(value)=>setName(value)}/>
        
            <Field
            
              placeholder="Email / Username"
              keyboardType={'email-address'}

            />
            <Field placeholder="Contact Number" keyboardType={'number'} />
            <Field placeholder="Password" secureTextEntry={true} />
            <Field placeholder="Confirm Password" secureTextEntry={true} />
           
  
            
            <Btn
              textColor="white"
              bgColor={darkGreen}
              btnLabel="Signup"
              Press={() => {
                alert('Accoutn created');
                props.navigation.navigate('Login');
              }}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Already have an account ?{' '}
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Login')}>
                <Text
                  style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
     
    );
  };
  
  export default Register;