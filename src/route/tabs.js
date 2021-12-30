import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Index from '../pages/index';
import Mine from '../pages/mine';
import GoodsList from '../pages/goods-list';
import GoodsDetail from '../pages/goods-detail';

export default function HomeTabs({route, navigation}) {
  let initialRouteName = 'Browse';
  if (route.params && route.params.path) {
    initialRouteName = route.params.path;
  }
  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        tabBarActiveTintColor: '#2f2f2f',
      }}>
      <Tab.Screen
        headerShown={false}
        name="Index"
        component={Index}
        options={{
          headerShown: true,
          tabBarLabel: '首页',
        }}
      />
      <Tab.Screen
        name="GoodsList"
        component={GoodsList}
        options={{
          title: 'GoodsList',
          tabBarLabel: '商品列表',
        }}
      />
      <Tab.Screen
        name="GoodsDetail"
        component={GoodsDetail}
        options={{
          headerShown: true,
          tabBarLabel: '商品详情',
        }}
      />
      <Tab.Screen
        name="Mine"
        component={Mine}
        options={{
          title: '我的',
          tabBarLabel: '我的',
        }}
      />
    </Tab.Navigator>
  );
}
