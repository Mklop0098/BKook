import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeContainer } from "@/Screens/Home";
import { CategoryContainer } from "@/Screens/Category/CategoryContainer";
import { Seasion } from "@/Screens/Home/Seasion";
import { BottomTabBar } from '@react-navigation/bottom-tabs'

import { ScanContainer } from "@/Screens/Scan/ScanContainer";
import { LoginContainer } from "../../Screens/Login";
import { RegisterContainer } from "../../Screens/Register";
import { RecipeDetail } from "@/Screens/RecipeDetail";
import { CreateFood } from "@/Screens/Profile/CreateFood";
import { DetailSaveDishesScreen } from "@/Screens/Profile/DetailSaveDishesScreen";

const Tab = createBottomTabNavigator();

// @refresh reset
export const MainNavigator = () => {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarButton: [
          "Detail",
        ].includes(route.name)
          ? () => {
              return null;
            }
          : undefined,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeContainer}
        options={{
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Search"
        component={CategoryContainer}
        options={{
          tabBarLabel: "Search",
        }}
      />
      <Tab.Screen
        name="Post"
        component={CreateFood}
        options={{
          tabBarLabel: "Post",
        }}
      />
      <Tab.Screen
        name="Detail"
        component={DetailSaveDishesScreen}
        options={{
          tabBarLabel: "Detail",
        }}
      />
    </Tab.Navigator>
  );
};