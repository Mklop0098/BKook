import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

type Props = {
  name: string;
  source: string;
};

const RecentSearch = (item: Props) => {
  return (
    <TouchableOpacity className=" flex flex-row h-[60px] bg-[#2F2F2F] rounded-[5px] my-[4px]">
      <Image
        source={{
          uri: item.source,
        }}
        className="w-[70px] h-full rounded-tl-[5px] rounded-bl-[5px]"
      />
      <View className="flex flex-col justify-evenly mx-3">
        <Text className="text-[18px] text-white font-bold">{item.name}</Text>
        <Text className="text-[15px] text-white">3 ngay truoc</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecentSearch;
