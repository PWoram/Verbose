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
	if (props.definition.definitions) {
		return (
			<ScrollView>
				<View>
					<Text>{props.definition.word}</Text>
					{props.definition.definitions.map((definition) => (
						<View>
							<Text>{definition.definition}</Text>
						</View>
					))}
				</View>
				<View>
					<Button title="add to favorites" onPress={addToFavoritesHandler} />
				</View>
			</ScrollView>
		);
	} else {
		return <View></View>;
	}
};

const styles = StyleSheet.create({
	word: {
		padding: 5,
		fontSize: 10,
		fontWeight: '500',
	},
});
export default WordItem;
