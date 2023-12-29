import { IngredientType } from "../Screens/Home/type"; 
import React, { ReactElement, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { ImageComponent } from "./Image"; 
import {CheckIcon} from 'react-native-heroicons/solid'

type ButtonComponentProps = {
    title: string,
    bgColor?: string,
    width?: string,
    height?: string,
    color?: string,
    icon?: React.ReactElement
    onPress?: () => void
}

export const ButtonComponent:React.FC<ButtonComponentProps> = (props) => {
    const {title, bgColor, width='w-fit', height='h-10', color, onPress, icon} = props
    return (
        <View className={`px-3 flex-row my-3 w-full`}>
            <TouchableOpacity
                {...props}
                className={`rounded-lg ${width} ${height} flex-row justify-center items-center`}
                style={{backgroundColor: bgColor}}
            >
                {
                    icon && icon
                }
                <Text style={styles.text}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
      color: 'white',
      paddingLeft: 8
    },
    container: {
        marginVertical: 3
    }
  });
