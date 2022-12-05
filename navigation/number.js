import React from "react";
import {View,Text,TextInput, StyleSheet,Image,Pressable,StatusBar} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

function Number({navigation}){

    const onPresshandler=()=>{
            navigation.navigate("otp")
    }

    return(
        <View style={styles.bg}>
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content"/>
        <View style={{alignItems:"center",padding:10,margin:10}}>
        <Image style={styles.img}
            source={{uri: 'https://contaque.com/contaquestatic/img/mobile-application.png', }}/>
        </View>
        <Text style={styles.wishText}>Verify account</Text>
        <View style={{flexDirection:"row"}}>
            <Text style={styles.text}>Enter OTP sent to 9745xxxxxx</Text>
            <MaterialIcons name="edit" color="blue" size={18}  style={{padding:6}}  />
        </View>
        <View style={styles.otpContainer}>
            <View>
        <TextInput keyboardType="number-pad" style={styles.inputBox} placeholder="*"placeholderTextColor={"#c9d1e0"}  />
        </View>
        <View>
        <TextInput keyboardType="number-pad" style={styles.inputBox} placeholder="*" placeholderTextColor={"#c9d1e0"}   />
        </View>
        <View>
        <TextInput keyboardType="number-pad" style={styles.inputBox} placeholder="*" placeholderTextColor={"#c9d1e0"}  />
        </View>
        <View>
        <TextInput keyboardType="number-pad" style={styles.inputBox} placeholder="*" placeholderTextColor={"#c9d1e0"}  />
        </View>
        </View>
        <Pressable onPress={onPresshandler} >
            <Text style={styles.btnTxt}>Resend</Text>
        </Pressable>
    </View>
    )
}

export default Number;


const styles=StyleSheet.create({
    bg:{
        backgroundColor:"#ffffff",
        flex:1,
    },
    btnTxt:{
        color:"#3581ea",
        textAlign:"center",
        padding:10,
        
        fontSize:18,
    },
    wishText:{
        color:"#576375",
        fontSize:26,
        fontWeight:"500",
        marginLeft:13,
        padding:10,
       
    },
    img: {
        justifyContent:"center",
        width: 300,
        height:230,
      },
    text:{
        color:"#b2bfd0",
        marginLeft:13,
        fontSize:18,
        paddingLeft:10,
    },
    otpContainer:{
        flexDirection:"row",
        marginTop:18,
        marginLeft:20,
        marginRight:20,
    },
    inputBox:{
        maxLength:1,
        width:75,
        height:60,
        borderColor:"#e6edf7",
        borderWidth:2,
        margin:"2%",
        borderRadius:5,
        padding:10, 
        fontSize:20,
        textAlign:"center",
    }

})