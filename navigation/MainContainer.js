import * as React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AccountScreen from "../navigation/screens/AccountScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import FavouriteScreen from "./screens/FavouriteScreen";
const Tab = createBottomTabNavigator();

function MainContainer({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === "Account") {
            iconName = focused ? "account-cog" : "account-cog-outline";
          } else if (rn === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (rn === "Favourite") {
            iconName = focused ? "cards-heart" : "cards-heart-outline";
          }

          return (
            <MaterialCommunityIcons name={iconName} size={32} color={color} />
          );
        },
        tabBarActiveTintColor: "pink",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: { padding: 10, height: 60 },
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favourite" component={FavouriteScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default MainContainer;
