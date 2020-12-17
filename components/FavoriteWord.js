import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FavoriteWord = (props) => {
	const [isShowDefinition, setIsShowDefinition] = useState(false);

	const showDefinitionHandler = () => {
		setIsShowDefinition(true);
	};

	const closeDefinitionHandler = () => {
		setIsShowDefinition(false);
	};

	if (isShowDefinition) {
		return (
			<TouchableOpacity onPress={() => setIsShowDefinition(false)}>
				<View style={styles.listItem}>
					<Text style={styles.word}>{props.definition.word}</Text>
					{props.definition.definitions.map((definition) => (
						<View style={styles.definitions}>
							<Text key={definition.word}>{definition.partOfSpeech}</Text>
							<Text key={definition.id}>{definition.definition}</Text>
						</View>
					))}
				</View>
			</TouchableOpacity>
		);
	} else {
		return (
			<TouchableOpacity onPress={() => setIsShowDefinition(true)}>
				<View style={styles.listItem}>
					<Text style={styles.word}>{props.definition.word}</Text>
				</View>
			</TouchableOpacity>
		);
	}
};

const styles = StyleSheet.create({
	listItem: {
		width: 300,
		marginVertical: 10,
		// backgroundColor: '#ccc',
		// borderColor: 'black',
		// borderWidth: 1,
	},
	word: {
		marginTop: 5,
		marginBottom: 10,
		fontWeight: '700',
	},
	definitions: {
		marginTop: 5,
		marginBottom: 5,
	},
});

export default FavoriteWord;
