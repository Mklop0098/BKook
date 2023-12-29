import { IngredientType } from "../Screens/Home/type";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { ImageComponent } from "./Image";
import {CheckIcon} from 'react-native-heroicons/solid'
import { useTag } from "./Context/Context";


export const IngredientTag:React.FC<IngredientType> = (props) => {

    const {name, iconUrl = 'https://source.unsplash.com/random', onClick} = props
    const {tagList} = useTag()
 
    const handlePress = () => {
        onClick()
    }

    const checkPress = (name: string) => {
        if (tagList.includes(name)) {
            return true
        }
        return false
    }   

    return (
        <TouchableOpacity
            {...props}
            className={`h-8 pr-3 pl-2 rounded-lg ${checkPress(name) ? 'bg-orange-500' : 'bg-[#8C8C8C]'} w-min flex-row justify-center items-center my-1 mr-2`}
            onPress={handlePress}
        >
            {
                !checkPress(name) ? 
                <ImageComponent source={{uri: `${iconUrl}`}} variant="circle" size="xxs"/> : 
                <View className="w-6 h-6 bg-[#fa9745] rounded-full flex justify-center items-center">
                    <CheckIcon size={16} color={'white'}/>
                </View>
            }
            


            <Text style={styles.text}>
                {name}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
      color: 'white',
      paddingHorizontal: 8
    },
  });
