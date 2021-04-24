import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import AppMain from "../components/appMain";
import HeaderMain from "../components/Header";
import SplashScreen from "../components/splashScreen/SplashScreen";
import SignUp from "../components/SignUp/SignUp";
import Login from "../components/Login/login";

const screens = {
  AppMain: {
    screen: SplashScreen,
    navigationOptions: { headerShown: false },
  },
  Login: {
    screen: Login,
    navigationOptions: { headerShown: false },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: { headerShown: false },
  },
};

const HomeStack = createStackNavigator(screens, {
  mode: "modal",
  transparentCard: true,
});
export default createAppContainer(HomeStack);
