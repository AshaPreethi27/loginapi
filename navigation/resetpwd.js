import React from "react";
import {View,Text,ScrollView,StyleSheet,TextInput, StatusBar,Pressable,Image} from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Feather from "react-native-vector-icons/Feather";

function Password({navigation}){
        onLogin=()=>{
            navigation.navigate("home");
        }

        return(
        <ScrollView style={styles.bg}>
            <StatusBar hidden={true} />
            <Text style={styles.head}>Reset password!</Text>
            <Text style={styles.para}>Please enter new password</Text>
            <View style={{marginTop:30}}>
            <View style={styles.inputContainer}>
                <SimpleLineIcons name="lock"  size={20} style={{padding:8,}} color={"#000000"}/>
                <TextInput placeholder="New Password" style={styles.inputBox} secureTextEntry />
                <Feather name="eye"  size={20} style={{padding:8,}} color={"#000000"}/>
            </View>
            <View style={styles.inputContainer}>
                <SimpleLineIcons name="lock"  size={20} style={{padding:8,}} color={"#000000"}/>
                <TextInput placeholder="Confirm Password" style={styles.inputBox} secureTextEntry />
            </View>
            </View>
            <Pressable style={styles.btn}>
                <Text style={styles.btnTxt} >RESET PASSWORD</Text>
            </Pressable>
            <View style={{flexDirection:"row",marginBottom:10,justifyContent:"center",marginTop:150}}>
                <Text style={styles.paraBottom}>Already have an account?</Text>
                <Pressable onPress={onLogin}>
                    <Text style={{ color:"#39569c",fontSize:16,fontWeight:"800",textAlign:"center",}}  >Login</Text>
                </Pressable>
            </View>
           
           
        </ScrollView>
        )
}

export default Password;

const styles=StyleSheet.create({
    bg:{
        backgroundColor:"white",
        padding:10,
        borderRadius:10,
        borderWidth:0,
    },
    head:{
        color:"#212121",
        fontSize:24,
        marginTop:180,
        padding:10,
        textAlign:"center",
        fontWeight:"500",
    },
    paraBottom:{
        color:"#686868",
        textAlign:"center",
        fontSize:16,
        fontWeight:"500",
    },
    para:{
        color:"#acacac",
        textAlign:"center",
        fontSize:16,
        fontWeight:"500",
    },
    inputContainer:{
        flex:1,
        flexDirection:"row",
        backgroundColor:"#f8fafb",
        justifyContent:"center",
        borderRadius:7,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        height:50,
        padding:5,
    },
    inputBox:{
        flex:1,
        backgroundColor:"#f8fafb",
        borderRadius:10, 
        fontSize:15,
        color:"#000000",
        fontWeight:"bold",

    },
    forgotpwdTxt:{
        flex:1,
        alignSelf:"flex-end",
        color:"#4f5fa8",
        fontSize:16,
        marginTop:10,
        marginRight:10,
        fontFamily:"sans-serif-medium",
        fontWeight:"700",
    },
    btn:{
        height:50,
        flex:1,
        alignSelf:"stretch",
        borderRadius:7,
        borderWidth:0,
        marginTop:20,
        marginLeft:10,
        padding:15,
        marginRight:10,
        marginBottom:10,
        backgroundColor:"#273b94",
    },
    btnTxt:{
        color:"#dee1ee",
        fontSize:15,
        textAlign:"center",
     
    },
    mediaBtn:{
        height:60,
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignSelf:"stretch",
        borderRadius:10,
        borderWidth:0,
        padding:10,
        margin:10,
        backgroundColor:"#f4f7fa",
    },
    fbTxt:{
        color:"#5e6daf",
        fontSize:16,
        fontWeight:"600",
        textAlign:"center",
        padding:10,
    },
    googleTxt:{
        color:"#4c4c4c",
        fontSize:16,
        textAlign:"center",
        padding:10,
        fontWeight:"600",
    
    },
    img:{
        height:40,
        width:30,
        padding:10,
        marginRight:3,
        
    }
   
})