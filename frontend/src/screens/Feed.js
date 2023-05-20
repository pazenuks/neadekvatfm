import React, {useContext} from 'react';
import {name as appName} from '../../app.json';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext.js';
import {AppRegistry} from 'react-native';
import {useTheme} from 'react-native-paper';
import {PaperProvider} from 'react-native-paper';

const Feed = () => {
    const {userInfo, isLoading, logout} = useContext(AuthContext);
    const theme = useTheme();

    return (
        <View style={[styles.container,
            {backgroundColor: theme.colors.primaryContainer}]}>
            <Spinner visible={isLoading}/>
            <Text style={styles.welcome}>Welcome {userInfo.user.fullname}</Text>
            <Button
                icon="logout"
                onPress={logout}
                style={styles.button}
                contentStyle={styles.buttonContent}
            >
                Logout
            </Button>
        </View>
    );
};

AppRegistry.registerComponent(appName, () => Feed);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome: {
        fontSize: 18,
        marginBottom: 8,
    },
    button: {
        position: 'absolute',
        top: 0,
        right: 0,
        borderRadius: 5,
    },
    buttonContent: {
        padding: 10,
    },
});

export default Feed;
