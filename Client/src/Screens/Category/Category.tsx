// import React from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   FlatList,
//   TouchableOpacity,
// } from "react-native";
// import { FaArrowRight } from "react-icons/fa";
// import { themeColors } from "@/Theme/Variables";
// import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
// import { SafeAreaView } from "react-native-safe-area-context";
// import {
//   RecentSearch,
//   RecentDishes,
//   RecentToday,
// } from "@/Components/DetailPage";
// import { dataRecentDishes, dataToday } from "./data";
// import { useNavigation } from "@react-navigation/native";

// const Category = () => {
//   const navigation = useNavigation();
//   return (
//     <SafeAreaView className={`w-full flex-1 bg-[${themeColors.bgColor}] `}>
//       <View className=" mx-[10px] h-[50px]  flex-row justify-start items-center my-[8px]  bg-[#8C8C8C] px-2.5  rounded-lg">
//         <MagnifyingGlassIcon size={24} color={"white"} />
//         <Text className=" text-white block ms-5 text-[17px]">
//           Gõ vào tên các nguyên liệu...
//         </Text>
//       </View>
//       <ScrollView className="bg-[#000000] px-[13px] text-white">
//         <Text className=" text-[22px] font-bold mt-[25px] mb-[17px] text-white">
//           Lịch sử tìm kiếm
//         </Text>
//         <View>
//           <View className="flex flex-row justify-between">
//             <Text className=" text-[17px] mb-[10px] text-white">
//               Tìm kiếm gần đây của bạn
//             </Text>
//             <FaArrowRight size={18} className="text-white text-[25px]" />
//           </View>
//           <FlatList
//             data={dataRecentDishes}
//             renderItem={({ item }) => (
//               <RecentSearch name={item.name} source={item.source} />
//             )}
//             keyExtractor={(item, index) => index.toString()}
//           />
//           <View className="flex flex-row justify-between mt-[15px]">
//             <Text className=" text-[17px] mb-[10px] text-white">
//               Món bạn đã xem gần đây
//             </Text>
//             <TouchableOpacity
//               onPress={() => {
//                 navigation.navigate("RecentCategory");
//               }}
//             >
//               <FaArrowRight size={18} className="text-white text-[25px]" />
//             </TouchableOpacity>
//           </View>
//           <FlatList
//             className="flex flex-row"
//             data={dataRecentDishes}
//             renderItem={({ item }) => (
//               <RecentDishes
//                 name={item.name}
//                 source={item.source}
//                 author={item.author}
//               />
//             )}
//             keyExtractor={(item, index) => index.toString()}
//             horizontal
//           />
//         </View>
//         <Text className=" text-[22px] font-bold mt-[25px] mb-[17px] text-white">
//           Món tìm kiếm phổ biến hôm nay
//         </Text>
//         <View className=" flex flex-row flex-wrap w-full">
//           {dataToday.map((item, index) => {
//             return (
//               <RecentToday key={index} name={item.name} source={item.source} />
//             );
//           })}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export { Category };

import { useRoute } from "@react-navigation/native";
import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";


export const Category = () => {

    const route = useRoute()

    //const {name, owner, ownerAvatar, like, heart, clap, imgUrl, ingredient} = route?.params?.recipe
    return (
        <Text>
            fix them
        </Text>
    )
}
