import React, { useContext } from 'react';
import { name as appName } from '../../app.json';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from '../context/AuthContext.js';
import { AppRegistry } from 'react-native';
import { useTheme } from 'react-native-paper';
import { SettingsScreen } from './SettingsScreen';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FeedScreen = () => {
  const { userInfo, isLoading, logout } = useContext(AuthContext);
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.primaryContainer }]}>
      <Spinner visible={isLoading} />
      <View style={styles.contentContainer}>
        <Text style={styles.welcome}>Hi {userInfo.user.fullname}</Text>
        <Button
          icon="logout"
          onPress={logout}
          style={styles.button}
          contentStyle={styles.buttonContent}
        >
          Logout
        </Button>
      </View>
    </View>
  );
};

const Feed = () => {
  const navigation = useNavigation();
  const isFeedScreenFocused = useIsFocused();


  const handleFeedPress = () => {
    if (!isFeedScreenFocused) {
      navigation.navigate('Feed');
    }
  };

  const handleSettingsPress = () => {
    navigation.navigate('SettingsScreen');


  };

  return (
    <View style={styles.container}>
      <FeedScreen />
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navBarButton} onPress={handleFeedPress}>
          <Icon name="bars" size={25} color="black" />
          <Text>Feed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBarButton} onPress={handleSettingsPress}>
          <Icon name="gear" size={25} color="black" />
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const App = () => {
  return <Feed />;
};

AppRegistry.registerComponent(appName, () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navBarButton: {
    flex: 1,
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
  },
  button: {
    roundness: 10,
    fontSize: 18,
    position: 'absolute',
    top: 70,
    right: 15,
    borderRadius: 5,
  },
  buttonContent: {
    padding: 1,
  },
});

export default App;
