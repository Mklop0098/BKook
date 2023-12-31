import { View, Text, TextInput, Image, FlatList, Pressable, StyleSheet, TouchableOpacity, Modal, Alert } from 'react-native'
import React, { useState } from 'react'
import { MagnifyingGlassIcon, CameraIcon, XMarkIcon } from 'react-native-heroicons/solid'
import { IntroduceImage } from '../../../constant'
import MyDishesCard from '../../Components/MyDishesCard'
import { FoodBoxType4 } from '@/Components/FoodBox'
import { GridView } from '@/Components/GridView'
import { tags } from '../Home/data'
import { ScrollView } from 'native-base'
import { useUser } from '@/Components/Context/UserContext'
export const SavedDishes = () => {

    const {userInfo, onDeleteMyDishes} = useUser()
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [deleteNode, setDeleteNode] = useState<string>('')

    const handleDelete = (name: string) => {
        setModalVisible(!modalVisible)
        onDeleteMyDishes(name)
    }

    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor: "#262222",
        }}
            className='p-4'
        >
            
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Xác nhận xóa?</Text>
                        <View className='flex flex-row'>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => handleDelete(deleteNode)}
                            >
                                <Text style={styles.textStyle}>Xác nhận</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonCancel]}
                                onPress={() => {
                                    setDeleteNode('')
                                    setModalVisible(false)
                                }}
                            >
                                <Text style={styles.textStyleCancel}>Hủy</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>

            <View
                style={{
                    flexDirection: 'row',
                    padding: 10,
                    borderWidth: 1,
                    borderColor: 'white',
                    backgroundColor: '#212121'
                }}
                className='rounded-lg'
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

            <View className="flex-1 justify-start items-start">
                <View className='py-12'>
                    <View className='w-full pb-24'>
                        <GridView data={userInfo.saveDishes} cols={2} renderItem={(item) =>
                            <View className='relative'>
                                <FoodBoxType4 recip={item}/>
                                <TouchableOpacity className='absolute z-10 left-2 bottom-2 bg-orange-500 rounded-md w-12 h-6 flex justify-center items-center'
                                    onPress={() => {setModalVisible(true), setDeleteNode(item.name)}}
                                >
                                    <Text className='text-white'>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        } />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'black',
      borderRadius: 10,
      paddingHorizontal: 60,
      paddingVertical: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      margin: 10
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: 'orange',
    },
    buttonCancel: {
        backgroundColor: 'white',
        border: '1px solid orange',
      },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    textStyleCancel: {
        color: 'orange',
        fontWeight: 'bold',
        textAlign: 'center',
      },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      color: 'white'
    },

  });
  