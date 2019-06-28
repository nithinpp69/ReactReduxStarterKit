import { createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";
import { Animated, Easing } from 'react-native';
import SplashScreenUI from '../modules/splash/container/splashScreen';
import Login from '../modules/login/container/LoginScreen';
import HomeScreen from '../modules/home/container/HomeScreen';
import { Colors } from '../helpers/colors';

const AuthStack = createStackNavigator({
  Login: { screen: Login }
}, {
    headerMode: 'float',
    mode: 'modal',
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 4,
        shadowOpacity: 0.6,
        shadowOffset: {
          height: 0.2,
        },
        shadowRadius: 2,
        backgroundColor: Colors.THEME_COLOR,
      },
      headerTitleStyle: {
        fontWeight: '400',
        color: Colors.WHITE
      },
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 400,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;
        const height = layout.initHeight;
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });
        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });
        return { opacity, transform: [{ translateX }] };
      },
    }),
  });

const Appstack = createStackNavigator({
  Home: { screen: HomeScreen },
},
  {
    headerMode: 'float',
    mode: 'modal',
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 4,
        shadowOpacity: 0.6,
        shadowOffset: {
          height: 0.2,
        },
        shadowRadius: 2,
        backgroundColor: Colors.THEME_COLOR,
      },
      headerTitleStyle: {
        fontWeight: '400',
        color: Colors.WHITE
      },
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 400,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;
        const height = layout.initHeight;
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });
        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });
        return { opacity, transform: [{ translateX }] };
      },
    }),
  });

const AppNavigator = createSwitchNavigator({
  SplashScreen: { screen: SplashScreenUI },
  Authentication: { screen: AuthStack },
  Application: { screen: Appstack },
},
  {
    initialRouteName: 'SplashScreen'
  });

export default createAppContainer(AppNavigator);