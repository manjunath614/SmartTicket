import React, { useState,useEffect } from "react";
import { View, Text, StyleSheet, Alert,Button,Image, TextInput,TouchableOpacity} from "react-native";
import Btn from "../components/Btn";
import { background, btnColor, darkPink, headColor } from "../components/Constants";
import Field from "../components/Field";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { LoginApi } from "./Api";

const LekpayLogin = () =>{
  const [mNumber,setNumber]  = useState('');
  const [password,setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation=useNavigation();
  const [loading,setLoading] = useState();
  const onPressSubmit = async()=>{
    setLoading(true);
    try{
      if(mNumber.length == 10 && password.length>=8){
        
        //alert('Success!! Redirecting to HomePage...');
        await LoginApi({
          "Mobile":mNumber,
          "Password":password
        })
        .then(res=>{console.log(res.data)
          if(res.data.message == "Wrong Phone number/Password!!"){
            alert('Wrong Phone number/Password!!');
          }
          else if(res.data.data[0].Flag == 'E'){
            navigation.navigate('AllScreens',{
              ID:res.data.data[0].AuthID,
              flag:res.data.data[0].Flag,
            });
          }
          else if(res.data.data[0].Flag == 'U') {
            alert('U are User');
          }

          else alert('User not exist.')
        })
        .catch(error=>{console.log(error)})

        
      }else if(mNumber.length != 10 || mNumber.length == 0){
        alert('Please enter valid number');
      }else if(password.length<8){
        alert('Please enter password of length more than 8.')
      }

    }catch(error){
      alert(error);
    }
    setLoading(false);
  }
  return (
    <View style={styles.body}>
        <Image
        style={styles.image}
        resizeMode='cover'
        source={require('../assets/appLogo.png')}
        
      />
       <Text style={styles.head}>Login</Text>
        <View style={styles.parent}>
        <View style={styles.container}>
        <Field width="70%"
        keyboardType='numeric'
         placeholder="Mobile Number" 
        onChangeText={(value)=>setNumber(value)}
            />
        </View>
        <View style={styles.container}>
        <Field width="57%"
        secureTextEntry={!showPassword}
        password={true}
         placeholder="Password" 
         onChangeText={(value)=>setPassword(value)}
            />
             <Ionicons.Button
      name={showPassword ? 'eye' :'eye-off'}
      onPress={() => setShowPassword(!showPassword)}
      backgroundColor={background}
      iconStyle={{color:'black'}}
    
      />
        </View>
        <Btn
              textColor="white"
              bgColor={btnColor}
              btnLabel="Submit"
              Press={onPressSubmit}
            
            />
            {loading ?  <Image  source={require('../assets/loading.gif')} /> : null}
        </View>
        
    </View>
  );
}
const styles = StyleSheet.create({
    body: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:background
    },
    parent:{
      //height:400,
      paddingVertical:50,
      width:"90%",
      backgroundColor:'white',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:25,
      borderWidth:0.5, 
    },
    container:{
      flexDirection:'row',
      borderWidth:0.5,
      alignItems:'center',
      borderRadius:8,
      marginBottom:10
    },
    head:{
      fontSize:32,
      fontWeight:"bold",
     color:headColor,
     marginBottom:50
    },
    image: {
      marginBottom: 20,
      width:100,
      height:100,
      borderRadius:70
    },
});

export default LekpayLogin;