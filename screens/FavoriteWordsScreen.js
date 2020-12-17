import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
	StyleSheet,
	ScrollView,
	Button,
	Image,
	Text,
	View,
	TextInput,
} from 'react-native';

export default function FavoriteWordsScreen() {
	const [favWords, setFavWords] = useState([]);

	const getMyObject = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem('key');
			return jsonValue != null ? setFavWords(JSON.parse(jsonValue)) : null;
		} catch (e) {
			// read error
		}
		console.log('Done.');
	};

	useEffect(() => {
		getMyObject();
	}, []);

	const clearStorage = async () => {
		try {
			await AsyncStorage.clear();
			alert('Poof! No more favorite words.');
		} catch (e) {
			alert('Failed to clear the async storage.');
		}
	};

	return (
		<View style={styles.screen}>
			<Text>Favorite Words</Text>
			<Button
				title="Clear Favorite Words"
				onPress={clearStorage}
				style={styles.button}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		alignItems: 'center',
		flex: 1,
		backgroundColor: '#DFDAC9',
	},
	button: {
		paddingTop: 60,
	},
});
