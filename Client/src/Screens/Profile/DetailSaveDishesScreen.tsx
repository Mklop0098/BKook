// import { View, Text, Image, ScrollView, Animated } from 'react-native'
// import React, { useRef, useState } from 'react'
// import { IntroduceImage } from '../../../constant'
// import { MagnifyingGlassIcon, CameraIcon, EllipsisVerticalIcon } from 'react-native-heroicons/solid'
// import { Cog6ToothIcon, HeartIcon, ArrowSmallLeftIcon, BookmarkIcon } from 'react-native-heroicons/outline'
// const Header_Max_Height = 240;
// const Header_Min_Height = 120;
// const Scroll_Distance = Header_Max_Height - Header_Min_Height;
// // const DynamicHeader = ({ value }) => {
// //   const animatedHeaderHeight = value.interpolate({
// //     inputRange: [0, Scroll_Distance],
// //     outputRange: [Header_Max_Height, Header_Min_Height],
// //     extrapolate: 'clamp',
// //   });

// //   const animatedHeaderColor = value.interpolate({
// //     inputRange: [0, Scroll_Distance],
// //     outputRange: ['#181D31', '#678983'],
// //     extrapolate: 'clamp',
// //   });

// //   return (
// //     <Animated.View
// //       style={[
// //         {
// //           position: 'relative',
// //           height: animatedHeaderHeight,
// //           backgroundColor: animatedHeaderColor,
// //         },

// //       ]}>

// //       <Image
// //         style={{
// //           position: 'absolute',
// //           resizeMode: 'cover',
// //           height: '100%',
// //           width: '100%',
// //           backgroundColor: 'red'
// //         }}
// //         source={IntroduceImage[0]}
// //       />
// //       <View style={{
// //         padding: 15,
// //         flexDirection: 'row',
// //         justifyContent: 'space-between',
// //         alignItems: 'center'
// //       }}>
// //         <ArrowSmallLeftIcon size="35" color="white" />
// //         <View
// //           style={{
// //             flexDirection: 'row',
// //           }}
// //         >
// //           <BookmarkIcon size="35" color="white" style={{ marginRight: 20 }} />
// //           <HeartIcon size="35" color="white" style={{ marginRight: 20 }} />
// //           <EllipsisVerticalIcon size={35} color={'white'} />
// //         </View>
// //       </View>

// //     </Animated.View>
// //   );
// // };


// export const DetailSaveDishesScreen = () => {
//   const scrollOffsetY = useRef(new Animated.Value(0)).current;

//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: "#262222",
//       }}
//     >
//       {/* <View style={{
//         position: 'relative',
//         flex: 1

//       }}>
//         <Image
//           style={{
//             position: 'absolute',
//             resizeMode: 'cover',
//             height: '100%',
//             width: '100%',
//             backgroundColor: 'red'
//           }}
//           source={IntroduceImage[0]}
//         />
//         <View style={{
//           padding: 15,
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           alignItems: 'center'
//         }}>
//           <ArrowSmallLeftIcon size="35" color="white" />
//           <View
//             style={{
//               flexDirection: 'row',
//             }}
//           >
//             <BookmarkIcon size="35" color="white" style={{ marginRight: 20 }} />
//             <HeartIcon size="35" color="white" style={{ marginRight: 20 }} />
//             <EllipsisVerticalIcon size={35} color={'white'} />
//           </View>
//         </View>


//       </View> */}
//       {/* <DynamicHeader value={scrollOffsetY} /> */}
//       <ScrollView
//         style={{
//           flex: 1,
//           padding: 10
//         }}
//       >
//         <Text style={{
//           fontSize: 32,
//           color: 'white',
//           fontWeight: 'bold',
//         }}>SP.0770 - Chân gà lạnh</Text>
//         <View style={{
//           flexDirection: 'row',

