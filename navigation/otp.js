import React from "react";
import {View,Text, StyleSheet,Image,Pressable,StatusBar} from "react-native";
import { TextInput } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function Otp({navigation}){

    const onPresshandler=() => {
        navigation.navigate("home");
    }
    
    return(
        <View style={styles.bg}>
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content"/>
            <View style={{alignItems:"center",padding:10,margin:10}}>
            <Image style={styles.img} source= {{uri: 'https://contaque.com/contaquestatic/img/mobile-application.png', }} />
            </View>
            <Text style={styles.wishText}>About you</Text>
            <Text style={styles.text}>Please let us know more about you</Text>
            <TextInput mode="outlined" label="My name is"   placeholder="My name is"  style={styles.input}  />
            <TextInput  placeholder="Wish me on" mode="outlined" label="Wish me on" style={styles.input2}  />
            <View style={{flexDirection:"row"}}>
            <Pressable style={styles.maleBox}>
                <MaterialCommunityIcons name="gender-male"  size={30}  color="#5d6a7b" />
                <Text style={styles.genderText}>Male</Text>
            </Pressable>
            <Pressable style={styles.femaleBox}>
                <MaterialCommunityIcons name="gender-female" size={30} color="#5d6a7b" />
                <Text style={styles.genderText}>Female</Text>
            </Pressable>
            </View>
            <Pressable style={styles.btn} onPress={onPresshandler}>
                <Text style={styles.btnTxt} >CONFIRM DETAILS</Text>
            </Pressable>
        </View>
    )
}

export default Otp;

const styles=StyleSheet.create({
    bg:{
        backgroundColor:"#ffffff",
        flex:1,
    },
    btn:{
        backgroundColor:"#3680ed",
        textAlign:"center",
        padding:10,
        marginBottom:"5%",
        marginLeft:14,
        marginRight:14,
        height:45,
    },
    btnTxt:{
        color:"#fefefe",
        textAlign:"center",
        fontSize:20,
    },
    wishText:{
        color:"#576375",
        fontSize:24,
        marginLeft:14,
        fontWeight:"500",
       
    },
    text:{
        color:"#b2bfd0",
        marginLeft:14,
        marginRight:14,
        fontSize:16,
    },
    maleBox:{
        padding:10,
        marginLeft:13,
        marginRight:0,
        marginBottom:"5%",
        borderColor:"#d1def0",
        borderStyle:"solid",
        borderWidth:1,
        borderRadius:4,
        flexDirection:"row",
        width:192,

    },
    femaleBox:{
        padding:10,
        marginLeft:0,
        marginRight:14,
    
        marginBottom:"5%",
        borderColor:"#d1def0",
        borderStyle:"solid",
        borderWidth:1,
        borderRadius:4,
        flexDirection:"row",
        width:192,
    },
    genderText:{
        color:"#5d6a7b",
        fontSize:19,
        textAlign:"center",
        marginLeft:10,

    },
    img: {
        justifyContent:"center",
        width: 300,
        height:230,
      },
    input:{
        borderColor:"#e7eef7",
        marginTop:"5%",
        borderRadius:5,
        marginBottom:"5%",
        marginLeft:14,
        marginRight:14,
        height:45,
    },
    input2:{
        borderColor:"#e1ecfc",
        marginRight:14,
        borderRadius:5,
        marginBottom:"5%",
        marginLeft:14,
        height:45,
    }

})



