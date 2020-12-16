import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlastList } from 'react-native';

const WordItem = (props) => {
	return (
		<ScrollView>
			<View>
				<Text>{props.definition.word}</Text>
				<Text>{props.definition.text}</Text>
				<Text>{props.definition.attributionText}</Text>
			</View>
		</ScrollView>
	);
};

export default WordItem;
