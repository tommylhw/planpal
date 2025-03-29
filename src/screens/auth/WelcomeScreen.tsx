import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

const WelcomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView className="bg-surface">
      <StatusBar className="bg-surface" />
      <View className="w-full h-full flex justify-between items-center bg-surface px-8 pb-5">
        <View className="flex flex-row items-center justify-center gap-[10px]">
          <Image
            source={require("../../assets/icon/app_icon.png")}
            alt="App Icon"
            className="w-[50px]"
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/icon/app_name_dark.png")}
            alt="App Name"
            className="w-[140px]"
            resizeMode="contain"
          />
        </View>
        <View className="flex flex-col items-center justify-center gap-[16px] w-full">
          <TouchableOpacity
            className="bg-container-dark w-full p-5 flex justify-center items-center rounded-[10px]"
            onPress={() => navigation.navigate("AuthNavigator_SignUpScreen")}
          >
            <Text
              className="text-on-container-dark text-[17px] font-Poppins_Black font-bold"
              onPress={() => navigation.navigate("AuthNavigator_SignUpScreen")}
            >
              Create Account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-white w-full p-5 flex justify-center items-center rounded-[10px]"
            style={{
              boxShadow: "2px 2px 10px 2px rgba(0,0,0,0.02)",
            }}
            onPress={() => navigation.navigate("AuthNavigator_SignInScreen")}
          >
            <Text className="text-container-dark text-[17px] font-Poppins_Regular font-bold">
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
