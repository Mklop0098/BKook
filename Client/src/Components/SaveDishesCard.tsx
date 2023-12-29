import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MagnifyingGlassIcon, CameraIcon } from 'react-native-heroicons/solid'
import { Cog6ToothIcon, EllipsisVerticalIcon, HeartIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
export default function SaveDishesCard(props) {
    const { item, index } = props
    
    return (
        <TouchableOpacity
            style={{
                width: '43%',
                height: 350,
                marginHorizontal: 15,
                marginVertical: 15,
                backgroundColor: "#1B0C0C",
                borderRadius: 10,
            }}
          
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'

                }}
            >

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 5,
                    }}
                >
                    <Image
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 50,
                            resizeMode: 'contain'
                        }}
                        source={item.avatar}
                    />
                    <Text style={{
                        color: 'white',
                        marginLeft: 10
                    }}>{item.name}</Text>
                </View>
                <EllipsisVerticalIcon size={35} color={'white'} />

            </View>
            <Image

                source={item.image}
                style={{
                    width: 160,
                    height: 200,
                    marginTop: 10,
                    resizeMode: 'cover',
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                }}
            />
            <View
                style={{
                    height: '25%',
                    // backgroundColor: 'blue',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            >
                <Text
                    style={{
                        color: 'white',
                        fontSize: 20,
                    }}
                >{item.description}</Text>
                <HeartIcon size={28} color={'white'} />
            </View>
        </TouchableOpacity>
    )
}