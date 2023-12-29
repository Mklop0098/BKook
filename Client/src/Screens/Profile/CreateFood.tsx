import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { MagnifyingGlassIcon, EllipsisVerticalIcon, EllipsisHorizontalIcon } from 'react-native-heroicons/solid'
import { Cog6ToothIcon, CameraIcon, HeartIcon, ArrowSmallLeftIcon, BookmarkIcon } from 'react-native-heroicons/outline'

export const CreateFood = () => {
    const [ingredients, setIngredients] = useState(['']); // State to manage ingredients
    const [steps, setSteps] = useState([{ step: 1, description: '' }]); // State to manage steps
    const addIngredient = () => {
        const newIngredients = [...ingredients, ''];
        setIngredients(newIngredients);
    }
    const deleteStep = (index) => {
        Alert.alert(
            'Xác nhận xóa bước làm',
            'Bạn có muốn xóa bước làm này không?',
            [
                {
                    text: 'Hủy bỏ',
                    style: 'cancel'
                },
                {
                    text: 'Đồng Ý',
                    onPress: () => {
                        const updatedSteps = steps.filter((_, i) => i !== index);
                        // Update step numbers
                        const reorderedSteps = updatedSteps.map((step, idx) => ({ ...step, step: idx + 1 }));
                        setSteps(reorderedSteps);
                    },
                    style: 'destructive'
                }
            ],
            { cancelable: false }
        );
    };
    const addStep = () => {
        const newStep = {
            step: steps.length + 1,
            description: ''
        };
        const updatedSteps = [...steps, newStep];
        setSteps(updatedSteps);
    };
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#262222",
        }}>
            <View style={{
                padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <ArrowSmallLeftIcon size="35" color="white" />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <View style={{
                        marginRight: 10,
                        width: 75,
                        height: 35,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text
                            style={{
                                fontSize: 20
                            }}
                        >Lưu</Text>
                    </View>
                    <View
                        style={{

                            width: 95,
                            height: 35,
                            backgroundColor: '#F66033',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20
                            }}
                        >Lên Sóng</Text>
                    </View>
                    <EllipsisVerticalIcon size={35} color={'white'} />
                </View>
            </View>
            <ScrollView style={{
                flex: 1,
            }}>
                <View
                    style={{
                        width: '100%',
                        height: 200,
                        backgroundColor: '#444444',
                        position: 'relative',
                    }}
                >
                    <View style={{
                        position: 'absolute', // Đặt vị trí tuyệt đối
                        bottom: 10, // Cách bottom 20px (hoặc bạn có thể điều chỉnh theo ý muốn)
                        right: 0,
                        left: 0,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}>
                        <CameraIcon size={35} color={'white'} />
                        <Text style={{
                            color: 'white',
                            fontSize: 20,
                            marginHorizontal: 10,
                        }}>Đăng hình đại diện món ăn</Text>
                    </View>
                </View>
                <View style={{

                    padding: 20,
                }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            padding: 20,
                            borderRadius: 10,
                            backgroundColor: '#444444'
                        }}
                    >
                        <TextInput
                            placeholder='Tên món ăn'
                            placeholderTextColor={'#9A9A9A'}
                            style={{
                                flex: 1,
                                fontSize: 20,
                                color: 'white',
                            }}
                        />
                    </View>
                </View>
                <View style={{
                    padding: 20,
                }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            padding: 10,
                            borderRadius: 10,
                            backgroundColor: '#444444',
                            width: '100%',
                            height: 100,
                        }}
                    >
                        <TextInput
                            placeholder='Hãy chia sẽ với mọi người về món ăn của bạn nhé.'
                            placeholderTextColor={'#9A9A9A'}
                            style={{
                                flex: 1,
                                fontSize: 20,
                                color: 'white',
                                textAlignVertical: 'top',
                            }}
                            multiline={true}
                        />
                    </View>
                </View>
                <View style={{
                    padding: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    height: 100,

                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                    }}>Thời gian nấu</Text>
                    <View style={{
                        padding: 10,
                        backgroundColor: '#444444',
                        borderRadius: 10,
                    }}>
                        <TextInput
                            placeholder='1 tiếng 30 phút'
                            placeholderTextColor={'#9A9A9A'}
                            style={{
                                flex: 1,
                                fontSize: 20,
                                color: 'white',
                            }}
                        />
                    </View>

                </View>
                <View style={{
                    padding: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    height: 100,

                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                    }}>Khẩu phần</Text>
                    <View style={{
                        padding: 10,
                        backgroundColor: '#444444',
                        borderRadius: 10,
                    }}>
                        <TextInput
                            placeholder='2 người '
                            placeholderTextColor={'#9A9A9A'}
                            style={{
                                flex: 1,
                                fontSize: 20,
                                color: 'white',
                            }}
                        />
                    </View>

                </View>
                <View style={{
                    width: '100%',
                    height: 5,
                    backgroundColor: '#9A9A9A'
                }}></View>
                <View style={{
                    padding: 20,
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 24,
                        fontWeight: 'bold'
                    }}>Nguyên Liệu</Text>
                    {ingredients.map((ingredient, index) => (
                        <View
                            key={index}
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <View
                                style={{
                                    marginTop: 10,
                                    width: '90%',
                                    padding: 10,
                                    backgroundColor: '#444444',
                                    borderRadius: 10,
                                }}
                            >
                                <TextInput
                                    placeholder='250g bột'
                                    placeholderTextColor={'#9A9A9A'}
                                    style={{
                                        flex: 1,
                                        fontSize: 20,
                                        color: 'white',
                                    }}
                                />
                            </View>
                            <EllipsisHorizontalIcon size="35" color="white" />
                        </View>
                    ))}
                    <TouchableOpacity onPress={addIngredient}>
                        <View
                            style={{
                                marginTop: 50,
                                alignItems: 'center',
                            }}
                        >
                            <Text style={{
                                color: 'white',
                                fontSize: 20,
                            }}>+ Nguyên Liệu</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: '100%',
                    height: 5,
                    backgroundColor: '#9A9A9A'
                }}></View>
                <View
                    style={{
                        padding: 20,
                    }}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 24,
                            fontWeight: 'bold'
                        }}
                    >Cách Làm</Text>
                    {/* <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <View style={{

                            width: 40,
                            height: 40,
                            borderRadius: 40,
                            backgroundColor: '#D9D9D9',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 30,
                        }}>
                            <Text style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 24,
                            }}>1</Text>
                        </View>
                        <View style={{
                            padding: 10,
                            backgroundColor: '#444444',
                            borderRadius: 10,
                            width: '70%',
                            height: 100,
                        }}>
                            <TextInput
                                placeholder='2 người '
                                placeholderTextColor={'#9A9A9A'}
                                style={{

                                    width: '100%',
                                    height: '100%',
                                    fontSize: 20,
                                    color: 'white',
                                    textAlignVertical: 'top',

                                }}
                                multiline={true}
                            />
                        </View>
                        <EllipsisHorizontalIcon style={{ marginLeft: 10 }} size="35" color="white" />
                    </View> */}
                    {steps.map((step, index) => (
                        <View key={index}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginVertical: 15,
                            }}>
                                <View style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 40,
                                    backgroundColor: '#D9D9D9',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginRight: 30,
                                }}>
                                    <Text style={{
                                        color: 'black',
                                        fontWeight: 'bold',
                                        fontSize: 24,
                                    }}>{step.step}</Text>
                                </View>
                                <View style={{
                                    padding: 10,
                                    backgroundColor: '#444444',
                                    borderRadius: 10,
                                    width: '70%',
                                    height: 100,
                                }}>
                                    <TextInput
                                        placeholder='2 người '
                                        placeholderTextColor={'#9A9A9A'}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            fontSize: 20,
                                            color: 'white',
                                            textAlignVertical: 'top',
                                        }}
                                        multiline={true}
                                    />
                                </View>
                                <TouchableOpacity onPress={() => deleteStep(index)}>
                                    <EllipsisHorizontalIcon size={35} color={'white'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                    <TouchableOpacity onPress={addStep}>
                        <View
                            style={{
                                marginTop: 50,
                                alignItems: 'center',
                            }}
                        >
                            <Text style={{
                                color: 'white',
                                fontSize: 20,
                            }}>+ Cách làm</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}