import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading } from "native-base";
import { User } from "@/Services";
import { SafeAreaView } from "react-native-safe-area-context";
import { MagnifyingGlassIcon, CameraIcon } from "react-native-heroicons/solid";
import { ImageComponent } from "@/Components/Image";
import { themeColors } from "@/Theme/Variables";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import { Inspiration } from "./Inspiration";
import { Network } from "./Network";


const Toptabs = createMaterialTopTabNavigator();

export interface IHomeProps {
  data: User | undefined;
  isLoading: boolean;
}

export const Home = (props: IHomeProps) => {
  const navigation = useNavigation();
  const { data, isLoading } = props;
  return (
    <SafeAreaView className={`flex-1 bg-[${themeColors.bgColor}]`}>
      <View className="m-3 flex-row justify-between items-center">
        <Pressable onPress={()=>navigation.navigate('Setting' as never)}>
          <ImageComponent
            source={{ uri: "https://source.unsplash.com/random" }}
            variant="circle"
            size="xs"
          />
        </Pressable>
        <View className="w-3/4 flex-1 flex-row justify-start items-center mx-3 bg-[#8C8C8C] px-2.5 h-10 rounded-lg">
          <MagnifyingGlassIcon size={26} color={"white"} />
          <Pressable style={styles.input} onPress={() => navigation.navigate('Category')}>
            <Text>Go vao ten cac nguyen lieu...</Text>
          </Pressable>
        </View>
        <CameraIcon size={30} color={"white"} />
      </View>
      <Toptabs.Navigator
        screenOptions={{
          tabBarLabelStyle: { color: "white" },
          tabBarStyle: { backgroundColor: `${themeColors.bgColor}` },
          tabBarIndicatorStyle: { backgroundColor: "orange" },
        }}
      >
        <Toptabs.Screen name="Các bạn bếp" component={Network} />
        <Toptabs.Screen name="Kho cảm hứng" component={Inspiration} />
      </Toptabs.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    color: "white",
    paddingLeft: 10,
  },
});
