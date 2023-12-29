import { View, Text, TextInput, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { MagnifyingGlassIcon, CameraIcon } from 'react-native-heroicons/solid'
import { IntroduceImage } from '../../../constant'
import MyDishesCard from '../../Components/MyDishesCard'
export const MyDishes = () => {
    const [foods, setFoods] = useState([
        {
            id: 1,
            name: 'Cơm gà',
            url: IntroduceImage[0]
        },
        {
            id: 2,
            name: 'Thịt heo',
            url: IntroduceImage[1]
        },
        {
            id: 3,
            name: 'Bò Kho',
            url: IntroduceImage[2]
        },
        {
            id: 4,
            name: 'Bò Kho',
            url: IntroduceImage[3]
        },
        {
            id: 5,
            name: 'Bò Kho',
            url: IntroduceImage[4]
        },
    ])
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#262222",
            padding: 20,
        }}>

            <View
                style={{
                    flexDirection: 'row',
                    padding: 10,
                    borderWidth: 1,
                    borderColor: 'white',
                    borderRadius: 20,
                    backgroundColor: 'black'
                }}
            >
                <MagnifyingGlassIcon size={26} color={'white'} />
                <TextInput
                    placeholder='Tìm kiếm món ăn'
                    placeholderTextColor={'white'}
                    style={{
                        paddingLeft: 10,
                        flex: 1,
                    }}
                />
            </View>

            <FlatList
                data={foods}
                style={{
                    marginTop: 40
                }}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={({ item, index }) =>
                    <MyDishesCard item={item} index={index} />
                }
            />
        </View>
    )
}