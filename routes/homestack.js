import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import App from '..App';

const screens = {
	App: {
		screen: App,
	},
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
