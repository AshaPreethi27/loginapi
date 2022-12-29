import React,{ useState } from "react";
import  {Text,View,StyleSheet, StatusBar,Image,TextInput} from "react-native";
import { Checkbox } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Signin({navigation}){

     const [email,setEmail] = useState("");
     const [password,setPassword] = useState("");

     const onSignin=()=>{

        if (email == "" && password==""){
            alert("please enter valid credentials!")
        }
        else{
            const data = {
            email:email,
            password: password,
            FName: "asha",
            LName: "",
            address1: "Nagayalanka",

                address2: "",

                socialOrManual: 0,

                lattitude: "15.9455",

                longitude: "80.9180",

                zipcode: "521120",

                city: "Nagayalanka",

                state: "Andhra pradesh",

                country: "INDIA",

                ageGroup: null,

                profession: null,

                communityName: "",
                phoneNumber: "8790520320",
                userType: 3
            };
            console.log(data);
            axios
            .post('https://devshareitemsapi.mindwavetech.com/api/logins/create_userGorF/',data, {
                headers: {
                Accept: "application/json",
                },
               
            })
            .then(({data}) => {
                console.log(data);
                navigation.navigate("userpage")
            }).catch((error) => {
                console.log("error",error)
            })
            }
    }
    return(
        <SafeAreaView style={styles.bg}>
        <StatusBar   backgroundColor={"#153f69"} barStyle={"light-content"}/>
        <View style={styles.container}>
        <View style={{justifyContent:"center",alignItems:"center",margin:10,}}>
        <Image style={styles.img} source=
        {{uri:"https://wellbeinginfo.org/wp-content/uploads/2022/06/action-station-logo-300x300.jpg"}} />
        </View>
        <Text style={styles.logoTxt}>LOREMIPSUM</Text>
        <View style={{marginLeft:"3%",}}>
        <View style={{flexDirection:"row",backgroundColor:"#f8f7fc",alignItems:"stretch",marginLeft:"3%",marginRight:"3%" ,marginBottom:10,borderRadius:20,}} >
        <MaterialIcons name="mail-outline" size={20} style={{paddingTop:15,paddingLeft:10,marginRight:10, }} />    
        <TextInput placeholder="email"
         style={{backgroundColor:"#f8f7fc",flex:1}} value={email} onChangeText={email=>setEmail(email)} />
        <Octicons name="check-circle-fill" color="#1b3c5c" style={{padding:10}} size={20} />
        </View>
        <View style={{flexDirection:"row",backgroundColor:"#f8f7fc",alignItems:"stretch",marginLeft:"3%",marginRight:"3%",marginBottom:10,borderRadius:20,}} >
        <SimpleLineIcons name="lock" style={{paddingTop:15,paddingLeft:10,marginRight:10, }}  size={19}/>
        <TextInput secureTextEntry  style={{backgroundColor:"#f8f7fc",flex:1}}  placeholder="password" 
        value={password} onChangeText={password => setPassword(password)} />
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10,marginLeft:"3%"}}>
            <View style={{flexDirection:"row",}}>
                <Checkbox status="checked" color="#173f62"   />
                <Text style={styles.checkboxLabel}>Remember me</Text>
            </View>
            <Text style={styles.txt}>Forgot Password?</Text>
        </View>
        <View style={{justifyContent:"center",alignItems:"center"}}>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText} onPress={onSignin}>Sign in</Text>
        </TouchableOpacity>
        </View>
        </View>
        </View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"center",marginTop:20}}>
             <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvRQ8O30FaPPUWF537Wtwt1nxrG4ZLWrswHPoDbGY&s"}} style={styles.logo} />
              <Image source={{uri:"https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"}} style={styles.logo}/>
              <Image source={{uri:"https://w0.peakpx.com/wallpaper/1022/13/HD-wallpaper-apple-black-logo-man-marvel-original-plus-super-symbol-white.jpg"}} style={styles.logo}/>
        </View>
        <Text style={styles.btmTxt}>Don't have an account?<Text style={styles.spanEl}>Sign up here</Text></Text>
    </SafeAreaView>
        )
}

const styles=StyleSheet.create({
    bg:{
        backgroundColor:"#153f69",
        flex:1,
    },
    heading:{
        color:"#0b0a0c",
        fontSize:23,
        marginLeft:"3%",
        padding:10,
        marginTop:20,
          
    },
    container:{
        backgroundColor:"#ffffff",
        height:500,
        borderRadius:25,
        marginLeft:20,
        marginRight:20,
        marginTop:35,
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
    }
    ,
    checkboxLabel:{
        color:"#b7b6bc",
        fontSize:14,
        padding:10,
        fontWeight:"500",
    }, 
    txt:{
        color:"#b2b2b2",
        fontSize:14,
        padding:10,
        fontWeight:"500",
    },
    logoTxt:{
        color:"#22394a",
        fontSize:23,
        fontWeight:"500",
        textAlign:"center",
        alignItems:"center",
        marginBottom:10,
    },
    btmTxt:{
        color:"#b1d5ef",
        fontSize:14,
        padding:20,
        fontWeight:"500",
        textAlign:"center",
        alignItems:"center",
    },
    spanEl:{
        color:"#9790a0",
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
    logo:{
        height:40,
        width:40,
        padding:10,
        margin:10,
        borderRadius:40,
    },
    inputPassword:{
        height:40,
        marginLeft:"3%",
        marginRight:"3%",
        marginTop:15,
        backgroundColor:"#fefefe",
    },
    btn:{
        
        backgroundColor:"#163e66",
        marginLeft:"3%",
        borderRadius:20,
        height:45,
        width:200,
        marginTop:30,
        marginBottom:10,
        marginRight:"3%",
        padding:10,
    },
    btnText:{
        color:"#f2f2f2",
        fontSize:16,
        textAlign:"center",
        fontWeight:"500",
        
    },
    img:{
        height:80,
        width:80,
        padding:10,
        marginBottom:10,
        marginTop:30,
        alignItems:"center",
    }

})

