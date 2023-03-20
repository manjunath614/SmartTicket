
// App.js
//import "react-native-gesture-handler";

import React, { useState } from "react";
import { View, Text, StyleSheet, Alert,Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./screens/signUp";
import Login from "./screens/login";
import Post from "./screens/post";
import Register from "./screens/register";
import LekpayLogin from "./screens/lekpayLogin";
import Otp from "./screens/otp";
import SetPassword from "./screens/setPassword";

import LekpayProfile from "./screens/lekpayProfile";

import AllScreens from "./screens/AllScreen";
import CheckTickets from "./screens/CheckTickets";
import { darkPink } from "./components/Constants";
import IssueTickets from "./screens/IssueTickets";
import TicketScreen from "./screens/TicketScreen";
import CashHandler from "./screens/CashHandler";
import MapAssets from "./screens/MapAssets";
import MapAssetsChecker from "./screensChecker/MapAssetsChecker";
import ProfileChecker from "./screensChecker/ProfileChecker";
import AssetTicketReport from "./screensChecker/AssetTicketReport";
import ValidateTicketChecker from "./screensChecker/ValidateTicketChecker";
import ChangePasswordConductor from "./screens/ChangePasswordConductor";


function App() {
  const Stack = createNativeStackNavigator();


 return(
     <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:true }} initialRouteName="Login">
                <Stack.Screen  name="Login" component={Login}/>
                <Stack.Screen name="SignUp" component={SignUp}/>
                <Stack.Screen name="Post" component={Post}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="LekpayLogin" component={LekpayLogin}/>
                <Stack.Screen name="Otp" component={Otp}/>
                <Stack.Screen name="SetPassword" component={SetPassword}/>
                <Stack.Screen options={{headerStyle:{backgroundColor:darkPink}}} name="Capture Asset" component={MapAssets}/>
                <Stack.Screen name="lekpayProfile" component={LekpayProfile}/>
                <Stack.Screen options={{headerStyle:{backgroundColor:darkPink}}} name="AllScreens" component={AllScreens}/>
                <Stack.Screen options={{headerStyle:{backgroundColor:darkPink}}} name="Check Tickets" component={CheckTickets}/>
                <Stack.Screen options={{headerStyle:{backgroundColor:darkPink}}} name="Issue Tickets" component={IssueTickets}/>
                <Stack.Screen options={{headerStyle:{backgroundColor:darkPink}}} name="Ticket Screen" component={TicketScreen}/>
                <Stack.Screen options={{headerStyle:{backgroundColor:darkPink}}} name="Cash Handler" component={CashHandler}/>
                {/* Checker Screen */}
                <Stack.Screen options={{headerStyle:{backgroundColor:darkPink}}} name="Map Asset" component={MapAssetsChecker}/>
                <Stack.Screen options={{headerStyle:{backgroundColor:darkPink}}} name="Profile" component={ProfileChecker}/>
                <Stack.Screen options={{headerStyle:{backgroundColor:darkPink}}} name="Report" component={AssetTicketReport}/>
                <Stack.Screen options={{headerStyle:{backgroundColor:darkPink}}} name="Check" component={ValidateTicketChecker}/>
                <Stack.Screen options={{headerStyle:{backgroundColor:darkPink}}} name="ChangePasswordConductor" component={ChangePasswordConductor}/>

          </Stack.Navigator>


     </NavigationContainer>
  );
}


export default App;

// Just some styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
