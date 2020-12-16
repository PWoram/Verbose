import { StatusBar } from 'expo-status-bar';
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
import logo from './assets/logo.png';
import WordItem from './components/WordItem';
import WordInput from './components/WordInput';
import Wordnik_API_KEY from './config/apikeys.js';
const axios = require('axios');

export default function App() {
	const [enteredWord, setEnteredWord] = useState('');
	const [definitionDisplay, setDefinitionDisplay] = useState([]);
	const [favoriteWords, setFavoriteWords] = useState([]);

	const searchWordHandler = () => {
		axios
			.get(
				`http://api.wordnik.com/v4/word.json/${enteredWord}/definitions?api_key=${Wordnik_API_KEY}`,
				{
					params: {
						limit: 1,
						useCanonical: true,
					},
				}
			)
			.then((data) => {
				console.log('data:', data.data[0]);
				setDefinitionDisplay(data.data[0]);
			})
			.catch((err) => console.log('error:', err));
	};

	return (
		<View style={styles.screen}>
			<Image source={logo} style={styles.logo} />
			<WordInput onSearchWord={searchWordHandler} />
			<WordItem word={definitionDisplay} />
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 60,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	logo: {
		width: 160,
		height: 160,
		padding: 15,
		marginBottom: 15,
	},
});
