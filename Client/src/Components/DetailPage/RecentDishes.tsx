import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

type Props = {
  name: string;
  source: string;
  author: string;
};

const RecentDishes = (item: Props) => {
  return (
    <TouchableOpacity className=" flex flex-col h-[200px]  bg-[#2F2F2F] rounded-[10px] w-[180px] mr-[15px]">
      <Image
        source={{
          uri: item.source,
        }}
        className="w-full h-[120px] rounded-tl-[10px] rounded-tr-[10px]"
      />
      <View className="flex flex-col justify-evenly h-[80px] px-[10px] pt-[8px] relative">
        <Text className="absolute top-[10px] left-[8px] text-[18px] text-white font-bold">{item.name}</Text>
        <Text className="absolute bottom-[10px] left-[8px] text-[13px] text-white ">{item.author}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecentDishes;
