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
import { CategorySearch } from "@/Screens/Category/CategorySearch";
import { ProfileContainer } from "@/Screens/Profile";

const Tab = createBottomTabNavigator();

// @refresh reset
export const MainNavigator = () => {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarButton: [
          "Detail",
          "Seasion",
          "CategorySearch"
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
        initialParams={{state: {status: false}}}
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
      <Tab.Screen
        name="Seasion"
        component={Seasion}
        options={{
          tabBarLabel: "Seasion",
        }}
      />
      <Tab.Screen
        name="CategorySearch"
        component={CategorySearch}
        options={{
          tabBarLabel: "CategorySearch",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileContainer}
        options={{
          tabBarLabel: "Profile",
        }}
      />
    </Tab.Navigator>
  );
};