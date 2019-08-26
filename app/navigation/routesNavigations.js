import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import MenuRoute from './MenuRoute/MenuNavigation';

const AppNavigator = createStackNavigator({
  // Home,
  MenuRoute,
});

export default createAppContainer(AppNavigator);
