import React, { useState } from "react";
import { View, Text } from "react-native";
import foodRecognize from "./FoodRecognition";

const Scan = () => {
  const [listFood, setFood] = useState<string[]>([]);

  return <View><Text>Hello</Text></View>;
};

export default Scan;
