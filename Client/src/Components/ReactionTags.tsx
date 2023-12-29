import { IngredientType, RecipeType } from "../Screens/Home/type";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { ImageComponent } from "./Image";
import { useTag } from "./Context/Context";
import {BookmarkIcon} from 'react-native-heroicons/outline'


type ReactionTagsProps = {
    type: 'heart' | 'eyeheart' | 'claps' | 'flag',
    onPess?: () => void
    content: any
}

enum tags {
    heart = "https://s3-alpha-sig.figma.com/img/8bc7/9c7a/2339fb8762a44e04e9f6ae9fee399517?Expires=1704672000&Signature=fJDUt7xs7qRjkHh5oNqbgM1i-gzb-iLrdcMeiePD0e9cXxlwtZl6AF2eKVf7LDIzBcLH8b56~xcJrDAdRLkS9sMbF7ALkEORrz0wPhdB4ALq5Ltchvll9YvdLOwuBaa6pjOckoBxOg7VhdwK9spbJTgrLwRv1hGQJfe8wNEha4TJsS151L3Z0-Hb-dTYNt8E8o5t46adoOPMrXEDBOdUQBzlrFH~Y1pMyxdwHAeKyQISpX9fbnJalPCIByXnDsCIhygG6bNCK0rY0HCY2aCYYZ4ukl1dDOxixpOFET5svmHj8T4np~-s9AuLtDccMSxdRBV6k5dAW80~asMbM-wntQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    eyeheart = "https://s3-alpha-sig.figma.com/img/c558/643f/c5e76ed5a56bba886b047a09c16d8de8?Expires=1704672000&Signature=AnUG2uRL4y8SFwDMzyDJSx7pPvYej41hA08z9hROBtO-VRNfUKU3YqpQg6jBf32FobzFcLNXrLs-Asb8gqSS9GRu7fhVOEv5jQrnEfxy-Ll1OVaOEN2Og-JzjoWPqMCheO7raJzSfb1czxuxANamKwPTubaARplforKRm~kUHRsw3InZUTUA2~qYvDKmUNgiYxU4sMn6Mlhotdn0CJwXGJIxUlpHUfQcVMK5vX2jnlSQ7W0usJ9Qe~KGfLo9tXjYH3Sn9aH~cN8I9kZDjfnUEzOL~k~po5Rduc0vFe9~7ugcGhOUeFvCZDABo3vU9bFa5QitxomCOSJ08O-D97YsZw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    claps = 'https://s3-alpha-sig.figma.com/img/0723/f6f5/5d8f2ccec8970d52d2b58dbbb2f6e2dc?Expires=1704672000&Signature=jGAwOUlJPUTTNOlXTGTfMZVpqzSMS9JtxwdP7LpU6q2mQbjZ6kOHvr7qqcO1riy5zV0Egpk~8-NHvKCkmwf~yKwh9fBbOsq9aPYHb~w1aBDU3tcSYQfWDbXta68efV0cBzjhxUS~xzamJl5C9pCtmYvgV8ncyZdMjiDVPlMlaJyMZ9hDIz7h~A5~NrRG31HPbelT5TDT3~V~ID~GgulgIlxGszAJii5xAsHiJqR5t7wp418VoMQaA2WgcL-bjN9EWUKfh8CODotf4D45SDPAuM2VXNqSFYCKI70XPEmVT3nyv5im931iH5dfVYSQJzBwNfwa02VBeo0BO1j3AOriFg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  }

export const ReactionTags:React.FC<ReactionTagsProps> = (props) => {

    const {type, content, onPess} = props

    return (
        <TouchableOpacity
            {...props}
            className={`h-8 pr-3 pl-2 rounded-lg w-min flex-row justify-center items-center my-1 mr-2 bg-[#8C8C8C]`}
        >
            {
                <View className="w-6 h-6 rounded-full flex justify-center items-center">
                    {
                        type === 'flag' ? <BookmarkIcon size={20} color={'white'}/>
                        : <ImageComponent source={{uri: `${tags[type]}`}} variant="circle" size="xxs"/>

                    }
                </View>
            }
            


            <Text style={styles.text}>
                {
                   content
                }
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