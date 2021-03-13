import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import NewsScreen from './screens/NewsScreen'
import WeatherScreen from './screens/WeatherScreen'
import JokeScreen from './screens/JokeScreen'
import Horoscope from './screens/Horoscope'

import {createAppContainer,createSwitchNavigator} from 'react-navigation'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  NewsScreen:NewsScreen,
  WeatherScreen:WeatherScreen,
  JokeScreen:JokeScreen,
  Horoscope:Horoscope
})

const AppContainer = createAppContainer(AppNavigator)



