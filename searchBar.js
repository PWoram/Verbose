import React, { Component, useState } from 'react';
import { Text, View, TextInput } from 'react-native';

const UselessTextInput = () => {
	const [textStyle, setText] = useState('');

	return (
		<TextInput
			style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
			onChangeText={(text) => setText(text)}
			defaultValue={text}
		/>
	);
};

export default UselessTextInput;
