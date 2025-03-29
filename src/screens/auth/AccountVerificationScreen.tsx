import React, { useState, useEffect, useRef } from "react";
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
  TouchableOpacity,
} from "react-native";

// backend
import { AuthConfirmAccount } from "../../utils/auth";

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

const AccountVerificationScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const dispatch = useDispatch();
  const { email, password } = route.params;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [warning, setWarning] = useState<string>("");

  const inputRefs = useRef<any>([]);
  const [confirmationCode, setConfirmationCode] = useState<string>("");

  const HandleTextChange = (text: string, index: number) => {
    if (text.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    const updatedCode =
      confirmationCode.slice(0, index) +
      text +
      confirmationCode.slice(index + 1);
    setConfirmationCode(updatedCode);
  };

  const HandleBackspacePress = (index: number) => {
    if (index > 0) {
      inputRefs.current[index - 1].clear();
      inputRefs.current[index - 1].focus();
    }

    const updatedCode =
      confirmationCode.slice(0, index - 1) + confirmationCode.slice(index);
    setConfirmationCode(updatedCode);
  };

  const HandleConfirmation = async () => {
    try {
      setIsLoading(true);
      console.log("HandleConfirmation: ", email, password, confirmationCode);

      const action = await AuthConfirmAccount(email, confirmationCode);

      if (action == "CONFIRM_ACCOUNT_SUCCESS") {
        console.log("Account confirmed");
        setIsLoading(false);
        dispatch(setIsSignedIn(true));
      }
    } catch (error) {
      console.error("Error at HandleVerification: ", error);
      // setWarning(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (confirmationCode.length === 6) {
      console.log("Confirmation Code:", confirmationCode);
      HandleConfirmation();
    }
  }, [confirmationCode]);

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
        <View className="w-full flex mt-[50px]">
          <View className="flex items-center justify-center gap-[16px] w-full">
            <View className="px-6 py-[6px] bg-[#F5D8C5]  rounded-full">
              <Text className="text-primary font-black">Verify</Text>
            </View>
            <Text className="font-light text-on-surface-container">
              Enter the 6-digits cod to verify your account
            </Text>
          </View>

          <View className="w-full flex flex-row justify-center gap-[10px] mt-8">
            {[...Array(6)].map((_, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                className="w-[50px] h-[60px] bg-white rounded-[10px] text-center text-[24px] font-bold shadow-white-shadow"
                maxLength={1}
                keyboardType="numeric"
                onChangeText={(text) => HandleTextChange(text, index)}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === "Backspace") {
                    HandleBackspacePress(index);
                  }
                }}
                value={confirmationCode[index] || ""}
                autoFocus={index === 0}
              />
            ))}
          </View>

          <TouchableOpacity
            className="bg-container-dark w-full p-5 flex justify-center items-center rounded-full mt-[80px]"
            onPress={() => HandleConfirmation()}
          >
            <Text className="text-on-container-dark text-[17px] font-Poppins_Black font-bold">
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AccountVerificationScreen;
