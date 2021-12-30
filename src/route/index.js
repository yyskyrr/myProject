import * as React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import WebIndex from '../pages/index';
import HomeTabs from './tabs';
import Mine from '../pages/mine';
import GoodsList from '../pages/goods-list';
import GoodsDetail from '../pages/goods-detail';

const Stack = createStackNavigator();
export default function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={() => ({
            headerShown: true,
            headerBackTitle: ' ',
            title: '',
          })}
          name="Index"
          component={HomeTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
