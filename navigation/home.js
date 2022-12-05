import React from "react";
import {View,Text,TextInput, StyleSheet,Image,Pressable, StatusBar} from "react-native";


function Home({navigation}){

    const onPresshandler=() => {
        navigation.navigate("number"); 
    }

    return(
        
        <View style={styles.bg}>
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content"/>
            <View style={{alignItems:"center",padding:10,margin:10}}>
            <Image style={styles.img}
        source={{
          uri: 'https://contaque.com/contaquestatic/img/mobile-application.png',
        }}
      />
            </View>
            <Text style={styles.wishText}>Glad to see you:)</Text>
            <View style={{flexDirection:"row",borderWidth:1,borderColor:"grey",height:50, marginLeft:17,marginRight:13,
        padding:10}}>
             <Text style={{backgroundColor:"#ffffff",fontSize:18}}>+91 </Text>   
            <TextInput keyboardType="number-pad" style={styles.input} placeholder="| Mobile number" placeholderTextColor={"#d0d7e4"} />
            </View>
            <Pressable style={styles.btn} onPress={onPresshandler} >
                <Text style={styles.btnTxt}>VERIFY</Text>
            </Pressable>
            <View style={{flexDirection:"column",justifyContent:"flex-end",height:180,padding:10,}}>
            <Text style={styles.termsText}>By signing up you agree to <Text style={styles.terms}>T&C</Text></Text>
            </View>
        </View>
    )
}

export default Home;

const styles=StyleSheet.create({
    bg:{
        backgroundColor:"#ffffff",
        flex:1,
      
    },
    btn:{
        backgroundColor:"#3680ed",
        textAlign:"center",
        padding:10,
        marginLeft:17,
        marginRight:13,
        justifyContent:"center",
        height:50,
        marginTop:15,

    },
    btnTxt:{
        color:"#fefefe",
        textAlign:"center",
        fontSize:20,
    },
    terms:{
        textDecorationStyle:"solid",
        textDecorationLine:"underline",
        textDecorationColor:"#667281",
    },
    termsText:{
        color:"#6d7886",
        textAlign:"center",
        fontSize:16,
        justifyContent:"flex-end",
    },
    wishText:{
        color:"#576375",
        fontSize:26,
        marginLeft:10,
        padding:10,
        marginTop:10,
        fontWeight:"500",
    },
    img: {
        justifyContent:"center",
        width: 300,
        height:250,
      },
    input:{
        padding:1,
        fontSize:18,
       
    }

})