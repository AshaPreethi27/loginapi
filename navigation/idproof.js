import React from "react";
import  {Text,View,TextInput,StyleSheet, StatusBar} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";

export default function IDProof({navigation}){

        const onPresshandler=()=>{
            navigation.navigate("bankDetails")
        }

        const onBackPage=()=>{
            navigation.navigate("personalDetails")
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
                        <Text style={styles.textLighten} >Personal Details</Text>
                        <View style={styles.nameHighlight}></View>
                    </View>
                    <View style={{marginRight:8}}>
                        <Text style={styles.textHighlight} >ID Proof</Text>
                        <View style={styles.nameHighlight}></View>
                    </View>
                    <View style={{marginRight:8}}>
                        <Text style={styles.textLight} >Bank Details</Text>
                        <View style={styles.nameLight}></View>
                    </View>
                </View>
                <View style={styles.bottomBg}>
                    <Text style={styles.bottomHead}>Choose Document Type</Text>
                     <View style={{flexDirection:"row",}}>
                       <Pressable style={styles.buttonAdhar}>
                        <Text style={styles.buttonText}>Aadhar Card</Text>
                       </Pressable>
                       <Pressable style={styles.buttonPan}>
                        <Text style={styles.buttonHighlightTxt}>Pan Card</Text>
                       </Pressable>
                     </View>
                     <Pressable style={styles.buttonDriving}>
                        <Text style={styles.buttonText}>Driving License</Text>
                       </Pressable>

                    <Text style={styles.bottomHeading}>Upload ID Proof</Text>
                    <Text style={styles.inputName}>Image should be on a plain dark surface and make sure all the corners of the document are visible</Text>
                    <View style={{flexDirection:"row",marginLeft:"3%",marginTop:10,}}>
                        <Pressable  style={styles.cameraBox}>
                            <AntDesign name="camerao" size={40} color="#8fc0a6" />
                            <Text>Front</Text>
                        </Pressable>
                        <Pressable style={styles.cameraBox}  >
                            <AntDesign name="camerao" size={40} color="#8fc0a6" />
                            <Text>Back</Text>
                        </Pressable>
                    </View>
                    
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
        textLighten:{
            color:"#939393",
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
        bottomHeading:{
            color:"#383838",
            fontSize:19,
            fontWeight:"500",
            marginLeft:"3%",
            marginTop:30,
        },
        btn:{
            backgroundColor:"#212121",
            marginLeft:"3%",
            borderRadius:10,
            height:40,
            marginTop:80,
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
        buttonAdhar:{
            backgroundColor:"#e6f2ec",
            height:40,
            width:110,
            padding:10,
            borderRadius:20,
            marginLeft:"3%",
            marginRight:10,
            marginTop:10,
        },
        buttonPan:{
            backgroundColor:"#1eb15b",
            height:40,
            width:100,
            padding:10,
            borderRadius:20,
            marginLeft:"3%",
            marginRight:10,
            marginTop:10,

        },
        buttonDriving:{
            backgroundColor:"#e6f2ec",
            height:40,
            width:130,
            padding:10,
            borderRadius:20,
            marginLeft:"3%",
            marginRight:10,
            marginTop:10,

        },
        buttonText:{
            textAlign:"center",
            color:"#8c9690",
        },
        buttonHighlightTxt:{
            color:"#ffffff",
            textAlign:"center",
        },
        inputName:{
            color:"#c4c4c4",
            fontSize:16,
            marginLeft:"3%",
            marginRight:"1%",
            marginTop:10,
            fontWeight:"500",
        },
        cameraBox:{
            backgroundColor:"#ffffff",
            height:90,
            borderRadius:10,
            width:170,
            padding:10,
            marginRight:15,
            elevation:10,
            alignItems:"center",
           
         
        }

    })