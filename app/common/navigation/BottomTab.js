import React from "react";
import { Image, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AppDashboard,
  // Profile,
  // Likes,
  // PostNavigation,
  // MessagesScreen,
  // ChatScreen,
} from "../../screens";
import { images } from "../../constants";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const MessageStack = ({navigation}) => (
//   <Stack.Navigator>
//     <Stack.Screen
//       name="Messages"
//       component={MessagesScreen}
//       options={({route}) => ({
//         headerBackTitleVisible: false,
//       })}
//       screenOptions={{
//         headerShown: false,
//       }}
//     />
//     <Stack.Screen
//       name="Chat"
//       component={ChatScreen}
//       options={({route}) => ({
//         headerShown: false,
//       })}
//     />
//   </Stack.Navigator>
// );

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="AppDashboard"
      tabBarOptions={{
        showLabel: false,
        inactiveTintColor: "rgb(200,200,200)",
        activeTintColor: "#A952F6",
        style:
          Platform.OS === "android" ? { height: 50 } : { paddingVertical: 8 },
      }}>
      <Tab.Screen
        name="Home"
        component={AppDashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={AppDashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-balance-wallet" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={AppDashboard}
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Icon name="payments" color={color} size={26} />
          ),
        })}
      />

      <Tab.Screen
        name="Profile"
        component={AppDashboard}
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={26} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
