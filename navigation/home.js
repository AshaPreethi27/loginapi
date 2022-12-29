
import React from "react";
import  {Text,View,TextInput,StyleSheet, StatusBar, ImageBackground} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";

export default function Home({navigation}){

        const onSignin=()=>{
            navigation.navigate("signin")
        }

        const onLogin=()=>{
            navigation.navigate("login")
        }

        const Image={uri:"https://thestack.technology/wp-content/uploads/2021/12/pickled-stardust-ELxsvsbGCo4-unsplash-780x470.jpg"}

    return(
         <View style={styles.bg}>
            <StatusBar  backgroundColor="#006d8e"  translucent={true}/>
            <ImageBackground source={Image} resizeMode="cover" style={styles.img}>
             <View style={styles.content}>
                <Text style={styles.head}>Fantasy Cricket for those who play to win!</Text>
                <Text style={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </Text>
                <Pressable onPress={onSignin} style={styles.signinBtn}>
                    <Text style={styles.signinTxt}>Sign in</Text></Pressable>
                <Pressable onPress={onLogin}  style={styles.loginBtn}>
                <Text style={styles.loginTxt}>Login</Text>
                    </Pressable>
             </View>

            </ImageBackground>
         </View>   

          
        )
}

const styles=StyleSheet.create({
        bg:{
           flex:1,
          
          
        },
        content:{
            flex:1,
            justifyContent:"flex-end",
            marginLeft:"3%",
            marginRight:"3%",
            padding:10,
           
        },
        head:{
            color:"#dffafd",
            fontSize:32,
            fontWeight:"500",
           
            padding:10,
        },
        para:{
            color:"#dffafd",
            fontSize:18,
            fontWeight:"500",
           
            padding:10,
        },
        signinBtn:{
            backgroundColor:"#fdfffe",
            marginLeft:"3%",
            marginTop:10,
            borderRadius:11,
            height:50,
            width:340,
            
        },
        loginBtn:{
            backgroundColor:"#2a2e3a",
            marginLeft:"3%",
            borderRadius:11,
            height:46,
            width:340,
            marginTop:10,
            marginBottom:10,
            
        },
        signinTxt:{
            color:"#28282a",
            fontSize:20,
            textAlign:"center",
            fontWeight:"500",
            padding:8,
        },
        loginTxt:{
            color:"#d2d6df",
            fontSize:18,
            textAlign:"center",
            fontWeight:"500",
            padding:8,
        },
        img:{
            flex:1,
            justifyContent:"center",
        
        },

    })