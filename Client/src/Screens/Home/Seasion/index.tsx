
import React from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native';
import { useRoute } from "@react-navigation/native";
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';
import { tags } from '../data';
import { GridView } from '../../../Components/GridView';
import { LinearGradient } from 'expo-linear-gradient'


export const Seasion = () => {


    const test = ['test']

    const navigation = useNavigation()

    const renderItem = () => (
      <View className='w-full p-4'>
          <GridView data={tags.flatMap(tag => tag)} cols={2} renderItem={(item) =>
              <View className='h-24'>
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
              </View>
          } />
      </View>
    );

    const renderHeader = () => (
        <View style={styles.header}>
            <ArrowLeftIcon color={'white'} onPress={() => navigation.goBack()}/>
            <Text style={styles.headerText}>Đang mùa</Text>
        </View>
    );

    return (
        <FlatList
          data={test}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          ListHeaderComponent={renderHeader}
          stickyHeaderIndices={[0]}
          className="bg-[#1b1b1b]"
        />
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
    alignItems: 'center'

  },
  headerText: {
    fontSize: 18,    
    color: 'white',
    paddingLeft: 12
  },
});

