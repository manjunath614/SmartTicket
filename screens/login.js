import { StatusBar } from "expo-status-bar";               //     HP  login      @#$%^&*^%$#@#$%^&*
import React, { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';

import {
  StyleSheet,
  Text,
  Alert,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation=useNavigation();
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const onPressHandle = async() =>{

     if ((reg.test(email.trim()) == true) && password.length >8) {
      navigation.navigate('SignUp');
     }  else if(reg.test(email.trim()) == false){ 
      Alert.alert('Warning!','Enter valid Email.');
    }   else if(password.length == 0 || password.length <=8){
      Alert.alert('Warning!','Password must be atleast 9 characters.');
    }
     
    }
    const gotToPost =() =>{
      navigation.navigate('LekpayLogin');
    }
    const goToRegister=()=>{
      navigation.navigate('SignUp');
    }
    return (
      <View style={styles.container}>
         <Image
        style={styles.image}
        resizeMode='cover'
        source={{uri:"data:image/png;base64,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"}}
        
      />
             <StatusBar style="auto" />
               <View style={styles.parent}>

               <View style={styles.inputView}>
                
                <Ionicons style={styles.icon} name="person-circle-outline" size={25} color="black" />
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="black"
                    onChangeText={(email) => setEmail(email)}
                    keyboardType='email-address'
                    
                /> 
        </View> 
        <View style={styles.inputView}>
                <Ionicons style={styles.icon} name="lock-closed-outline" size={25} color="black" />
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="black"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                /> 
         </View> 
        
         
        
        <TouchableOpacity onPress={gotToPost}>
          
                 <Text 
                    style={styles.forgot_Text}
                    >
                        Forgot Password?
                </Text> 
                
        </TouchableOpacity> 
   
    
       <TouchableOpacity style={styles.Btn}
                  onPress={onPressHandle}>
                     <Text style={styles.loginText}>LOGIN</Text> 
        </TouchableOpacity> 


        <TouchableOpacity onPress={goToRegister}>
                 <Text
                    style={styles.signIn_Text}
                    >
                        Sign in 
                </Text> 
        </TouchableOpacity> 

               </View>
      
               </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f5f5f5",
      alignItems: "center",
      justifyContent: "center",
    },
    parent:{
      height:400,
      width:"90%",
      backgroundColor:'white',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:25,
      borderWidth:0.5,
      
      
    },
    image: {
      marginBottom: 40,
      width:150,
      height:150,
      borderRadius:70
    },
    inputView: {
      flexDirection:'row',
      backgroundColor: "#f5f5f5",
      borderRadius: 15,
      width: "85%",
      height: 45,
      marginTop: 20,
      alignItems: "center",
      paddingLeft:5,
      alignSelf:'center',
      
    },
    TextInput: {
      height: 50,
      flex: 1,
      fontSize:18,
      textAlignVertical:'center',
      color:'black'
     // padding: 10,
    //  marginLeft: 20,
    },
    forgot_Text: {

      height: 30,
      marginTop: 30,
      color:"black",
      alignSelf:'center'
    
    },
    signIn_Text: {

        height: 30,
        marginTop: 30,
        color:"black",
        alignSelf:'center'
        
      
      },
    Btn: {
      width: 100,
      borderRadius: 12,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
      backgroundColor: "skyblue",
      
    },
    icon:{
      marginRight:5
    },
    loginText:{
        color:'black',
        fontWeight:'bold',
    },
    contain:{
        flexDirection:'row',
       
      
        
    },
    widgets:{
        marginRight:15
    }
  });