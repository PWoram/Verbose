import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/HomeScreen';
import FavoriteWordsScreen from './screens/FavoriteWordsScreen';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer style={{ backgroundColor: '#DFDAC9' }}>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={Home}
					style={{ backgroundColor: '#DFDAC9' }}
				/>
				<Stack.Screen
					name="FavoriteWordsScreen"
					component={FavoriteWordsScreen}
					options={{ title: 'Favorite Words' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
