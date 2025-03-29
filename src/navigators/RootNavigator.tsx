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

// Redux Toolkit
import { useSelector, useDispatch } from "react-redux";
import {
  setIsSignedIn,
  setCurrentUserEmail,
  setCurrentUserPassword,
  setCurrentUserName,
  setCurrentUserID,
  setCurrentUserInfo,
  selectIsSignedIn,
  selectCurrentUserEmail,
  selectCurrentUserPassword,
  selectCurrentUserName,
  selectCurrentUserID,
  selectCurrentUserInfo,
} from "../stores/AuthSlice";

// Screens
import WelcomeScreen from "../screens/auth/WelcomeScreen";
import SignInScreen from "../screens/auth/SignInScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import AccountVerificationScreen from "../screens/auth/AccountVerificationScreen";

const SplahNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplahNavigator_SplashScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="SplahNavigator_SplashScreen"
        component={SplashScreen}
      />
    </Stack.Navigator>
  );
};

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AuthNavigator_WelcomeScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="AuthNavigator_SplashScreen"
        component={SplashScreen}
      />
      <Stack.Screen
        name="AuthNavigator_WelcomeScreen"
        component={WelcomeScreen}
        options={{
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="AuthNavigator_SignInScreen"
        component={SignInScreen}
        options={{
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="AuthNavigator_SignUpScreen"
        component={SignUpScreen}
        options={{
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="AuthNavigator_AccountVerificationScreen"
        component={AccountVerificationScreen}
      />
      <Stack.Screen
        name="AuthNavigator_BottomTabNavigator"
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return <View></View>;
};

const RootNavigator = () => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(selectIsSignedIn);

  const [isLoading, setIsLoading] = useState(true);

  const HandleCheckAuthStatus = async () => {
    setIsLoading(true);

    const res: any = await AuthGetCurrentUser();
    console.log("Signed in user:", JSON.stringify(res));
    console.log("res?.data.session:", res?.data.session);
    if (res?.data.session != null) {
      dispatch(setIsSignedIn(true));
      dispatch(setCurrentUserID(res.userId));
    } else {
      dispatch(setIsSignedIn(false));
    }

    setIsLoading(false);
  };

  useEffect(() => {
    HandleCheckAuthStatus();
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? (
        <SplahNavigator />
      ) : isSignedIn ? (
        <BottomTabNavigator />
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;
