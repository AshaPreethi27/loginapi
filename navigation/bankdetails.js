import React from "react";
import  {Text,View,TextInput,StyleSheet, StatusBar} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";

export default function BankDetails({navigation}){

    const onBackPage=()=>{
        navigation.navigate("idProof")
    }

    return(
            <View style={StyleSheet.bg}>
                <StatusBar hidden={true} />
                <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:"2%",marginLeft:"3%",marginRight:"1%",padding:10,}}>
                    <Pressable onPress={onBackPage}>
                        <AntDesign name="arrowleft"  color="#707070" size={20}/>
                    </Pressable>
                    <Entypo name="cross"  color="#707070" size={30}/>
                </View>
                <Text style={styles.heading}>Upload KYC</Text>
                <View style={{flexDirection:"row",marginLeft:"3%",padding:10}}>
                    <View style={{marginRight:8}} >
                        <Text style={styles.textLight} >Personal Details</Text>
                        <View style={styles.nameHighlight}></View>
                    </View>
                    <View style={{marginRight:8}}>
                        <Text style={styles.textLight} >ID Proof</Text>
                        <View style={styles.nameHighlight}></View>
                    </View>
                    <View style={{marginRight:8}}>
                        <Text style={styles.textHighlight} >Bank Details</Text>
                        <View style={styles.nameHighlight}></View>
                    </View>
                </View>
                <View style={styles.bottomBg}>
                    <Text style={styles.bottomHead}>Enter Account Details</Text>
                    <View style={{flexDirection:"row",}}>
                        <Text style={{marginLeft:"3%",padding:10,marginTop:10,color:"#c9c9c9"}}>Account Type</Text>
                       <Pressable style={styles.buttonHighlight}>
                        <Text style={styles.buttonHighlightTxt}>Savings</Text>
                       </Pressable>
                       <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Current</Text>
                       </Pressable>
                     </View>
                    <Text style={styles.inputName} >Name on Account</Text> 
                    <TextInput style={styles.input} />
                    <Text style={styles.inputName} >Account Number</Text> 
                    <TextInput style={styles.input} />
                    <Text style={styles.inputName} >Confirm Account Number</Text> 
                    <TextInput style={styles.input} />
                    <Text style={styles.inputName} >IFSC Code</Text> 
                    <TextInput style={styles.input} /> 
                    <Pressable style={styles.btn} >
                        <Text style={styles.btnText}>Submit</Text>
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
            color:"#8d8d8d",
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
            marginTop:13,
            fontWeight:"500",
        },
        input:{
            backgroundColor:"#e9f8ee",
            height:40,
            borderRadius:15,
            marginLeft:"3%",
            marginTop:5,
        },
        btn:{
            backgroundColor:"#212121",
            marginLeft:"3%",
            borderRadius:10,
            height:40,
            marginTop:30,
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
        button:{
            backgroundColor:"#e6f2ec",
            height:40,
            width:110,
            padding:10,
            borderRadius:20,
            marginLeft:"3%",
            marginRight:10,
            marginTop:10,
        },
        buttonHighlight:{
            backgroundColor:"#1eb15b",
            height:40,
            width:110,
            padding:10,
            borderRadius:20,
            marginLeft:"3%",
            marginRight:10,
            marginTop:10,
            color:"#ffffff",
        },
        buttonText:{
            textAlign:"center",
            color:"#87928d",
        },
        buttonHighlightTxt:{
            color:"#ffffff",
            textAlign:"center",
        }

    })

