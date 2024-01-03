
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable, ScrollView, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading } from "native-base";
import { User } from "@/Services";
import { SafeAreaView } from "react-native-safe-area-context";
import { MagnifyingGlassIcon, ArrowLeftIcon, XMarkIcon, ArrowRightIcon } from "react-native-heroicons/solid";
import { LightBulbIcon } from "react-native-heroicons/outline";

import { ImageComponent } from "@/Components/Image";
import { themeColors } from "@/Theme/Variables";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Network } from "../Home/Network";
import { Inspiration } from "../Home/Inspiration";
import { tags } from "../Home/data";

import { LinearGradient } from 'expo-linear-gradient'
import { GridView } from "@/Components/GridView";
import { RecipeTagType, RecipeType } from "../Home/type";


const Toptabs = createMaterialTopTabNavigator();

export interface IHomeProps {
  data: User | undefined;
  isLoading: boolean;
}

export const Category = (props: IHomeProps) => {
    const navigation = useNavigation();
    const [focus, setFocus] = useState<boolean>(true)
    const [value, setValue] = useState<string>('')
    
    const filterData = (value: string) => {
        const resultArray = value.split(',').map(item => item.trim());
        let testArr: RecipeType[] = tags.flatMap(tag => tag.recipeList)
        resultArray.forEach(item => {
            testArr = testArr.filter(i => i.ingredient.includes(item.toLowerCase()))
        })

        return testArr
    }

    const handlePress = (input: string) => {
        setFocus(false)
        setValue('')
        navigation.navigate('CategorySearch', {input})
    }

    return (
        <View className={`bg-[${themeColors.bgColor}] flex-1`}>
            <View className="m-3 flex-row justify-between items-center relative">
                <Pressable className='w-3/4 flex-1 flex-row justify-start items-center mx-1 bg-[#8C8C8C] px-2.5 h-12 rounded-lg '
                    onPress={() => setFocus(true)}            >
                    <MagnifyingGlassIcon size={26} color={"white"} />
                    <Text style={{
                            color: 'white',
                            borderRadius: 8,
                            paddingLeft: 10,
                            flex: 1,
                        }}
                    >
                        Gõ vào tên các nguyên liệu...
                    </Text>
                </Pressable>
            </View>
            {
                focus && 
                <View className={`absolute top-0 bg-black w-full z-10 h-screen flex flex-cols`}>
                    <View className='flex flex-row bg-[#212121] h-14 items-center px-4'>
                        <ArrowLeftIcon size={20} color={"white"} onPress={() => {setFocus(false), setValue('')}}/>
                        <TextInput
                            placeholder="Gõ vào tên các nguyên liệu..."
                            style={{
                                color: 'white',
                                height: '100%',
                                borderRadius: 8,
                                paddingLeft: 24,
                                flex: 1,
                                fontSize: 18,
                            }}
                            placeholderTextColor={'white'}
                            onChangeText={e => setValue(e)}
                            value={value}
                            autoFocus={true}
                            onSubmitEditing={() => console.log('a')}
                            
                        />
                        {
                            value !== '' && 
                            <Pressable onPress={() => setValue('')}>
                                <XMarkIcon size={20} color={"white"} />
                            </Pressable>
                        }
                    </View>
                    {
                        value !== '' &&
                        <View className='m-3'>
                            {
                                filterData(value).map((tag, key) => (
                                    <Pressable className='flex flex-row items-center py-2 justify-between'
                                        onPress={() => handlePress(tag.name)}
                                        key={key}
                                    >
                                        <View className='flex flex-row items-center'>
                                            <MagnifyingGlassIcon size={24} color={"white"}  />
                                            <Text className='text-white pl-2'>{tag.name}</Text>
                                        </View>
                                        <Pressable>
                                            <ArrowRightIcon size={18} color={"white"} />
                                        </Pressable>
                                    </Pressable>
                                ))
                            }
                            <View>
                                <Pressable
                                    onPress={() => handlePress(value)}
                                >
                                    <View className='flex flex-row items-start justify-between'>
                                        <View className='pt-1'>
                                            <LightBulbIcon size={24} color={"white"} />
                                        </View>
                                        <Text className='text-white px-2 text-left flex-1' style={{flexShrink: 1}}>Tìm công thức: {value}</Text>
                                        
                                        <View className='pt-1'>
                                            <ArrowRightIcon size={20} color={"white"}  />
                                        </View>

                                    </View>
                                </Pressable>
                            </View>
                        </View>
                
                    }
                    
                </View>
            }

            <ScrollView className='mx-4 h-100'>
            <View>
                <Text className=" text-[22px] font-bold mt-4 mb-[17px] text-white">
                    Lịch sử tìm kiếm
                </Text>
                <Text className=" text-[17px] mb-[10px] text-white">
                Tìm kiếm gần đây của bạn
                </Text>
                <View className="flex-cols justify-between items-center">
                    {
                        tags.flatMap(tag => tag.recipeList).slice(0, 2).map((tag, key) => (
                            <View key={key} className='w-full flex-1 flex flex-row justify-start items-center bg-[#323232] h-16 rounded-lg my-2'>
                                <View className="w-1/4">
                                <ImageBackground 
                                    source={{uri: tag.imgUrl}} 
                                    resizeMode="cover"
                                    style={{
                                        width: '100%',  
                                        height: '100%'
                                    }} 
                                    className="relative"
                                    imageStyle={{ borderTopLeftRadius: 8, borderBottomLeftRadius: 8}}
                                >   
                                    
                                </ImageBackground>
                                </View>
                                <View className="flex-1 flex flex-cols pl-4 justify-around h-3/4">
                                    <Text style={styles.recipeName}>{tag.name}</Text>
                                    <Text className='text-white'>Today</Text>
                                </View>
                            </View>
                        ))
                    }
        
                </View>
            </View>
            <View>
                <Text className=" text-[22px] font-bold mt-[25px] mb-[17px] text-white">
                    Món tìm kiếm phổ biến hôm nay
                </Text>
            </View>
            <View className='w-full h-screen mb-6'>
                    <GridView data={tags.flatMap(tag => tag.recipeList)} cols={2} renderItem={(item) =>
                        <View className='w-full h-full'>
                            <ImageBackground 
                                source={{uri: `${item.imgUrl}`}} 
                                resizeMode="cover"
                                style={{
                                    width: '100%',
                                    height: '100%'
                                }} 
                                className="relative flex-1"
                                imageStyle={{ borderRadius: 8}}
                            >
                                <LinearGradient
                                    colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.1)', 'rgba(0,0,0,0.3)']} // Màu của gradient
                                    style={{ flex: 1 }}
                                >
                                    <View className="absolute bottom-2 left-3 flex-column">
                                        <View className="flex-row items-center"> 
                                            <Text style={styles.recipeName}>
                                                {item.name.toLocaleUpperCase()}
                                            </Text>
                                        </View>

                                    </View>
                                </LinearGradient>
                            </ImageBackground>

                        </View> 
                    } />
                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
  input: {
    color: "white",
    paddingLeft: 10,
  },
  recipeName: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14
  }
});