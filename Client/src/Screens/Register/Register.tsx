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
import { UserType } from "@/Components/Context/type";
import { useUser } from "@/Components/Context/UserContext";

type RegisterType = {
  name: string,
  username: string,
  password: string,
  confirmPass: string,
}

enum Error {
  NAME = 'Name already exist',
  USERNAME = "Username already exist",
  CONFIRM = 'Password not match',
  EMPTY = 'Missing infomation'
}


export const Register = () => {
  const navigation = useNavigation();
  // name: string,
  // id: string,
  // avatar: string,
  // myDishes: RecipeType[]
  // saveDishes: RecipeType[]
  // username: string,
  // password: string

  const [register, setRegister] = useState<RegisterType>({} as RegisterType)
  const [error, setError] = useState<string>('')

  const {setUserData} = useUser()

  const checkRegister = () => {
    if (register.name === '' || register.username === '' || register.password === '' || register.confirmPass === '') {
      setError(Error.EMPTY)
    }

    else if (register.confirmPass !== register.password) {
      setError(Error.CONFIRM)
    }

    else if (userData.filter(i => i.username === register.username).length > 0) {
      setError(Error.USERNAME)
    }

    else if (userData.filter(i => i.name === register.name).length > 0) {
      setError(Error.NAME)
    }
    
    else {
      const user: UserType = {
        name: register.name,
        id: 'user_' + (Math.random() + 1).toString(36).substring(7),
        avatar: "https://source.unsplash.com/random",
        myDishes: [],
        saveDishes: [],
        username: register.username,
        password: register.password
      }
      setUserData(user)
      setRegister({} as RegisterType)
      setError('')
      navigation.navigate('Main')

    }
  }

  return (
    <SafeAreaView
      className={`flex-1 bg-[${themeColors.bgColor}] flex w-full justify-center items-center`}
    >
      <View className="flex justify-end items-center h-2/5  w-3/4">
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
      <View className="flex h-3/5  w-3/4">
        <View className=" flex w-full flex-col">
          <TextInput
            placeholder="Name"
            placeholderTextColor={`#9C9C9C`}
            className="text-white border-b-2 border-white text-lg pb-1 mb-4"
            onChangeText={e => setRegister({...register, 'name': e})}
          ></TextInput>
          <TextInput
            placeholder="Username"
            placeholderTextColor={`#9C9C9C`}
            className="text-white border-b-2 border-white text-lg pb-1 my-4"
            onChangeText={e => setRegister({...register, 'username': e})}

          ></TextInput>
          <TextInput
            placeholder="Password"
            placeholderTextColor={`#9C9C9C`}
            className="text-white border-b-2 border-white text-lg pb-1 my-4"
            onChangeText={e => setRegister({...register, 'password': e})}

          ></TextInput>
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor={`#9C9C9C`}
            className="text-white border-b-2 border-white text-lg pb-1 my-4"
            onChangeText={e => setRegister({...register, 'confirmPass': e})}

          ></TextInput>
          {
            error !== '' &&           
            <View>
              <Text className='text-sm  text-red-500'>{error}</Text>
            </View>
          }
          <TouchableOpacity
            onPress={() => checkRegister()}
            className="w-full bg-[#F66033] rounded-xl py-3 justify-center items-center my-3"
          >
            <Text className=" text-xl text-white">Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(RootScreens.LOGIN)}
          >
            <Text className="text-sm text-[#F66033] my-2">
              Already have an account? Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
