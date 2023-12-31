import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useEffect } from 'react'
import { themeColors } from "@/Theme/Variables";
import { Cog6ToothIcon, EllipsisVerticalIcon } from 'react-native-heroicons/outline'
import { MagnifyingGlassIcon, CameraIcon } from 'react-native-heroicons/solid'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MyDishes } from './MyDishes';
import { SavedDishes } from './SavedDishes';
import { useUser } from '@/Components/Context/UserContext';
const Toptabs = createMaterialTopTabNavigator()

export const Profile = () => {

    const {userInfo} = useUser()

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "#262222",
        }}>
            <View style={{
                width: "100%",
                // height: 50,
                backgroundColor: "#606060",
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}
                className='px-4 py-2'
            >
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
   
                >
                    <Image
                        source={{ uri: 'https://source.unsplash.com/random' }}
                        style={{
                            width: 40,
                            height: 40,
                            resizeMode: 'cover',
                            borderRadius: 80,
                        }}
                    />
                    <View style={{
                        marginHorizontal: 10
                    }}>
                        <Text style={{
                            fontSize: 14,
                            color: "#FFFFFF",
                            fontWeight:'bold'
                        }}>{userInfo.name}</Text>
                        <Text style={{
                            fontSize: 12,
                            color: "#FFFFFF",
                            marginTop: 5,
                        }}>{userInfo.id}</Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <View className='pr-3'>
                        <Cog6ToothIcon size={26} color={'white'}/>
                    </View>
                    <EllipsisVerticalIcon size={26} color={'white'} />
                </View>
            </View>
            <Toptabs.Navigator screenOptions={
                {
                    tabBarLabelStyle: { color: 'white' },
                    tabBarStyle: { backgroundColor: `${themeColors.bgColor}` },
                    tabBarIndicatorStyle: { backgroundColor: 'orange' }
                }}
            >
                <Toptabs.Screen name="Món của tôi" component={MyDishes} />
                <Toptabs.Screen name="Món đã lưu" component={SavedDishes} />
                
            </Toptabs.Navigator>

        </SafeAreaView>
    )
}