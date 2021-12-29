import {createStackNavigator} from 'react-navigation-stack';

import {createAppContainer} from 'react-navigation';

import Index from '../pages/index';
import Mine from '../pages/mine';
import GoodsList from '../pages/goods-list';
import GoodsDetail from '../pages/goods-detail';
import Tab from '../component/tab';

const getOption = () => ({
  headerShown: false,
});

const Router = createStackNavigator(
  {
    Index: {
      screen: Index,
      navigationOptions: getOption(),
    },
    Tab: {
      screen: Tab,
      navigationOptions: getOption(),
    },

    Mine: {
      screen: Mine,
      navigationOptions: getOption(),
    },

    GoodsList: {
      screen: GoodsList,
      navigationOptions: getOption(),
    },

    GoodsDetail: {
      screen: GoodsDetail,
      navigationOptions: getOption(),
    },
  },

  {
    hearderBackTitleVisible: false,
  },
);

export default createAppContainer(Router);
