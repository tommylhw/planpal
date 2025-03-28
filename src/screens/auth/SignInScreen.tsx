import React, { useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  SafeAreaView,
  Image,
  TextInput,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { Divider } from "../../../gluestack/ui/divider";

const SignInScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleOnFocus = (
    event: NativeSyntheticEvent<TextInputFocusEventData>
  ) => {
    event.target.setNativeProps({
      style: {
        boxShadow: "2px 2px 10px 2px rgba(0,0,0,0.02)",
      },
    });
  };

  const handleOnBlur = (
    event: NativeSyntheticEvent<TextInputFocusEventData>
  ) => {
    event.target.setNativeProps({
      style: {
        boxShadow: "none",
      },
    });
  };

  return (
    <SafeAreaView className="bg-surface">
      <StatusBar className="bg-surface" />
      <View className="w-full h-full flex justify-start items-center bg-surface px-8">
        <View className="flex flex-row items-center justify-center gap-[10px]">
          <Image
            source={require("../../assets/icon/app_icon.png")}
            alt="App Icon"
            className="w-[50px] h-[50px]"
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/icon/app_name_dark.png")}
            alt="App Name"
            className="w-[140px]"
            resizeMode="contain"
          />
        </View>

        <View className="w-full flex justify-center items-center mt-[70px] gap-5">
          <View className="w-full flex justify-center items-start">
            <Text className="mx-[4px] text-on-surface font-Poppins_Regular">
              Email
            </Text>
            <TextInput
              className="w-full px-4 py-5 bg-white rounded-[10px] mt-2 transition-all duration-200 ease-in-out"
              onChangeText={setEmail}
              value={email}
              autoFocus
              autoCapitalize="none"
              autoCorrect={false}
              cursorColor={"#000"}
              keyboardType="email-address"
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
            />
          </View>
          <View className="w-full flex justify-center items-start">
            <Text className="mx-[4px] text-on-surface font-Poppins_Regular">
              Password
            </Text>
            <TextInput
              className="w-full px-4 py-5 bg-white rounded-[10px] mt-2 transition-all duration-200 ease-in-out"
              onChangeText={setPassword}
              value={password}
              autoFocus
              autoCapitalize="none"
              autoCorrect={false}
              cursorColor={"#000"}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
            />
          </View>

          <View className="w-full flex justify-center items-start mt-8">
            <TouchableOpacity
              className="bg-container-dark w-full p-5 flex justify-center items-center rounded-full"
              onPress={() => {
                // Handle sign in logic
              }}
            >
              <Text className="text-on-container-dark text-[17px] font-Poppins_Black font-bold">
                Sign In
              </Text>
            </TouchableOpacity>
            <View className="flex flex-row items-center gap-2 justify-center mt-4 w-full">
              <Text className="text-on-surface">or</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
