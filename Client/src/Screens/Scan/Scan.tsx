import React, { useEffect, useRef, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import {
  Button,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import * as MediaLibrary from "expo-media-library";
import { convertIngredient } from "./ConvertIngredient";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const Scan = () => {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean>();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] =
    useState<boolean>();
  const [type, setType] = useState(CameraType.back);
  const [photo, setPhoto] = useState();
  const [ingredients, setIngredients] = useState<string[]>([]);
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState<boolean>(false);


  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Permission for camera not granted. Please change this in settings.
      </Text>
    );
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef?.current.takePictureAsync(options);
    setPhoto(newPhoto);
    setLoading(true);
    axios
      .post("https://bkook-production.up.railway.app/api/upload", {
        image: "data:image/jpg;base64," + newPhoto.base64,
      })
      .then(function (response) {
        const responseData = response.data;
        setIngredients(responseData.ingredients);
        setLoading(false);

      })
      .catch(function (error) {
        console.error("Error al realizar la solicitud:", error);
      });
  };

  if (photo) {
    

    let savePhoto = () => {
      // MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
      //   setPhoto(undefined);
      // });
      setTimeout(()=>{

      },3000)
      if(!isLoading) {
        const results= convertIngredient(ingredients)
        console.log('result',results)
        navigation.navigate("CategorySearch", { input: results });
      }
     
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.preview}
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
        />
    
        {hasMediaLibraryPermission ? (
          <Button title="Tìm kiếm" onPress={savePhoto} />
        ) : undefined}
        <Button title="Xóa ảnh" onPress={() => setPhoto(undefined)} />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            className=" relative"
            style={styles.button}
            onPress={takePic}
          >
            <View className=" rounded-full w-[70px] h-[70px] bg-[#f1f1f1]"></View>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
});

export default Scan;
