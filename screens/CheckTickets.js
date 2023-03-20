import React, { useState,useEffect } from "react";            //Check Tickets
import { View, Text, StyleSheet, Alert,Button,Image, TextInput,TouchableOpacity} from "react-native";
import { background } from "../components/Constants";
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Linking from 'expo-linking';
import { Audio } from 'expo-av';

const CheckTickets = () =>{
  const height = 800;
  const width = 500;
    const maskRowHeight = 30;
    const maskColWidth = (width - 200) / 2;

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [sound, setSound] = React.useState();
    
    async function playSound(effect) {
     // console.log('Loading Sound');
      const { sound } = effect ? await Audio.Sound.createAsync( require('../assets/okSound.mp3') ) : await Audio.Sound.createAsync( require('../assets/beep.mp3') 
      );
      setSound(sound);
  
     // console.log('Playing Sound');
      await sound.playAsync();
    }

    useEffect(() => {
      const getBarCodeScannerPermissions = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      };
  
      getBarCodeScannerPermissions();

      
   
    },[]);
  
    const handleBarCodeScanned = ({ type, data }) => {
     // console.log(data.length);
      if(data.length != 1)                    // check for valid ticket
      {
        playSound(true);
      } else{
        playSound(false);
      }
      setScanned(true);
      
      //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      Alert.alert('Success!!', `Data scanned = \n${data}?`, [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'Go to link',
          onPress:() => Linking.openURL(data)
          
        },
        
       
      ]);
    };
  
    if (hasPermission === null) {
      return <View style={styles.body}><Text>Requesting for camera permission</Text></View>
    }
    if (hasPermission === false) {
      return <View style={styles.body}><Text>No access to camera</Text>;</View>
    }
  return (
    <View style={styles.body}>
      
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      <View style={styles.maskOutter}>
        
            <View style={[{ flex: maskRowHeight  }, styles.maskRow, styles.maskFrame]} />
             <View style={[{ flex: 30 }, styles.maskCenter]}>
             <View style={[{ width: maskColWidth }, styles.maskFrame]} />
             <View style={styles.maskInner} />
            <View style={[{ width: maskColWidth }, styles.maskFrame]} />
          </View>
        <View style={[{ flex: maskRowHeight }, styles.maskRow, styles.maskFrame]} />
      </View>
     
      {scanned && <Button title={'Tap to Scan'} onPress={() => setScanned(false)} />}
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
    maskOutter: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'space-around',
     
    },
    maskInner: {
      width: 250,
      backgroundColor: 'transparent',
      borderColor: '#000000',
      borderWidth: 1,
      
      
    },
    maskFrame: {
      backgroundColor: 'rgba(1,1,1,0.6)',
      
    },
    maskRow: {
      width: '100%',
      
    },
    maskCenter: { flexDirection: 'row' },
});

export default CheckTickets;