import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const WordInput = (props) => {
	const [enteredWord, setEnteredWord] = useState('');

	const wordInputHandler = (enteredText) => {
		setEnteredWord(enteredText);
	};

	return (
		<View>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="search for a word"
					onChangeText={wordInputHandler}
					value={enteredWord}
				/>
			</View>
			<View>
				<Button title="Search" onPress={props.onSearchWord} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		borderColor: 'black',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderWidth: 1,
		padding: 10,
	},
});

export default WordInput;
