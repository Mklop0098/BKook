import React, { useState, useEffect } from "react";
import { Register } from "./Register";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/Navigation";
import { RootScreens } from "..";

export const RegisterContainer = () => {
  return <Register />;
};
