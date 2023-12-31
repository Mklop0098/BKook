import React from "react"
import { ImageBackground, View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight, Pressable } from "react-native"
import { ImageComponent } from "./Image"
import { IngredientTag } from "./IngredientTag"
import { GridView } from "./GridView"
import { RecipeTagType, RecipeType } from "../Screens/Home/type"
import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from 'expo-linear-gradient'
import { ReactionTags } from "./ReactionTags"

type FoodBoxProps = {
    recip: RecipeType,
    disable?: boolean
}

type FoodBoxType2Props = {
    recip: RecipeTagType
}

type FoodBoxType3Props = {
    recip: RecipeTagType[]
}

export const FoodBoxType1: React.FC<FoodBoxProps> = (props) => {

    const recipe = props.recip

    const navigation = useNavigation()

    return (
        <TouchableHighlight onPress={() => navigation.navigate("Detail", {recipe})}>
            <View className="h-80 flex-column"
                style={{
                    borderWidth: 1,
                    borderRadius: 8,
                    borderColor: 'white',
                    backgroundColor: '#2f2f2f'
                }}
            >
                <ImageBackground 
                    source={{uri: recipe.imgUrl}} 
                    resizeMode="cover"
                    style={{
                        width: '100%',
                    }} 
                    className="relative h-64"
                    imageStyle={{ borderTopLeftRadius: 8, borderTopRightRadius: 8}}
                >   
                    <LinearGradient
                        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.1)', 'rgba(0,0,0,0.5)']} // Màu của gradient
                        style={{ flex: 1 }}
                    >
                        <View className="absolute bottom-5 left-3 flex-column">
                            <View className="flex-row items-center"> 
                                <ImageComponent source={{uri: "https://plus.unsplash.com/premium_photo-1700175395626-360f76faa0c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMTk1Nzk2MQ&ixlib=rb-4.0.3&q=80&w=1080"}} variant="circle" size="xs"/>
                                <Text style={styles.owner}>
                                    {props.recip.owner}
                                </Text>
                            </View>
                            <View className="flex-row items-center"> 
                                <Text style={styles.title}>
                                    {props.recip.name}
                                </Text>
                            </View>
                        </View>
                    </LinearGradient>
                </ImageBackground>
                <View className="flex-row flex-1 items-center justify-between">
                    <View className="flex-row flex-1 items-center pl-3">
                        {/* <IngredientTag name={'4'}/>
                        <IngredientTag name={'4'}/>
                        <IngredientTag name={'4'}/> */}
                        <ReactionTags type='eyeheart' content={recipe.like}/>
                        <ReactionTags type='heart' content={recipe.heart}/>
                        <ReactionTags type='claps' content={recipe.clap}/>
                    </View>
                    <View className="pr-1">
                        <ReactionTags type='flag' content={'Lưu'}/>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    )
}

export const FoodBoxType2:React.FC<FoodBoxType2Props> = (props) => {

    const {recip} = props
    const navigation = useNavigation()
    
    return (
        <View className="h-80 flex-column items-center"
            style={{
                borderWidth: 1,
                borderRadius: 8,
                borderColor: 'white',
                backgroundColor: '#2f2f2f',
            }}
        >
            <View className="flex-1 w-full h-1/2">
                <ImageBackground
                    source={{uri: `${recip.thumbnail}`}}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '100%',
                
                    }}
                    className="relative"
                    imageStyle={{ borderTopLeftRadius: 8, borderTopRightRadius: 8}}
                >
                    <LinearGradient
                        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.1)', 'rgba(0,0,0,0.5)']} // Màu của gradient
                        style={{ flex: 1 }}
                    >
                        <View className="absolute bottom-5 left-3 flex-column">
                            <View className="flex-row items-center">
                                <Text style={styles.subTitle}>
                                    {recip.name.toLocaleUpperCase()}
                                </Text>
                            </View>
                            <View className="flex-row items-center">
                                <Text style={styles.owner}>
                                    {recip.recipeList.length + ' món'}
                                </Text>
                            </View>
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </View>
            <View className="w-full flex-1">
                <GridView data={recip.recipeList.slice(0,3)} cols={3} renderItem={(recipe) =>
                    <Pressable className='w-full h-full' onPress={() => navigation.navigate("Detail", {recipe})}
                        style={{
                            backgroundColor: '#797979',
                            borderRadius: 8,
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <View className='flex-1 w-full'>

                            <ImageBackground 
                                source={{uri: `${recipe.imgUrl}`}} 
                                resizeMode="cover"
                                style={{
                                    width: '100%',
                                    height: '100%'
                                }} 
                                className="relative flex-1"
                                imageStyle={{ borderTopLeftRadius: 8, borderTopRightRadius: 8}}
                            >   
                                <LinearGradient
                                    colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.1)', 'rgba(0,0,0,0.1)']}
                                    style={{ flex: 1 }}
                                />  
                            </ImageBackground>
                        </View>
                        <View className='flex-1 h-1/2'>
                            <View className="flex-row items-center m-2"> 
                                <Text style={styles.subTitle}>
                                    {recipe.name}
                                </Text>
                            </View>
                        </View>
                        

                    </Pressable>
                } />
            </View>
        </View>
    )
}

