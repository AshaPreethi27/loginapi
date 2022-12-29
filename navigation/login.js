import React, { useState } from "react";
import  {Text,View,StyleSheet, StatusBar,Image} from "react-native";
import { TextInput,Checkbox } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";
import Octicons from "react-native-vector-icons/Octicons";
import { TouchableOpacity } from "react-native-gesture-handler";

import axios from "axios";

export default function Login({navigation}){

    const [email,setEmail] = useState("");
    const [password,setPassword]=useState("");
    const [name,setName] = useState("");
    

    const onBackPage=()=>{
        navigation.navigate("home")
    }

    const onLogin=() => {
        console.log("enter mail",email)
        if  (email =="" && password =="" && name == ""){
            alert("Please give valid credentials")

   } 
    else{
        const url = "https://devshareitemsapi.mindwavetech.com/api/logins/login/?email=manikanta@castusinfo.com&password=Castus@123&userType=3";
        const data = {
            email: "",
            password: "",
            name:"",
            };
            axios
            .post(url, data, {
                headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
                },
            })
            .then(({data}) => {
                console.log(data)
                navigation.navigate("userpage",
                {
                 email:email,
                 name:name,
                });
            }).catch((error)=>{
                console.log("error",error)
            })
                 
            
}
    }

    return(
            <SafeAreaView style={styles.bg}>
                <StatusBar   backgroundColor={"#fefefe"} barStyle={"dark-content"}/>
                <Text style={styles.heading}>Welcome Back,<Text style={styles.loginTxt }> Login</Text>                                   for Continue !</Text>
                <View style={{justifyContent:"center",alignItems:"center",margin:10,}}>
                <Image style={styles.img} source=
                {{uri:"https://wellbeinginfo.org/wp-content/uploads/2022/06/action-station-logo-300x300.jpg"}} />
                </View>
                <Text style={styles.logoTxt}>LOREMIPSUM</Text>
                <View style={{marginLeft:"3%",}}>
                <TextInput mode="flat" label="Username" style={styles.inputPassword} selectionColor={"#e1e1e1"}
                 activeUnderlineColor={"#c0c8c8"}  underlineColor={"#c0c8c8"} 
                 onChangeText={name=>setName(name)} value={name} 
                 />
                <View style={{flexDirection:"row",backgroundColor:"#fefefe",alignItems:"stretch",marginLeft:"3%",}} >
                
                <TextInput mode="flat" label="Email"
                 style={{backgroundColor:"#fefefe",flex:1}}
                selectionColor={"#e1e1e1"} activeUnderlineColor={"#c0c8c8"}  underlineColor={"#c0c8c8"}
                onChangeText={email=>setEmail(email)} value={email} />
                <Octicons name="check-circle-fill" color="#1b3c5c" style={styles.icon} size={20} />
                </View>
                <TextInput mode="flat" label="Password" secureTextEntry  style={styles.inputPassword} selectionColor={"#e1e1e1"}
                 activeUnderlineColor={"#c0c8c8"}  underlineColor={"#c0c8c8"} 
                 onChangeText={password=>setPassword(password)} value={password} 
                 />
                <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10,marginLeft:"3%"}}>
                    <View style={{flexDirection:"row",}}>
                        <Checkbox status="unchecked"   />
                        <Text style={styles.checkboxLabel}>Remember me</Text>
                    </View>
                    <Text style={styles.txt}>Forgot Password?</Text>
                </View>
                <TouchableOpacity style={styles.btn} onPress={onLogin }>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
                <View style={{flexDirection:"row",marginLeft:"3%",marginRight:"2%"}}>
                 <View style={{flex: 1, height: 1, backgroundColor: '#f9f9f9',marginTop:10}}></View>   
                <Text style={styles.acntTxt}>Don't Have Account?</Text>
                <View style={{flex: 1, height: 1, backgroundColor: '#f9f9f9',marginTop:10}}></View>    
                </View> 
                <TouchableOpacity style={styles.acntBtn} onPress={onBackPage}>
                    <Text style={styles.acntbtnText}>Create Account</Text>
                </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
}

const styles=StyleSheet.create({
        bg:{
            backgroundColor:"#fefefe",
            flex:1,
        },
        heading:{
            color:"#0b0a0c",
            fontSize:23,
            marginLeft:"3%",
            padding:10,
            marginTop:10,
              
        },
        headingBottom:{
            color:"#0b0a0c",
            fontSize:24,
            marginLeft:"3%",
            padding:10,
              
        },
        nameSection:{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:"#fefefe",
        },
        icon:{
            padding:10,
        },
        loginTxt:{
            textDecorationLine:"underline",
            textDecorationColor:"#2f2e2f",
            textDecorationStyle:"solid",
            color:"#100e11",
            fontWeight:"800",
        },
        checkboxLabel:{
            color:"#b5b5b5",
            fontSize:14,
            padding:10,
        }, 
        txt:{
            color:"#999999",
            fontSize:14,
            padding:10,
        },
        logoTxt:{
            color:"#22394a",
            fontSize:23,
            fontWeight:"500",
            textAlign:"center",
            alignItems:"center",
            marginBottom:10,
        },
        inputName:{
            flex: 1,
            margin:10,
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingLeft: 0,
            height:40,
            backgroundColor:"#fefefe",
        },
        inputPassword:{
            height:40,
            marginLeft:"3%",
            marginRight:"3%",
            marginTop:10,
            backgroundColor:"#fefefe",
        },
        acntTxt:{
            color:"#afafb1",
            fontSize:14,
            padding:10,
            textAlign:"center",
            justifyContent:"center",
            margin:10,
        },
        btn:{
            backgroundColor:"#163e66",
            marginLeft:"3%",
            borderRadius:10,
            height:45,
            marginTop:10,
            marginBottom:10,
            marginRight:"3%",
            padding:10,
        },
        btnText:{
            color:"#f2f2f2",
            fontSize:18,
            textAlign:"center",
            fontWeight:"500",
            
        },
        acntBtn:{
            borderColor:"#5d6264",
            borderWidth:2,
            borderStyle:"solid",
            height:45,
            padding:5,
            borderRadius:14,
            marginLeft:"3%",
            marginRight:"3%",
            marginTop:5,
        },
        acntbtnText:{
            textAlign:"center",
            color:"#606369",
            fontSize:18,
            fontWeight:"500",
        },
        img:{
            height:100,
            width:100,
            padding:10,
            margin:10,
            alignItems:"center",
        }

    })

