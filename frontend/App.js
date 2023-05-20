import React from 'react';
import {StatusBar, Text, View, StyleSheet} from 'react-native';
import Navigation from './src/components/Navigation';
import {PaperProvider} from 'react-native-paper';
import {AuthProvider} from './src/context/AuthContext';


const App = () => {
    return (
        <PaperProvider>
            <AuthProvider>
                <StatusBar backgroundColor="#06bcee"/>
                <Navigation/>
            </AuthProvider>
        </PaperProvider>
    );
};


export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
