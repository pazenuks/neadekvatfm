import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useNavigationState, DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const navigationState = useNavigationState(state => state);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleGestureEvent = ({ nativeEvent }) => {
    if (nativeEvent.state === State.END && nativeEvent.translationX >= 50) {
      if (navigationState.index === 0) {
        navigation.dispatch(DrawerActions.openDrawer());
      } else {
        navigation.goBack();
      }
    }
  };

  return (
    // <PanGestureHandler onGestureEvent={handleGestureEvent}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Icon name="arrow-left" size={20} color="black" />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Settings Screen</Text>
        {/* Add your settings screen content here */}
      </View>
    // </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 80,
    left: 10,
  },
  backButtonText: {
    marginLeft: 5,
  },
});

export default SettingsScreen;
