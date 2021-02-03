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
import FavoriteWord from '../components/FavoriteWord';

export default function FavoriteWordsScreen({ route, navigation }) {
	const { favoriteWords } = route.params;

	const [favWords, setFavWords] = useState(favWords);

	// const uniq = function (array, isSorted, iterator) {
	// 	// when given an unsorted array
	// 	if (iterator === undefined) {
	// 		var counter = {};
	// 		var result = [];

	// 		for (var i = 0; i < array.length; i++) {
	// 			if (counter[array[i]] === undefined) {
	// 				counter[array[i]] = 1;
	// 				result.push(array[i]);
	// 			} else {
	// 				counter[array[i]]++;
	// 			}
	// 		}
	// 		return result;
	// 	} else {
	// 		var counter = {};
	// 		var result = [];

	// 		for (var i = 0; i < array.length; i++) {
	// 			if (iterator(iterator(counter[array[i]])) === undefined) {
	// 				counter[iterator(array[i])] = 1;
	// 				result.push(iterator(array[i]));
	// 			} else {
	// 				counter[iterator(array[i])]++;
	// 			}
	// 		}
	// 		return result;
	// 	}
	// };
	// var uniqueFavoriteWords = uniq(
	// 	favoriteWords,
	// 	false,
	// 	(function ((word) => { word = word.value.word }))
	// );

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
					<View>
						<FavoriteWord definition={word.value} key={word.value.word} />
						{/* <Text>{word.value.word}</Text>
						<Text>{word.value.definitions[0]}</Text> */}
					</View>
				))}
			</View>
			{/* <View style={styles.buttonContainer}>
				<Button
					title="Clear Favorite Words"
					onPress={clearStorage}
					style={styles.button}
				/>
			</View> */}
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
