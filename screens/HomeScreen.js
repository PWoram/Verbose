// import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import {
	StyleSheet,
	ScrollView,
	Button,
	Image,
	Text,
	View,
	TextInput,
} from 'react-native';
import logo from '../assets/newestLogo.png';
import WordItem from '../components/WordItem';
import Words_API_KEY from '../config/apikeys.js';
import FavoriteWordsScreen from './FavoriteWordsScreen';
const axios = require('axios');

export default function HomeScreen({ navigation }) {
	const [definitionDisplay, setDefinitionDisplay] = useState([]);
	const [enteredWord, setEnteredWord] = useState('');
	const [favoriteWords, setFavoriteWords] = useState([]);
	const [displayOn, toggleDisplayOn] = useState(false);

	const wordInputHandler = (enteredText) => {
		setEnteredWord(enteredText);
	};

	const setObjectValue = async (value) => {
		try {
			const jsonValue = JSON.stringify('key', value);
			await AsyncStorage.setItem(jsonValue);
		} catch (e) {
			// save error
			console.log('error saving', e);
		}

		console.log('Done.');
	};

	const addFavoriteWordHandler = () => {
		setFavoriteWords((currentFavoriteWords) => [
			...currentFavoriteWords,
			{ id: Math.random().toString(), value: definitionDisplay },
		]);
		console.log(favoriteWords);
		var favWordsArray = [favoriteWords];
		setObjectValue(favWordsArray);
	};

	const searchWordHandler = () => {
		const options = {
			method: 'GET',
			url: `https://wordsapiv1.p.rapidapi.com/words/${enteredWord}/definitions`,
			headers: {
				'x-rapidapi-key': Words_API_KEY,
				'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
			},
		};

		axios
			.request(options)
			.then((response) => {
				setDefinitionDisplay(response.data);
			})
			.catch((err) => console.log('error:', err));
	};

	return (
		<View style={styles.screen}>
			<View style={{}}>
				<Image source={logo} style={styles.logo} />
			</View>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="search for a word"
					onChangeText={wordInputHandler}
					value={enteredWord}
					style={styles.input}
				/>
				<Button title="Search" onPress={searchWordHandler} />
			</View>

			<View style={styles.definitionContainer}>
				<WordItem definition={definitionDisplay} />
				<Button title="Add to Favorites" onPress={addFavoriteWordHandler} />
			</View>
			<View style={{ alignItems: 'flex-end' }}>
				<Button
					title="Go to Favorite Words"
					onPress={() => navigation.navigate('FavoriteWordsScreen')}
				/>
			</View>
			<View style={{ flex: 1 }}></View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#DFDAC9',
	},
	logo: {
		transform: [{ scale: 0.55 }],
		padding: 15,
		marginBottom: 15,
	},
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	input: {
		borderColor: 'grey',
		borderWidth: 1,
		padding: 10,
		width: '70%',
	},
	definitionContainer: {
		justifyContent: 'space-between',
		padding: 20,
		flex: 3,
		maxWidth: 350,
	},
});
