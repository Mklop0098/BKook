import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { themeColors } from "@/Theme/Variables";
import { Cog6ToothIcon, EllipsisVerticalIcon } from 'react-native-heroicons/outline'
import { MagnifyingGlassIcon, CameraIcon } from 'react-native-heroicons/solid'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import SavedDishes from './SavedDishes';
import { MyDishes } from './MyDishes';
const Toptabs = createMaterialTopTabNavigator();

export const Profile = () => {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "#262222",
        }}>
            <View style={{
                width: "100%",
                // height: 50,
                backgroundColor: "#606060",
                padding: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',

            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Image
                        source={{ uri: 'https://source.unsplash.com/random' }}
                        style={{
                            width: 50,
                            height: 50,
                            resizeMode: 'cover',
                            borderRadius: 80,
                        }}
                    />
                    <View style={{
                        marginHorizontal: 10
                    }}>
                        <Text style={{
                            fontSize: 12,
                            color: "#FFFFFF",
                        }}>Nam Thanh Chanel</Text>
                        <Text style={{
                            fontSize: 12,
                            color: "#FFFFFF",
                            marginTop: 10,
                        }}>@nam_2013830</Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Cog6ToothIcon size={35} color={'white'} />
                    <EllipsisVerticalIcon size={35} color={'white'} />
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