import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
	Button,
	StyleSheet,
	Text,
	View,
	ScrollView,
	FlastList,
} from 'react-native';

const WordItem = (props) => {
	if (props.definition.definitions) {
		return (
			<ScrollView>
				<View>
					<Text style={styles.word}>{props.definition.word}</Text>
					{props.definition.definitions.map((definition) => (
						<View style={styles.definitions}>
							<Text>{definition.partOfSpeech}</Text>
							<Text key={definition.id}>{definition.definition}</Text>
						</View>
					))}
				</View>
				<View></View>
			</ScrollView>
		);
	} else {
		return <View></View>;
	}
};

const styles = StyleSheet.create({
	word: {
		marginBottom: 10,
		fontWeight: '600',
	},
	definitions: {
		marginTop: 5,
		marginBottom: 5,
	},
});
export default WordItem;
