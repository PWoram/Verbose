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
import WordItem from '../components/WordItem';

export default function FavoriteWordsScreen({ route, navigation }) {
	const { favoriteWords } = route.params;
	// const uniqueFavoriteWords = favoriteWords.unique();
	const [favWords, setFavWords] = useState(favWords);

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
			<View style={styles.favoriteWordsContainer}>
				{favoriteWords.map((word) => (
					<View style={{ flexDirection: 'row' }}>
						<WordItem definition={word.value} />
						{/* <Text>{word.value.word}</Text>
						<Text>{word.value.definitions[0]}</Text> */}
					</View>
				))}
			</View>
			<View style={styles.buttonContainer}>
				<Button
					title="Clear Favorite Words"
					onPress={clearStorage}
					style={styles.button}
				/>
			</View>
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
	buttonContainer: {
		flex: 1,
	},
	favoriteWordsContainer: {
		alignContent: 'flex-start',
		flex: 3,
		paddingTop: 20,
	},
});

// const getMyObject = async () => {
// 	try {
// 		const jsonValue = await AsyncStorage.getItem('key');
// 		return jsonValue != null ? setFavWords(JSON.parse(jsonValue)) : null;
// 	} catch (e) {
// 		// read error
// 	}
// 	console.log('Done.');
// };

// useEffect(() => {
// 	getMyObject();
// }, []);
