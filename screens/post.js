
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, Button, Image, TextInput, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { deleteAxios, fetchApi, fetchPostApi, getAxiosApi, postAxiosApi, searchAxiosApi } from "./Api";

const Post = () => {
    // const onPressHandle = async () => {
    //     const res = await fetchApi().catch(error=>{console.log(error)});
    //    console.log(res);
    //     // console.log(res[2]?.body);
    // }

    // const onPressPutApi = async () => {
    //     const res = await fetchPostApi({
    //         "body": "br",
    //         "id": 101,
    //         "title": "fo",
    //         "userId": 1,
    //     });
    //     console.log(res);
    // }

    const onPressAxiosGetApi = async () => {
        await getAxiosApi()
        .then(res => { console.log(res.data) })
        .catch(error => { console.log(error) })
        
    }

   
    const onPressAxiosPost = async () =>{
        await postAxiosApi({
            "name":"Manjunath",
            "description":"azxcv sfgh",
            "price":256
        })
        .then(res=>{console.log(res.data)})
        .catch(error=>{console.log(error)})
        
    }
    
    //  const oPressDelete  = async()=>{
    //     await deleteAxios()
    //     .then(res=>{console.log(res.data)})
    //     .catch(error=>{console.log(error)})
    //  }



     const onPressSearch = async () =>{
        await searchAxiosApi({
            "mobileNumber":123459795,
            "dob":"2003-05-15"
        })
        .then(res=>{console.log(res.data)})
        .catch(error=>{console.log(error)})
     }

    return (
        <View style={styles.container}>
            <Text style={styles.head}>
                Click to call API
            </Text>


            <TouchableOpacity style={styles.Btn}
                onPress={onPressAxiosPost}>
                <Text style={{ color: 'white' }}>Data Post</Text>
            </TouchableOpacity>
            
             
            <TouchableOpacity style={styles.Btn}
                onPress={onPressAxiosGetApi}>
                <Text style={{ color: 'white' }}>Data Get</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Btn}
                onPress={onPressSearch}>
                <Text style={{ color: 'white' }}>Data Search</Text>
            </TouchableOpacity>
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
    head: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 60
    },
    input: {
        width: 200,
        borderWidth: 2,
        padding: 4,
        marginBottom: 10
    },
    Btn: {
        width: 100,
        borderRadius: 12,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "black",

    },
});
export default Post;