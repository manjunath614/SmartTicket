import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, StyleSheet, Alert,Button,Image, TextInput } from "react-native";
import { background, btnColor, darkPink, headColor } from "../components/Constants";
import Field from "../components/Field";
import Btn from "../components/Btn";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { searchAxiosApi } from "./Api";

const SignUp = () =>{
    const navigation=useNavigation();
    const [mNumber,setNumber]  = useState('');
    const [loading,setLoading] = useState();
    const [selectedDate, setSelectedDate] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [dob,setDob] = useState('');
    var date = new Date();
    const [year,setYear] = useState('');
    const [month,setMonth] = useState('');


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDob(date);     // complete dob of user
   // console.log(dob);
    setSelectedDate(date.getDate());   // only date of dob
    setYear(date.getFullYear());
    setMonth(date.getMonth()+1);
    
   // console.log(selectedDate,year,month);
    hideDatePicker();
  };
  

  const onPressSearch = async () =>{
    setLoading(true);
    await searchAxiosApi({
        "Mobile":mNumber,
        "Dob":(year.toString()+'-'+month.toString() + '-' + selectedDate.toString())
    })
    .then(res=>{
      console.log('sign s',res.data[0]);
    //  console.log('sign status',res.data[0].Status);

    // if(res.data.message == "Employee Not Found"){
    //   alert('Employee not found!')
    // }  
                                                          if(res.data != undefined){if(res.data[0]?.Flag == 'E')
                                                          {
                                                            alert('OTP sent.')
                                                            console.log('Id of employee',res.data[0].EmpId,res.data[0].Flag);  
                                                            navigation.navigate('Otp',{
                                                              eId:res.data[0].EmpId,
                                                              flag:(res.data[0].Flag)
                                                            }
                                                            );
                                                          }}
    // else if(res.data.message == "User Not Found"){
    //   console.log('esrdtfgyuhjk')
    //   alert('lodu')

    // }
                                                                 if(res.data[0] != undefined){ if(res.data[0].Status=='U'){
                                                                          alert('Already exist.')  
                                                                          console.log('id of user',res.data[0].UserId);
                                                                          navigation.navigate('LekpayLogin',{
                                                                            eId:res.data[0].UserId
                                                                          }
                                                                          );
                                                                        }}
     else if(res.data.message == 'user created' ){
      console.log('created user id',res.data.data.id)
      navigation.navigate('Otp',{eId:(res.data.data.id),flag:(res.data.data.flag)});
    }
    
    })
    
    .catch(error=>{console.log(error)})
    setLoading(false);
 }


    const onPressSubmit = () =>{
      //console.log(dob);
      try{
        if(mNumber.length == 10 && selectedDate != '' ) {
          //alert('Setting up your account ...');
          onPressSearch();
          // navigation.navigate('Otp');
         }else if(mNumber.length != 10 || mNumber.length == 0){
           Alert.alert('Warning','Please enter a valid Phone Number.');
           }else if(selectedDate == ''){
             Alert.alert('Warning','Please enter your DOB.');
           }
      }catch(error){
        Alert.alert(error);
      }
    }




    return(
     
        <View style={styles.body}>
             <Image
        style={styles.image}
        resizeMode='cover'
        source={require('../assets/appLogo.png')}
        
      />
          <Text style={styles.head}>Register</Text>
          <View style={styles.parent}>
         <View style={styles.container1}>
         <Field width='70%' placeholder="Mobile Number" keyboardType="numeric" onChangeText={(value)=>setNumber(value)}/>
         </View>
           
         
          
            <DateTimePickerModal
             style={styles.datePickerStyle}
              isVisible={isDatePickerVisible}
              mode="date"
              maximumDate={date}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              
            />
            <View style={styles.container}>
                   <View style={styles.container1}>
                   <Field 
                   
                value=  {selectedDate != '' ? (selectedDate.toString() +'/'+ month.toString() + '/' + year.toString()):""}
                placeholder="DOB"
              width="57%"
              onChangeText={(value)=>setDob(value)}
                />
                   
                <Ionicons.Button
                    name="calendar"
                    color='black'
                    onPress={showDatePicker}
                    backgroundColor={background}
                  
                    />
                    </View>

            </View>

          <Btn
              textColor="white"
              bgColor={btnColor}
              btnLabel="Signup"
              Press={onPressSubmit}
              // Press={() => {
              //   onPressSubmit
              //  // props.navigation.navigate('Login');
              // }}
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
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
  date:{
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 5
  },
  container:{
    flexDirection:'row',
    
    alignItems:'center',
    
  },
  container1:{
    flexDirection:'row',
    borderWidth:0.5,
    alignItems:'center',
    borderRadius:8,
    justifyContent:'space-between',
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

export default SignUp;