//         }}>
//           <Image
//             style={{
//               width: 80,
//               height: 80,
//               resizeMode: 'contain',
//               borderRadius: 100,
//             }}
//             source={IntroduceImage[1]}
//           />
//           <View style={{
//             justifyContent: 'center',
//             alignItems: 'center',
//             marginLeft: 10,
//             marginBottom: 10,
//           }}>
//             <Text style={{
//               color: 'white',
//               fontSize: 20
//             }}>Annie Vo</Text>
//             <Text style={{
//               color: 'white',
//               fontSize: 14
//             }}>@AnnieVo</Text>
//           </View>
//         </View>
//         <Text style={{
//           color: 'white',
//           fontSize: 20,
//         }}>Cơm nhà 3 món đậm đà thật ngon miệng</Text>
//         <View style={{
//           width: '95%',
//           height: 1,
//           backgroundColor: 'white',
//           marginTop: 20,
//         }}></View>
//         <View style={{
//           marginTop: 20,
//         }}>
//           <Text style={{
//             color: 'white',
//             fontSize: 24,
//             fontWeight: 'bold'
//           }}>Nguyên liệu</Text>
//           <View style={{
//             marginTop: 10,
//           }}>
//             <Text style={{
//               color: 'white',
//               fontSize: 16,
//             }}>15 cái chân gà rút xương</Text>
//             <Text style={{
//               color: 'white',
//               fontSize: 16,
//             }}>1/2 củ gừng</Text>
//             <Text style={{
//               color: 'white',
//               fontSize: 16,
//             }}>3 nhánh gốc ngò tàu</Text>
//             <Text style={{
//               color: 'white',
//               fontSize: 16,
//             }}>2 nhánh dầu hành lá </Text>
//             <Text style={{
//               color: 'white',
//               fontSize: 16,
//             }}>150g nước tương</Text>
//             <Text style={{
//               color: 'white',
//               fontSize: 16,
//             }}>25g xì dầu</Text>
//           </View>

//         </View>
//         <View style={{
//           marginTop: 10
//         }}>
//           <Text style={{
//             color: 'white',
//             fontSize: 24,
//             fontWeight: 'bold'
//           }}>Cách làm</Text>
//           <View style={{
//             marginTop: 10,
//             flexDirection: 'row'
//           }}>
//             <View style={{
//               width: 50,
//               height: 50,
//               backgroundColor: 'white',
//               alignItems: 'center',
//               justifyContent: 'center',
//               borderRadius: 50,
//             }}>
//               <Text style={{
//                 fontSize: 20,
//                 color: 'black',
//               }}>1</Text>
//             </View>
//             <Text
//               style={{
//                 color: 'white',
//                 // backgroundColor: 'black',
//                 width: '80%',
//                 height: 80,
//                 marginLeft: 10,
//                 fontSize: 20,
//               }}
//             >Chân gà chà muối, rửa sạch để ráo, Gừng cạo vỏ nướng sơ xắt nhỏ hành tím nướng sơ lột vỏ</Text>
//           </View>
//           <View style={{
//             marginTop: 10,
//             flexDirection: 'row'
//           }}>
//             <View style={{
//               width: 50,
//               height: 50,
//               backgroundColor: 'white',
//               alignItems: 'center',
//               justifyContent: 'center',
//               borderRadius: 50,
//             }}>
//               <Text style={{
//                 fontSize: 20,
//                 color: 'black',
//               }}>2</Text>
//             </View>
//             <Text
//               style={{
//                 color: 'white',
//                 // backgroundColor: 'black',
//                 width: '80%',
//                 height: 80,
//                 marginLeft: 10,
//                 fontSize: 20,
//               }}
//             >Chân gà chà muối, rửa sạch để ráo, Gừng cạo vỏ nướng sơ xắt nhỏ hành tím nướng sơ lột vỏ</Text>
//           </View>
        
//         </View>
//       </ScrollView>
//     </View>
//   )
// }


import React from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import {EllipsisVerticalIcon} from 'react-native-heroicons/solid'
import {BookmarkIcon} from 'react-native-heroicons/outline'
import { useScrollToTop } from '@react-navigation/native';


import { useNavigation } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient'
import { tags } from '../Home/data';
import { GridView } from '@/Components/GridView';
import { ImageComponent } from '@/Components/Image';
import { ButtonComponent } from '@/Components/Button';
import { Divider } from 'native-base';
import { FoodBoxType4 } from '@/Components/FoodBox';
import { useRoute } from "@react-navigation/native";



