
import React from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useRoute } from "@react-navigation/native";
import {ArrowLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';
import { tags } from '../data';
import { GridView } from '../../../Components/GridView';
import { LinearGradient } from 'expo-linear-gradient'
import { themeColors } from '@/Theme/Variables';


export const Seasion = () => {


    const test = ['test']

    const navigation = useNavigation()

    return (
      <View className={`bg-[${themeColors.bgColor}] flex-1 `}>
        <View className="flex-row justify-between items-center">
          <View style={styles.header}>
              <ArrowLeftIcon color={'white'} onPress={() => navigation.goBack()}/>
              <Text style={styles.headerText}>Đang mùa</Text>
          </View>
        </View>
        <ScrollView>
          <View className='w-full p-4'>
            <GridView data={tags.flatMap(tag => tag)} cols={2} renderItem={(item) =>
                <TouchableOpacity className='h-24'
                  onPress={() => navigation.navigate("CategorySearch", {input: item.name.toLocaleLowerCase()})}
                >
                  <ImageBackground 
                      source={{uri: `${item.thumbnail}`}} 
                      resizeMode="cover"
                      style={{
                          width: '100%',
                          height: '100%'
                      }} 
                      className="relative flex-1"
                      imageStyle={{ borderRadius: 8}}
                  >
                      <LinearGradient
                          colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.1)', 'rgba(0,0,0,0.3)']}
                          style={{ flex: 1 }}
                      >
                          <View className="absolute bottom-5 left-3 flex-column">
                              <View className="flex-row items-center"> 
                                  <Text className="text-white font-semibold">
                                      {item.name.toLocaleUpperCase()}
                                  </Text>
                              </View>
                          </View>
                      </LinearGradient>
                  </ImageBackground>
                </TouchableOpacity>
            } />
          </View>
        </ScrollView>
      </View>
    );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomColor: '#ccc',
  },
  header: {
    backgroundColor: 'black',
    padding: 20,
    borderBottomColor: '#ccc',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'

  },
  headerText: {
    fontSize: 18,    
    color: 'white',
    paddingLeft: 12
  },
});

