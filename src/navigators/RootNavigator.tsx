import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Backend
import {AuthGetCurrentUser} from '../utils/auth';

// icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RootNavigator = () => {
  return (
    <View></View>
  );
}

export default RootNavigator;