export const FoodBoxType3: React.FC<FoodBoxType3Props> = (props) => {

    const {recip} = props

    return (
        <View className="h-60 flex-column items-center w-full"
            style={{
                borderWidth: 1,
                borderRadius: 8,
                borderColor: 'white',
                backgroundColor: '#2f2f2f'
            }}
        >
            <View className='w-full h-full'>
                <GridView data={recip} cols={2} renderItem={(item) =>
                    <View className='w-full h-full'>
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
                                colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.3)']} // Màu của gradient
                                style={{ flex: 1 }}
                            >
                                <View className="absolute bottom-5 left-3 flex-column">
                                    <View className="flex-row items-center"> 
                                        <Text style={styles.subTitle}>
                                            {item.name.toLocaleUpperCase()}
                                        </Text>
                                    </View>
                                    <View className="flex-row items-center"> 
                                        <Text style={styles.owner}>
                                            {item.recipeList.length + ' món'}
                                        </Text>
                                    </View>
                                </View>
                            </LinearGradient>
                        </ImageBackground>

                    </View> 
                } />
            </View>
        </View>
    )
}

export const FoodBoxType4: React.FC<FoodBoxProps> = (props) => {
    const recipe = props.recip
    const navigation = useNavigation()
    return (
        <TouchableHighlight className="h-60 flex-column items-center"
            style={{
                borderWidth: 1,
                borderRadius: 8,
                borderColor: 'white',
                backgroundColor: '#2f2f2f',
            }}
            onPress={() => navigation.navigate("Detail", {recipe})}
            disabled={props.disable ? props.disable : false}
        >
            <View className="w-full h-full flex-1">
                <View className='w-full h-full'>
                    <View className='h-3/5 w-full'>
                        <Image
                            source={{uri: `${recipe.imgUrl}`}}
                            style={{width: '100%', height: '100%', borderTopLeftRadius: 8, borderTopRightRadius: 8}}
                        />
                    </View>
                    <View className='flex-1'>
                        <View className="flex-column m-2">
                            <View className="flex-row items-center"> 
                                <ImageComponent source={{uri: "https://plus.unsplash.com/premium_photo-1700175395626-360f76faa0c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMTk1Nzk2MQ&ixlib=rb-4.0.3&q=80&w=1080"}} variant="circle" size="xxs"/>
                                <Text style={styles.owner}>
                                    {recipe.owner}
                                </Text>
                            </View>
                            <View className="flex-row items-center"> 
                                <Text style={styles.subTitle}>
                                    {recipe.name}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    )
}

export const FoodBoxType5 = () => {
    return (
        <View className="h-80 flex-column w-full"
            style={{
                borderWidth: 1,
                borderRadius: 8,
                borderColor: 'white',
                backgroundColor: '#2f2f2f'
            }}
        >
            <View className='h-4/5'>
            <View className="flex-column m-3">
                <View className="flex-row items-center"> 
                        <ImageComponent 
                            source={{uri: "https://source.unsplash.com/random"}} 
                            variant="circle" 
                            size="xs"
                        />
                        <Text style={styles.owner}>
                            {'Arany Green'}
                        </Text>
                    </View>
                    <View className="flex-row items-center pt-3"> 
                        <Text style={styles.subTitle}>
                            {'Cách loại bỏ độc tố trong măng trước khi nấu'}
                        </Text>
                    </View>
                    <View className="flex-row items-center pt-3"> 
                        <Text style={{color: 'white'}}>
                            {'Măng là một nguyên liệu quen thuộc trong các bữa ăn gia đình. Có nhiều loại măng bán sẵn như măng tươi, măng chua, măng...'}
                        </Text>
                    </View>
                    <View className='h-14 w-20 mt-5'>
                        <Image
                            source={{uri: "https://source.unsplash.com/random"}}
                            style={{width: '100%', height: '100%', borderRadius: 6}}
                        />
                    </View>
                </View>
            </View>
            <View className="flex-row flex-1 items-center justify-between">
                <View className="flex-row flex-1 items-center pl-3">
                    <IngredientTag name={'4'} />
                    <IngredientTag name={'4'} />
                    <IngredientTag name={'4'} />
                </View>
                <View className="pr-1">
                    <IngredientTag name={'4'} />
                </View>
            </View>
        </View>
    )
}

export const FoodBoxType6: React.FC<FoodBoxProps> = (props) => {
    const recipe = props.recip
    const navigation = useNavigation()
    return (
        <TouchableHighlight className="h-60 flex-column items-center"
            style={{
                borderWidth: 1,
                borderRadius: 8,
                borderColor: 'white',
                backgroundColor: '#2f2f2f',
            }}
            onPress={() => navigation.navigate("Detail", {recipe})}
        >
            <View className="w-full h-full flex-1 flex flex-row m-2 px-2">
                <View className='w-3/5 pr-3 pl-1 py-1'>
                    <Text style={styles.title}>{recipe.name}</Text>
                    <View className="flex-row items-center py-4"> 
                        <ImageComponent source={{uri: "https://plus.unsplash.com/premium_photo-1700175395626-360f76faa0c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMTk1Nzk2MQ&ixlib=rb-4.0.3&q=80&w=1080"}} variant="circle" size="xs"/>
                        <Text style={styles.owner}>
                            {props.recip.owner}
                        </Text>
                    </View>
                    <Text style={{color: 'white'}}>{recipe.stepList[0].describe}</Text>
                </View>
                <View className='flex-1'>
                    <ImageBackground 
                        source={{uri: recipe.imgUrl}} 
                        resizeMode="cover"
                        style={{
                            width: '100%',
                            height: '100%'
                        }} 
                        className="relative h-64"
                        imageStyle={{ borderBottomRightRadius: 8, borderTopRightRadius: 8}}
                    >   
                    </ImageBackground>
                </View>
            </View>
        </TouchableHighlight>
    )
}


const styles = StyleSheet.create({
    owner: {
        color: 'white',
        paddingLeft: 8
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    subTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {}
})