// import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
import logo from '../assets/newLogo.png';
import WordItem from '../components/WordItem';
import Words_API_KEY from '../config/apikeys.js';
import FavoriteWordsScreen from './FavoriteWordsScreen';
const axios = require('axios');

export default function HomeScreen({ navigation }) {
	const [definitionDisplay, setDefinitionDisplay] = useState([]);
	const [enteredWord, setEnteredWord] = useState('');

	const wordInputHandler = (enteredText) => {
		setEnteredWord(enteredText);
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
				console.log('response:', response.data);
				setDefinitionDisplay(response.data);
			})
			.catch((err) => console.log('error:', err));
	};

	return (
		<View style={styles.screen}>
			<View style={{ flex: 2 }}>
				<Image source={logo} style={styles.logo} />
				<View style={styles.inputContainer}>
					<TextInput
						placeholder="search for a word"
						onChangeText={wordInputHandler}
						value={enteredWord}
					/>
				</View>
				<Button title="Search" onPress={searchWordHandler} />
			</View>

			<View style={styles.definitionContainer}>
				<WordItem definition={definitionDisplay} />
			</View>
			<View style={{ alignItems: 'flex-end' }}>
				<Button
					title="Go to favorite words"
					onPress={() => navigation.navigate('FavoriteWordsScreen')}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 60,
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#DFDAC9',
	},
	logo: {
		width: 240,
		height: 160,
		padding: 15,
		marginBottom: 15,
	},
	inputContainer: {
		borderColor: 'grey',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderWidth: 1,
		padding: 10,
	},
	definitionContainer: {
		alignSelf: 'stretch',
		flex: 3,
	},
});
