import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/HomeScreen';

// function HomeScreen() {
// 	return (
// 		<View
// 			style={{
// 				flex: 1,
// 				alignItems: 'center',
// 				justifyContent: 'center',
// 				backgroundColor: '#D9CB81',
// 			}}
// 		>
// 			<Text>Home Screen</Text>
// 		</View>
// 	);
// }

function FavoriteWordsScreen() {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Details Screen</Text>
		</View>
	);
}

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="FavoriteWords" component={FavoriteWordsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
