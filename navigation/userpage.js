
import { useRoute } from "@react-navigation/native";
import React from "react";
import {Text,View,StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Userpage(){
     
    const route=useRoute();
    return( 
    <SafeAreaView style={styles.bg} >
        <View style={{alignItems:"center",
        justifyContent:"center",flex:1,}}>
         <Text style={styles.text}>Welcome {route.params.name}!!</Text>
         </View>
    </SafeAreaView>
    ) 
}

const styles=StyleSheet.create({
    bg:{
        backgroundColor:"#006d8e",
        flex:1,
    },
    text:{
        color:"#ffffff",
        fontsize:30,
        padding:10,
        margin:10,
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
    }  
})