export const DetailSaveDishesScreen = () => {


    const test = ['test']

    const navigation = useNavigation()
    const route = useRoute()

    const {name, owner, ownerAvatar, like, heart, clap, imgUrl, ingredient, ingredientDetail, stepList} = route.params.recipe

    const renderItem = () => (
      <View >
        <View>
          <ImageBackground 
            source={{uri: `${imgUrl}`}} 
            resizeMode="cover"
            style={{
                width: '100%',
            }} 
            className="h-64"
            imageStyle={{ borderTopLeftRadius: 8, borderTopRightRadius: 8}}
        >   

        </ImageBackground>
        </View>
        <View>
          <View className="flex-column m-4">
              <View className="flex-row items-center"> 
                  <Text style={styles.title}>
                    {name}
                  </Text>
              </View>
              <View className="flex-row items-center my-4"> 
                  <ImageComponent source={{uri: "https://plus.unsplash.com/premium_photo-1700175395626-360f76faa0c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMTk1Nzk2MQ&ixlib=rb-4.0.3&q=80&w=1080"}} variant="circle" size="xs"/>
                  <View className="flex flex-cols justify-center pl-3">
                    <Text style={styles.owner}>
                      {owner}
                    </Text>
                    <Text style={styles.ownerId}>
                      @cook_1911975
                    </Text>
                  </View>
                  
              </View>
              <ButtonComponent 
                title={"Lưu món"} 
                icon={<BookmarkIcon size={26} 
                color={'white'}/>} 
                bgColor="orange" 
                width="w-full" 
                height="h-10"
              />
              <View className='mx-1 my-2'>
                <Divider/>
              </View>
          </View>
        </View>
        <View className='m-4'>
          <Text style={styles.title} className='pb-6'>Nguyên liệu</Text>
          {
            ingredientDetail.map((ingredient: string, key: number) => (
              <View key={key}>
                <Text style={styles.owner} className='py-3'>{ingredient}</Text>
                {
                  key === ingredientDetail.length - 1 ? <View className='pt-8'><Divider /></View> : <Divider />
                }
              </View>
            ))
          }
        </View>
        <View className='m-4'>
          <Text style={styles.title} className='pb-6'>Cách làm</Text>
          {
            stepList.map((buoc, key) => (
              <View key={key} className='flex flex-row items-start'>
                <View className='bg-white w-6 h-6 rounded-full flex justify-center items-center mr-6 mt-4'><Text>{key + 1}</Text></View>
                <View className='flex-1 flex flex-cols'>
                  <Text style={styles.owner} className='py-3 flex-1'>{buoc.describe}</Text>
                  <View className='flex flex-row flex-wrap'>
                    {
                      buoc.image.map((img, key) => (
                        <View className='p-1' key={key}>
                          <ImageComponent source={{uri: `${img}`}} variant='rounded'/>
                        </View>
                      ))
                    }
                  </View>
                </View>
              </View>
            ))
          }
        </View>
        <View className='mx-4 my-2'>
          <Divider/>
        </View>
        <View className='m-4'>
          <Text style={styles.title} className='pb-6'>Món mới</Text>
          <View className="flex-1 justify-start items-start">
            <View>
                <View className='w-full'>
                    <GridView data={tags.flatMap(tag => tag.recipeList)} cols={2} renderItem={(item) =>
                        <FoodBoxType4 recip={item}/>
                    } />
                </View>
              </View>
          </View>
        </View>
      </View>
    );

    const renderHeader = () => (
        <View style={styles.header}>
            <ArrowLeftIcon color={'white'} onPress={() => navigation.goBack()}/>
            <View className="flex flex-row items-center">
              <View className="px-4">
                <BookmarkIcon color={'white'} />
              </View>
              <EllipsisVerticalIcon color={'white'} />
            </View>
        </View>
    );

    return (
        <FlatList
          data={test}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          ListHeaderComponent={renderHeader}
          stickyHeaderIndices={[0]}
          className="bg-[#1b1b1b]"
        />
    );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomColor: '#ccc',
  },
  header: {
    backgroundColor: 'black',
    padding: 20,
    borderBottomColor: '#ccc',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 18,    
    color: 'white',
    paddingLeft: 12
  },
  owner: {
      color: 'white',
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
  ownerId: {
    color: "#848484"
  }
});
