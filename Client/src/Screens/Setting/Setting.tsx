import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import { RootScreens } from "..";
import { themeColors } from "@/Theme/Variables";
import { ButtonComponent } from "../../Components/Button";
import { ImageComponent } from "../../Components/Image";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

export const Setting = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className={`flex-1 bg-[${themeColors.bgColor}] flex w-full`}>
      <View className="w-full h-14 bg-[#606060] mt-10 mb-5 flex flex-row items-center">
        <View className="ml-5">
          <TouchableOpacity
            onPress={() => navigation.navigate(RootScreens.MAIN)}
          >
            <ArrowLeftIcon size={25} color={"white"} />
          </TouchableOpacity>
        </View>
        <View className="mx-5">
          <Text className="text-white text-xl">Cài đặt</Text>
        </View>
      </View>
      <View className="px-5 flex gap-5">
        <TouchableOpacity>
          <View>
            <Text className="text-white text-xl">Quốc gia</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Text className="text-white text-xl">Điều khoản bảo mật</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Text className="text-white text-xl">Điều khoản dịch vụ</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Text className="text-white text-xl">Các câu hỏi thường gặp</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Text className="text-white text-xl">Liên hệ</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Text className="text-white text-xl">Về BKook</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className="w-full flex items-center my-10">
        <TouchableOpacity
          onPress={() => navigation.navigate(RootScreens.LOGIN)}
        >
          <View className=" bg-white px-10 py-2 rounded-lg">
            <Text className="text-black text-xl">Thoát</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
