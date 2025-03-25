import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Backend
import { AuthGetCurrentUser } from "../utils/auth";

// Screens
import SplashScreen from "../screens/auth/SplashScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const SplahNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <SplahNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
