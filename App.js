
import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./navigation/home";
import Registration from "./navigation/registration";
import Password from "./navigation/resetpwd";
const Stack= createStackNavigator();
 
function App(){
        return(
            <NavigationContainer>
                <Stack.Navigator screenOptions={{header: ()=>null}}>
                    <Stack.Screen name="home" component={Home}/>
                    <Stack.Screen name="registration" component={Registration} />
                    <Stack.Screen name="password" component={Password} />
                </Stack.Navigator>
            </NavigationContainer>
        
        )
}

export default App;

