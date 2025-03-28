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
} from "react-native";

const AccountConfirmationScreen = () => {
  return (
    <SafeAreaView className="bg-surface">
      <StatusBar className="bg-surface" />
      <View className="w-full h-full flex justify-start items-center bg-surface">
        <View className="flex items-center justify-center gap-[16px] mt-[170px]">
          <Image
            source={require("../../assets/icon/app_icon.png")}
            alt="App Icon"
            className="w-[120px] h-[120px]"
            resizeMode="contain"
          />
          <View className="flex items-center justify-center">
            <Image
              source={require("../../assets/icon/app_name_dark.png")}
              alt="App Name"
              className="w-[200px]"
              resizeMode="contain"
            />
            <Text className="text-[14px]" style={{
              fontFamily: "Poppins Regular",
            }}>Your self management partner</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AccountConfirmationScreen;
