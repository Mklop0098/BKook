import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

type Props = {
  name: string;
  source: string;
};

const RecentToday = (item: Props) => {
  return (
    <TouchableOpacity className=" w-1/2 h-[120px] rounded-[5px] relative p-[5px] shadow">
      <Image
        source={{
          uri: item.source,
        }}
        className="w-full h-full rounded-[5px] opacity-70"
      />
      <Text className="text-[18px] text-white font-bold absolute bottom-[15px] left-[20px]">
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default RecentToday;
