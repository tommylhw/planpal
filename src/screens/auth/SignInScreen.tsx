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
import { withOptions } from "tailwindcss/plugin";

// Backend
import { AuthSignInWithEmail } from "../../utils/auth";

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
} from "../../stores/AuthSlice";

const SignInScreen = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const HandleSignInWithEmail = async () => {
    const res: any = await AuthSignInWithEmail(email, password);
    console.log("HandleSignInWithEmail: ", JSON.parse(res).session);

    if (JSON.parse(res).session !== null) {
      dispatch(setIsSignedIn(true));
      navigation.navigate("BottomTabNavigator");
    }
  };

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
        <View className="flex flex-row items-center justify-center gap-[10px] mt-10">
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
              onPress={() => HandleSignInWithEmail()}
            >
              <Text className="text-on-container-dark text-[17px] font-Poppins_Black font-bold">
                Sign In
              </Text>
            </TouchableOpacity>
            <View className="flex flex-row items-center gap-2 justify-center mt-4 px-5">
              <Divider className="flex-1 border-on-surface border-[0.8px]" />
              <Text className="text-on-surface">or</Text>
              <Divider className="flex-1 border-on-surface border-[0.8px]" />
            </View>
            <View className="w-full flex justify-center items-start gap-4 mt-4">
              <TouchableOpacity
                className="bg-white w-full p-5 flex flex-row justify-center items-center gap-2 rounded-full shadow-white-shadow"
                onPress={() => {
                  // Handle sign in logic
                }}
              >
                <Image
                  source={require("../../assets/icon/google.png")}
                  alt="Google Icon"
                  className="w-[24px] h-[24px]"
                  resizeMode="contain"
                />
                <Text className="text-black text-[17px] font-Poppins_Regular">
                  Sign in with Google
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-white w-full p-5 flex flex-row justify-center items-center gap-2 rounded-full shadow-white-shadow"
                onPress={() => {
                  // Handle sign in logic
                }}
              >
                <Image
                  source={require("../../assets/icon/apple.png")}
                  alt="Google Icon"
                  className="w-[24px] h-[24px]"
                  resizeMode="contain"
                />
                <Text className="text-black text-[17px] font-Poppins_Regular">
                  Sign in with Apple
                </Text>
              </TouchableOpacity>
            </View>
            <View className="flex flex-row items-center justify-center mt-10 w-full">
              <Text className=" text-on-surface-container">
                Dont have an account?{" "}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("AuthNavigator_SignUpScreen")
                }
              >
                <Text className="underline">Sign up here</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
