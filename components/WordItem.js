import React, { useState } from 'react';
import {
	Button,
	StyleSheet,
	Text,
	View,
	ScrollView,
	FlastList,
} from 'react-native';

const WordItem = (props) => {
	// const addToFavoritesHandler = () => {

	// }

	return (
		<ScrollView>
			<View>
				<Text>{props.definition.word}</Text>
				<Text>{props.definition.text}</Text>
				<Text>{props.definition.attributionText}</Text>
			</View>
			<View>
				{/* <Button title="add to favorites" onPress={addToFavoritesHandler} /> */}
			</View>
		</ScrollView>
	);
};

export default WordItem;
