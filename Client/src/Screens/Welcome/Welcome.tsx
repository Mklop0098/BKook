import React from "react";
// import { i18n, LocalizationKey } from "@/Localization";
import { View, Text, StyleSheet, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "native-base";
import { RootScreens } from "..";
import { OnboardFlow } from "react-native-onboard";
import { themeColors } from "@/Theme/Variables";

export const Welcome = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  return (
    <View style={styles.container}>
      <OnboardFlow
        // onDone={() => props.onNavigate(RootScreens.MAIN)}
        onDone={() => props.onNavigate(RootScreens.LOGIN)}
        pages={[
          {
            imageComponent: (
              <View className="w-full ">
                <View className=" mb-16 w-full flex items-center">
                  <Image
                    style={styles.image}
                    source={{
                      uri: "https://res.cloudinary.com/dyc5vrfyd/image/upload/v1703858078/bbptrxalz2eyskeaynry.jpg",
                    }}
                  />
                </View>
                <View className="w-full flex items-center">
                  <Text className="text-3xl text-center font-bold mb-16 text-white">
                    Khám phá thế giới ẩm thực qua ứng dụng Bkook{" "}
                  </Text>
                  <Text className="text-xl text-center font-light text-white">
                    Biến mỗi bữa ăn thành trải nghiệm đặc biệt
                  </Text>
                </View>
              </View>
            ),
          },
          {
            imageComponent: (
              <View className="w-full ">
                <View className=" mb-16 w-full flex items-center">
                  <Image
                    style={styles.image}
                    source={{
                      uri: "https://res.cloudinary.com/dyc5vrfyd/image/upload/v1703858078/bbptrxalz2eyskeaynry.jpg",
                    }}
                  />
                </View>
                <View className="w-full flex items-center">
                  <Text className="text-3xl text-center font-bold mb-16 text-white">
                    Sáng tạo và thử nghiệm các món ngon mới
                  </Text>
                  <Text className="text-xl text-center font-light text-white">
                    Cùng với sự hỗ trợ của Blook
                  </Text>
                </View>
              </View>
            ),
          },
          {
            imageComponent: (
              <View className="w-full ">
                <View className=" mb-16 w-full flex items-center">
                  <Image
                    style={styles.image}
                    source={{
                      uri: "https://res.cloudinary.com/dyc5vrfyd/image/upload/v1703858078/bbptrxalz2eyskeaynry.jpg",
                    }}
                  />
                </View>
                <View className="w-full flex items-center">
                  <Text className="text-3xl text-center font-bold mb-16 text-white">
                    Nấu ăn dễ dàng hơn bao giờ hết với Bkook
                  </Text>
                  <Text className="text-xl text-center font-light text-white">
                    Hãy bắt đầu ngay
                  </Text>
                </View>
              </View>
            ),
          },
        ]}
        type={"fullscreen"}
        style={{
          backgroundColor: "#161616",
        }}
        primaryButtonStyle={{
          backgroundColor:"#F66033"
        }}
        paginationColor="#fff"
        paginationSelectedColor="#F66033"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100vh",
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 300,
    width: "100vw",
  },
});
