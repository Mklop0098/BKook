

import React, { useEffect, useRef, useState } from "react"
import { Text,View, StyleSheet, ScrollView, Image, ImageBackground } from "react-native"
import { Ingredients, recipe, tags } from "./data"
import { MagnifyingGlassIcon } from "react-native-heroicons/solid"
import { ButtonComponent } from "../../Components/Button"
// import { CarouselCards } from "../../Components/Carousel"
import { GridView } from "../../Components/GridView"
import { FoodBoxType1, FoodBoxType2, FoodBoxType3, FoodBoxType4, FoodBoxType5 } from "../../Components/FoodBox"
import { IngredientTag } from "../../Components/IngredientTag"
import {CarouselCards} from '../../Components/Carousel'
import { useNavigation } from "@react-navigation/native"
import { useTag } from "../../Components/Context/Context"
import { RecipeTagType } from "./type"


export const Inspiration = () => {

    const navigattion = useNavigation()
    const refTag = useRef<any>([])
    const {tagList, setTagList} = useTag()

    const handlePress = (name: string) => {
        if (refTag.current.includes(name)) {
            refTag.current = refTag.current.filter((i:any)  => i !== name)
        }
        else if (refTag.current.length < 2) {
            refTag.current = [...refTag.current, name]
        } 
        setTagList(refTag.current)
        
    }   

    function filterRecipesByIngredients(tagsArray: RecipeTagType[], ingredientsArray: string[]) {
        if (ingredientsArray.length === 0) {
            return tagsArray.flatMap(tag => tag.recipeList)
        }
        const filteredTags = tagsArray.filter(item => item.name === ingredientsArray[0])
        if (ingredientsArray[1]) {
            const resultList = filteredTags[0].recipeList.filter(item => item.ingredient.includes(ingredientsArray[1]))
            return resultList
        }
        return filteredTags[0].recipeList
    }

    const filterSeason = (tagsArray: RecipeTagType[]) => {
        
    }

    return (
        <ScrollView
            className="bg-[#242424]"
        >
            <View className="flex-column justify-start items-start">
                <View className="pt-2 m-3">
                    <Text style={styles.title}>Trong tủ lạnh nhà bạn có gì</Text>
                    <Text style={styles.subTitle}>Chọn đến 2 nguyên liệu</Text>
                    <View className="flex-row flex-wrap pt-4">
                        {
                            Ingredients.map((ingredient, index) => (
                                <IngredientTag name={ingredient.name} iconUrl={ingredient.iconUrl} key={index}
                                    onClick={() => handlePress(ingredient.name)}
                                />
                            ))
                        }
                    </View>    
                </View>
                <View className='flex-row w-full'>
                    <CarouselCards 
                        data={filterRecipesByIngredients(tags, tagList)} 
                        renderItem={(item) => <FoodBoxType1 recip={item} />}
                    />
                </View>
                
                <ButtonComponent
                    title={"Gợi ý khác"}
                    icon={<MagnifyingGlassIcon size={26} color={'white'}/>}
                    bgColor="#8C8C8C"
                    width="w-full"
                    height="h-10"
                    onPress={() => navigattion.navigate('Products' as never)}
                />

            </View>
            <View className="flex-column justify-start items-start">
                <View className="pt-2 m-3">
                    <Text style={styles.title}>Khám phá xem thứ gì đang trong mùa nào</Text>
                </View>
                <View className='flex-row w-full'>
                    <CarouselCards 
                        data={tags} 
                        renderItem={(item) => <FoodBoxType2 recip={item}/>}
                    />
                </View>
                
                <ButtonComponent 
                    title={"Xem tất cả các nguyên liệu"} 
                    icon={<MagnifyingGlassIcon size={26} 
                    color={'white'}/>} 
                    bgColor="#8C8C8C" 
                    width="w-full" 
                    height="h-10"
                />

            </View>
            <View className="flex-column justify-start items-start mx-3">
                <View className="pt-2 mb-3">
                    <Text style={styles.title}>Bạn đang thèm món gì?</Text>
                    <Text style={styles.subTitle}>Không chắc? tiếp tục tạo bất ngờ</Text> 
                </View>
                <View className='flex-row w-full '>
                    <FoodBoxType3 recip={tags}/>
                </View>
            
            </View>
            <ButtonComponent 
                    title={"Gợi ý khác"} 
                    icon={<MagnifyingGlassIcon size={26} color={'white'}/>}
                    bgColor="#8C8C8C"
                    width="w-full" 
                    height="h-10"
                />
            <View className="flex-column justify-start items-start mb-3">
                <View className="pt-2 m-3">
                    <Text style={styles.title}>Bí quyết nấu ăn</Text>
                </View>
                <View className='w-full'>
                    <CarouselCards 
                        data={recipe} 
                        renderItem={(item) => <FoodBoxType5 />}
                    />
                </View>
            </View>
            <View className="flex-1 justify-start items-start">
                <View className='m-2'>
                    <View className='mt-2 mb-4 mx-1'>
                        <Text style={styles.title}>Món mới nhất</Text>
                    </View>
                    <View className='w-full pb-24'>
                        <GridView data={tags.flatMap(tag => tag.recipeList)} cols={2} renderItem={(item) =>
                            <FoodBoxType4 recip={item}/>
                        } />
                    </View>
                </View>
            </View>
        </ScrollView>

    )
}



const styles = StyleSheet.create({
    title: {
      color: 'white',
      fontSize: 16,
      fontWeight: '600',
      paddingBottom: 4
    },
    subTitle: {
        color: 'white',
        fontSize: 14,
        fontWeight: '500'
    },
    container: {
        paddingTop: 40
    },
    itemContainer: {
        height: 230,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25
    }
  });