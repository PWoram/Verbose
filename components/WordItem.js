import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlastList } from 'react-native';

const WordItem = (props) => {
	return (
		<ScrollView>
			<View>
				<Text>{props.word.word}</Text>
				<Text>{props.word.text}</Text>
				<Text>{props.word.attributionText}</Text>
			</View>
		</ScrollView>
	);
};

export default WordItem;
