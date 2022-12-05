
import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./navigation/home";
import Number from "./navigation/number";
import Otp from "./navigation/otp";
const Stack= createStackNavigator();
 
function App(){
        return(
            <NavigationContainer>
                <Stack.Navigator screenOptions={{header : ()=> null}} >
                    <Stack.Screen name="home" component={Home}/>
                    <Stack.Screen name="number" component={Number} />
                    <Stack.Screen name="otp" component={Otp} />
                </Stack.Navigator>
            </NavigationContainer>
        
        )
}

export default App;

//