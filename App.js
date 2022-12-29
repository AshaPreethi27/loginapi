
import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./navigation/home";
import Signin from "./navigation/signin";
import Login from "./navigation/login";
import Userpage from "./navigation/userpage";
const Stack= createStackNavigator();

function App(){
        return(
            <NavigationContainer>
                <Stack.Navigator screenOptions={{header : ()=> null}} >
                    <Stack.Screen name="home" component={Home}/>
                    <Stack.Screen name="signin" component={Signin} />
                    <Stack.Screen name="login" component={Login} />
                    <Stack.Screen name="userpage" component={Userpage} />
                </Stack.Navigator>
            </NavigationContainer>
        )
}



export default App;
