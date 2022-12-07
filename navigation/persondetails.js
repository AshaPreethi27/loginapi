
import React from "react";
import  {Text,View,TextInput,StyleSheet, StatusBar} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";

export default function PersonalDetails({navigation}){

        const onPresshandler=()=>{
            navigation.navigate("idProof")
        }

    return(
            <View style={StyleSheet.bg}>
                <StatusBar hidden={true} />
                <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:"2%",marginLeft:"3%",marginRight:"1%",padding:10,}}>
                    <Pressable>
                        <AntDesign name="arrowleft"  color="#707070" size={20}/>
                    </Pressable>
                    <Entypo name="cross"  color="#707070" size={30}/>
                </View>
                <Text style={styles.heading}>Upload KYC</Text>
                <View style={{flexDirection:"row",marginLeft:"3%",padding:10}}>
                    <View style={{marginRight:8}} >
                        <Text style={styles.textHighlight} >Personal Details</Text>
                        <View style={styles.nameHighlight}></View>
                    </View>
                    <View style={{marginRight:8}}>
                        <Text style={styles.textLight} >ID Proof</Text>
                        <View style={styles.nameLight}></View>
                    </View>
                    <View style={{marginRight:8}}>
                        <Text style={styles.textLight} >Bank Details</Text>
                        <View style={styles.nameLight}></View>
                    </View>
                </View>
                <View style={styles.bottomBg}>
                    <Text style={styles.bottomHead}>Enter Your Details</Text>
                    <Text style={styles.inputName} >Name</Text> 
                    <TextInput style={styles.input} />
                    <Text style={styles.inputName} >Mobile</Text> 
                    <TextInput style={styles.input} />
                    <Text style={styles.inputName} >Email</Text> 
                    <TextInput style={styles.input} />
                    <Text style={styles.inputName} >Pincode</Text> 
                    <TextInput style={styles.input} /> 
                    <Pressable style={styles.btn} onPress={onPresshandler}>
                        <Text style={styles.btnText}>Next</Text>
                    </Pressable>
                </View>
            </View>
        )
}

const styles=StyleSheet.create({
        bg:{
            backgroundColor:"#f2f2f2",

        },
        heading:{
            color:"#3e3e3e",
            fontSize:23,
            marginLeft:"3%",
            padding:10,
        },
        nameHighlight:{
            backgroundColor:"#64b386",
            height:6,
            width:120,
            borderRadius:15,
        },
        nameLight:{
            backgroundColor:"#c5c5c5",
            height:6,
            width:120,
            borderRadius:15,
        },
        textHighlight:{
            color:"#64b386",
            fontSize:14,
            fontWeight:"600",
            textAlign:"center",
            padding:10,

        },
        textLight:{
            color:"#c5c5c5",
            fontSize:14,
            fontWeight:"600",
            textAlign:"center",
            padding:10,
        },
        bottomBg:{
            backgroundColor:"#ffffff",
            borderTopLeftRadius:25,
            borderTopRightRadius:25,
            marginTop:15,
            padding:10,
            
        },
        bottomHead:{
            color:"#383838",
            fontSize:20,
            fontWeight:"500",
            marginLeft:"3%",
            marginTop:10,
        },
        inputName:{
            color:"#b8b8b8",
            fontSize:16,
            marginLeft:"3%",
            marginTop:15,
            fontWeight:"500",
        },
        input:{
            backgroundColor:"#e9f8ee",
            height:45,
            borderRadius:15,
            marginLeft:"3%",
            marginTop:5,
        },
        btn:{
            backgroundColor:"#212121",
            marginLeft:"3%",
            borderRadius:10,
            height:40,
            marginTop:50,
            marginBottom:10,
            marginRight:"1%",
        },
        btnText:{
            color:"#f2f2f2",
            fontSize:18,
            textAlign:"center",
            fontWeight:"500",
            padding:7,


        },

    })