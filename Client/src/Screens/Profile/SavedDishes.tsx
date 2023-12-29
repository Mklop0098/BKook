import { View, Text, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import { MagnifyingGlassIcon, CameraIcon } from 'react-native-heroicons/solid'
import { IntroduceImage } from '../../../constant'
import SaveDishesCard from '../../Components/SaveDishesCard'
import { useNavigation } from '@react-navigation/native'
export const SavedDishes = () => {

  const [saveDishes, setSaveDishes] = useState([
    { 
      id: 1,
      name: ' Anie vo',
      avatar: IntroduceImage[0],
      image: IntroduceImage[0],
      description: 'Cơm nhà có món cà ri gà',
    },
    { 
      id: 2,
      name: 'Sơn Perth',
      avatar: IntroduceImage[1],
      image: IntroduceImage[1],
      description: 'Chân gà lạnh',
    },
    { 
      id: 3,
      name: 'Sơn Perth',
      avatar: IntroduceImage[1],
      image: IntroduceImage[1],
      description: 'Chân gà lạnh',
    },
    { 
      id: 4,
      name: 'Sơn Perth',
      avatar: IntroduceImage[1],
      image: IntroduceImage[1],
      description: 'Chân gà lạnh',
    },
    { 
      id: 5,
      name: 'Sơn Perth',
      avatar: IntroduceImage[1],
      image: IntroduceImage[1],
      description: 'Chân gà lạnh',
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
          data={saveDishes}
          style={{
              marginTop: 50,
              // backgroundColor: 'red',
          }}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={({ item, index }) =>
              <SaveDishesCard item={item} index={index}  />
          }
      />
    </View>
  )
}