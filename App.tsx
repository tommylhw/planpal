/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import type { PropsWithChildren } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import "./global";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const App = () => {
  return (
    <View className="w-screen h-screen bg-surface flex items-center justify-center">
      <Text className="text-container-dark font-bold text-[20px]">
        Hello World
      </Text>
    </View>
  );
};

export default App;
