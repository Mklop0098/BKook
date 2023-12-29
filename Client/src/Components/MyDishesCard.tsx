import { View, Text, Image } from 'react-native'
import React from 'react'

export default function MyDishesCard(props) {
    const { item, index } = props
    console.log(item.url)
    return (
        <View style={{ 
            marginHorizontal: 15,
            marginVertical: 20,
        }}>
            <Image
                source={item.url}
                style={{
                    width: 150,
                    height: 150,
                    resizeMode: 'cover',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                }}
            />
            <View
                style={{
                    backgroundColor: '#414141',
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15
                }}
            >
                <Text 
                    style={{
                        color: 'white',
                        fontSize: 20,
                        textAlign: 'center'
                    }}
                >{item.name}</Text>
            </View>
        </View>
    )
}