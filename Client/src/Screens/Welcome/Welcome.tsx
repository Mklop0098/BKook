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
        onDone={() => props.onNavigate(RootScreens.LOGIN)}
        pages={[
          {
            title: " Khám phá thế giới ẩm thực qua Bkook",
            subtitle: " Biến mỗi bữa ăn thành trải nghiệm đặc biệt",
            imageUri:
              "https://res.cloudinary.com/dyc5vrfyd/image/upload/v1703858078/bbptrxalz2eyskeaynry.jpg",
            primaryButtonTitle: "Xin chào",
          },
          {
            title: "Sáng tạo và thử nghiệm các món ngon mới",
            subtitle: "Cùng với sự hỗ trợ của BKook",
            imageUri:
              "https://res.cloudinary.com/dyc5vrfyd/image/upload/v1703858078/bbptrxalz2eyskeaynry.jpg",
            primaryButtonTitle: "Tiếp tục",
          },
          {
            title: "Nấu ăn dễ dàng hơn bao giờ hết với Bkook",
            subtitle: "Hãy bắt đầu ngay !",
            imageUri:
              "https://res.cloudinary.com/dyc5vrfyd/image/upload/v1703858078/bbptrxalz2eyskeaynry.jpg",
            primaryButtonTitle: "Bắt đầu",
          },
        ]}
        type={"fullscreen"}
        style={{
          backgroundColor: "#101213",
        }}
        titleStyle={{
          color: "#FFFFFF",
        }}
        subtitleStyle={{
          color: "#DEDEDE",
          fontWeight: "400",
        }}
        primaryButtonStyle={{
          backgroundColor: "#F66033",
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
  }
});
