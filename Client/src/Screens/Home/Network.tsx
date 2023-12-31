import React, { useState } from "react";
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
import { userData } from "@/Components/Context/data";
import { useUser } from "@/Components/Context/UserContext";

type userData = {
  username: string,
  password: string
}

export const Network = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState<userData>({} as userData)

  const {setUserData} = useUser()
  const [error, setError] = useState<boolean>(true)

  const handleCheck = () => {
    const userLog = userData.filter(i => i.username === user.username && i.password === user.password)
    if ( userLog.length > 0) {
      setUserData(userLog[0])
      navigation.navigate('Main')
    }
    else setError(false)
  }

  return (
    <SafeAreaView
      className={`flex-1 bg-[${themeColors.bgColor}] flex w-full justify-center items-center`}
    >
      <View className="flex justify-end items-center w-3/4">
        <Image
          style={{
            width: 200,
            height: 200,
          }}
          source={{
            uri: "https://scontent.fvca1-2.fna.fbcdn.net/v/t1.15752-9/393960367_1467934380606701_542441178187778655_n.png?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHYrfVSf0020OFRvyLZBjeTIHuWQxj5JiQge5ZDGPkmJDNmR_srMce6duJZAZ4YL-ba5R0Xb_vV8zcmvTMId2cj&_nc_ohc=qocreHHxsdQAX8VnsFu&_nc_ht=scontent.fvca1-2.fna&oh=03_AdR2X_vKRiYtNCwHJVMyIMrlDirROKrl9ISoPoLzV0aiOg&oe=65A277A8",
          }}
        />
      </View>
      <View className="flex justify-center items-center w-3/4" />
      <Text className='py-12 text-white' style={{fontSize: 20, fontWeight: 'bold'}}>Wellcome to BKook</Text>
    </SafeAreaView>
  );
};
