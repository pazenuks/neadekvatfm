import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedScreen from '../screens/Feed';
import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {AuthContext} from '../context/AuthContext.js';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const {userInfo, splashLoading} = useContext(AuthContext);
    return (<NavigationContainer>
        <Stack.Navigator>
            {splashLoading ? (<Stack.Screen
                name="Splash Screen"
                component={SplashScreen}
                options={{headerShown: false}}
            />) : userInfo.token ? (<Stack.Screen name="Home" component={FeedScreen}/>) : (<>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{headerShown: false}}
                />
            </>)}
        </Stack.Navigator>
    </NavigationContainer>);
};

export default Navigation;
