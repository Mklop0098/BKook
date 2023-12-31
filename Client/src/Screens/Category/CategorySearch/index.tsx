import { FoodBoxType1, FoodBoxType4, FoodBoxType6 } from "@/Components/FoodBox"
import { GridView } from "@/Components/GridView"
import { IngredientTag } from "@/Components/IngredientTag"
import { tags } from "@/Screens/Home/data"
import { RecipeType } from "@/Screens/Home/type"
import { themeColors } from "@/Theme/Variables"
import { useNavigation, useRoute } from "@react-navigation/native"
import React from "react"
import {ImageBackground, Pressable, ScrollView, Text, TextInput, View, StyleSheet} from 'react-native'
import { ArrowLeftIcon, XMarkIcon, MagnifyingGlassIcon, ArrowRightIcon, LightBulbIcon } from "react-native-heroicons/solid"


export const CategorySearch = () => {
    
    const route = useRoute()
    const input = route.params.input

    const navigation = useNavigation()

    const levenshteinDistance = (str1: string, str2: string) => {
        const m = str1.length;
        const n = str2.length;
        
        const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
        
        for (let i = 0; i <= m; i++) {
            for (let j = 0; j <= n; j++) {
            if (i === 0) {
                dp[i][j] = j;
            } else if (j === 0) {
                dp[i][j] = i;
            } else if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
            }
            }
        }
        
        return dp[m][n];
    };
        
    const calculateMatchRatio = (str1: string, str2: string) => {
        const distance = levenshteinDistance(str1, str2);
        const maxLength = Math.max(str1.length, str2.length);
        const matchRatio = (1 - distance / maxLength) * 100;
        
        return matchRatio;
    };      

    const filterIngredients= (value: string) => {
        const resultArray = value.split(',').map(item => item.trim());
        let testArr: RecipeType[] = tags.flatMap(tag => tag.recipeList)
        resultArray.forEach(item => {
            testArr = testArr.filter(i => i.ingredient.includes(item.toLowerCase()))
        })

        return testArr
    }

    const filterData = () => {
        
        const recipName = tags.flatMap(tag => tag.recipeList).filter(i => calculateMatchRatio(i.name, input) >= 50)
        const ingredientName = filterIngredients(input)
        console.log(ingredientName)
        return [...recipName, ...ingredientName]

    }


    
    
    return (    
        <View className={`bg-[#333333] flex-1 w-full`}>
            <View className='flex flex-row bg-black h-14 items-center px-4'>
                <ArrowLeftIcon size={20} color={"white"} onPress={() => navigation.navigate('Search')}/>
                <Text
                    style={{
                        color: 'white',
                        borderRadius: 8,
                        paddingLeft: 24,
                        flex: 1,
                        fontSize: 16
                    }}
                >
                    {input}
                </Text>
                <Pressable>
                    <XMarkIcon size={20} color={"white"} />
                </Pressable>
            </View>     
            

            <ScrollView>
                <View className="flex-1 px-4">
                    <View>
                        <View className='mt-2 mb-4'>
                            <Text style={styles.title}>Món mới nhất</Text>
                        </View>
                        <View className='w-full pb-24 flex flex-cols'>
                            {
                                filterData().map((recipe, key) => (
                                    <View className='w-full h-60 my-2' key={key}>
                                        <FoodBoxType6 recip={recipe}/>
                                    </View>
                                ))
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
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