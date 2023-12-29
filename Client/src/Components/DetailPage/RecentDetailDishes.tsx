import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

type Props = {
  name: string;
  source: string;
  author: string;
};

const RecentDetailDishes = (item: Props) => {
  return (
    <TouchableOpacity className=" flex flex-row w-full h-[200px]  bg-[#2F2F2F] rounded-[10px] m-[8px] ">
      <View className=" w-7/12 flex flex-col justify-evenly  px-[10px] pt-[8px] relative">
        <Text className="absolute top-[10px] left-[8px] text-[20px] text-white font-bold">
          {item.name}
        </Text>
        <Text className="text-white absolute left-[8px] top-[40px]">
          Gạo Nhật 500gr, Dầu mè 20ml, Dấm 20ml, Muối 20gr, Đường 20gr, Trứng
          chiên 100gr, Thanh cua 100gr, Dưa leo 100gr, Bơ sáp 100gr, ...
        </Text>
        <View className="h-[1px] w-11/12 absolute bottom-[50px] border-dashed bg-white"></View>
        <View className="flex flex-row items-center absolute bottom-[10px] left-[8px]">
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/00/40/22/00402207be828983fee5889803fd5d00.jpg",
            }}
            className=" rounded-full w-[33px] h-[33px] mr-[10px]"
          />
          <Text className=" text-[15px] text-white ">{item.author}</Text>
        </View>
      </View>
      <Image
        source={{
          uri: item.source,
        }}
        className="w-5/12 h-full block rounded-tr-[10px] rounded-br-[10px]"
      />
    </TouchableOpacity>
  );
};

export default RecentDetailDishes;
