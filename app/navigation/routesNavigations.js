import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import HomeRoute from './HomeRoutes/HomeNavigation';
import MenuRoute from './MenuRoute/MenuNavigation';

const AppNavigator = createStackNavigator({
  HomeRoute,
  MenuRoute,
});

export default createAppContainer(AppNavigator);
