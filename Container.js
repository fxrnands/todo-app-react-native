import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./screen/LoginPage";
import RegisterPage from "./screen/RegisterPage";
import FrontPage from "./screen/FrontPage";

const Stack = createNativeStackNavigator();

function Container() {
  return (
    <Stack.Navigator alignItems="center" initialRouteName="FrontPage">
      <Stack.Screen
        name="FrontPage"
        component={FrontPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="RegisterPage" component={RegisterPage} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
    </Stack.Navigator>
  );
}

export default Container;
