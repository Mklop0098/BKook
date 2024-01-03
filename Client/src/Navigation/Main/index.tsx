import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeContainer } from "@/Screens/Home";
import { CategoryContainer } from "@/Screens/Category/CategoryContainer";
import { Seasion } from "@/Screens/Home/Seasion";
import { CreateFood } from "@/Screens/Profile/CreateFood";
import { DetailSaveDishesScreen } from "@/Screens/Profile/DetailSaveDishesScreen";
import { CategorySearch } from "@/Screens/Category/CategorySearch";
import { ProfileContainer } from "@/Screens/Profile";
import { HomeIcon } from "react-native-heroicons/solid";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
import { PlusCircleIcon } from "react-native-heroicons/solid";
import { UserCircleIcon } from "react-native-heroicons/solid";

const Tab = createBottomTabNavigator();

// @refresh reset
export const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarButton: ["Detail", "Seasion", "CategorySearch"].includes(
          route.name
        )
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
          tabBarIcon: ({ color, size }) => (
            <HomeIcon  color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={CategoryContainer}
        initialParams={{ state: { status: false } }}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <MagnifyingGlassIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={CreateFood}
        options={{
          tabBarLabel: "Post",
          tabBarIcon: ({ color, size }) => (
            <PlusCircleIcon  color={color} size={size} />
          ),
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
          tabBarIcon: ({ color, size }) => (
            <UserCircleIcon color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
