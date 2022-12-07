
import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PersonalDetails from "./navigation/persondetails";
import IDProof from "./navigation/idproof";
import BankDetails from "./navigation/bankdetails";
const Stack= createStackNavigator();
 
function App(){
        return(
            <NavigationContainer>
                <Stack.Navigator screenOptions={{header : ()=> null}} >
                    <Stack.Screen name="personalDetails" component={PersonalDetails}/>
                    <Stack.Screen name="idProof" component={IDProof} />
                    <Stack.Screen name="bankDetails" component={BankDetails} />
                </Stack.Navigator>
            </NavigationContainer>
        
        )
}

export default App;

//