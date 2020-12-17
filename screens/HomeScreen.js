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
import Wordnik_API_KEY from '../config/apikeys.js';
import FavoriteWordsScreen from './FavoriteWordsScreen';
const axios = require('axios');

export default function HomeScreen({ navigation }) {
	const [definitionDisplay, setDefinitionDisplay] = useState([]);
	const [enteredWord, setEnteredWord] = useState('');

	const wordInputHandler = (enteredText) => {
		setEnteredWord(enteredText);
	};

	const searchWordHandler = () => {
		axios
			.get(
				`http://api.wordnik.com/v4/word.json/${enteredWord.toLowerCase()}/definitions?api_key=${Wordnik_API_KEY}`,
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
			<TextInput
				placeholder="search for a word"
				onChangeText={wordInputHandler}
				value={enteredWord}
			/>
			<View>
				<Button title="Search" onPress={searchWordHandler} />
			</View>
			<WordItem definition={definitionDisplay} />
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
		borderColor: 'black',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '240',
		borderWidth: 1,
		padding: 10,
	},
});
