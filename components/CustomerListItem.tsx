import * as React from 'react';
import { Text, View, TextInput } from './Themed';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { StyleSheet,  } from 'react-native';

export default function CustomerItem( item ) {

		return (
			  <View style={styles.container}>
						<Text style={styles.title}>{item.title}</Text>
				</View>
		);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
			backgroundColor: 'white',
  },
	title: {
    fontSize: 20,
    fontWeight: 'bold',
		color: 'white',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

