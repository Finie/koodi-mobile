import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  Home,
  ToLogin,
  ToSignUp,
  SignUp,
  VerifyNumber,
  UserDetails,
  PinCreation,
  ConfirmPin,
  AccountVerification,
  DateOfBirth,
  SignIn,
  Pin,
  AppDashboard,
  ExistingLogin,
} from "./app/screens";
import Tabs from "./app/common/navigation/BottomTab";

const stack = createStackNavigator();

const App = () => {
  return (
    // <Provider store={store}>
    //   <ExistingLogin />
    // </Provider>
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"ToSignUp"}
      >
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Tabs" component={Tabs} />
        <stack.Screen name="AppDashboard" component={AppDashboard} />
        <stack.Screen name="ToLogin" component={ToLogin} />
        <stack.Screen name="ToSignUp" component={ToSignUp} />
        <stack.Screen name="SignUp" component={SignUp} />
        <stack.Screen name="SignIn" component={SignIn} />
        <stack.Screen name="VerifyNumber" component={VerifyNumber} />
        <stack.Screen name="UserDetails" component={UserDetails} />
        <stack.Screen name="PinCreation" component={PinCreation} />
        <stack.Screen name="ConfirmPin" component={ConfirmPin} />
        <stack.Screen name="DateOfBirth" component={DateOfBirth} />
        <stack.Screen name="Pin" component={Pin} />
        <stack.Screen
          name="AccountVerification"
          component={AccountVerification}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
