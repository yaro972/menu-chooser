import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import Home from './HomeRoutes/HomeNavigation';
import MenuRoute from './MenuRoute/MenuNavigation';

const AppNavigator = createStackNavigator(
    {
        Home,
        MenuRoute,
    }
);

export default createAppContainer(AppNavigator);
