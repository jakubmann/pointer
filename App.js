import "react-native-gesture-handler";
import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";

import store from "./store";

import Home from "./screens/Home";
import Total from "./screens/Total";
import colors from "./config/colors";

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Total" component={Total} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
