import React, { useState } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {
	Button,
	StyleSheet,
	Text,
	View,
	ScrollView,
	FlastList,
} from 'react-native';

const WordItem = (props) => {
	const addToFavoritesHandler = () => {
		console.log('added to favorites');
		// const storeData = async (props) => {
		// 	try {
		// 		const jsonValue = JSON.stringify(value);
		// 		await AsyncStorage.setItem('@storage_Key', jsonValue);
		// 	} catch (e) {
		// 		console.log('error:', e);
		// 	}
		// };
	};

	return (
		<ScrollView>
			<View>
				<Text>{props.definition.word}</Text>
				<Text>{props.definition.text}</Text>
				<Text>{props.definition.attributionText}</Text>
			</View>
			<View>
				<Button title="add to favorites" onPress={addToFavoritesHandler} />
			</View>
		</ScrollView>
	);
};

export default WordItem;
