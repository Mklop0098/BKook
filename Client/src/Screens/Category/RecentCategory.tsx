import React from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "@/Theme/Variables";
import { FaArrowLeft } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RecentDetailDishes } from "@/Components/DetailPage";
import { dataRecentDishes } from "./data";
import { useNavigation } from "@react-navigation/native";

const RecentCategory = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className={`w-full flex-1 bg-[${themeColors.bgColor}] `}>
      <View className="  h-[60px] w-full flex flex-row items-center   bg-[#3f3f3f] relative  ">
        <TouchableOpacity
          className="absolute left-[10px] text-white"
          onPress={() => {
            navigation.navigate("Category" as never);
          }}
        >
          <FaArrowLeft size={18} className="text-white " />
        </TouchableOpacity>

        <Text className=" text-white  ml-[100px] text-[18px] font-bold">
          Món đã xem gần đây
        </Text>
        <View className="absolute right-[10px] text-white">
          <BsThreeDotsVertical size={20} className="text-white " />
        </View>
      </View>

      <ScrollView className="bg-[#000000] px-[13px] text-white pt-[15px]">
        <FlatList
          data={dataRecentDishes}
          renderItem={({ item }) => (
            <RecentDetailDishes
              name={item.name}
              source={item.source}
              author={item.author}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        ></FlatList>
      </ScrollView>
    </SafeAreaView>
  );
};

export { RecentCategory };
