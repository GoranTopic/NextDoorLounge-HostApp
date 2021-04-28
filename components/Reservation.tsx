import * as React from 'react';
import useColorScheme from '../hooks/useColorScheme';
import { StyleSheet, Text, View, } from 'react-native';

export default function Reservation( { reserv }) {
		console.log(reserv.name);
		return( <View style={styles.resevation}>
				<Text style={styles.name}>{ reserv.name }</Text>
		</View>);
}

const styles = StyleSheet.create({
		container: {
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: 'white',
		},
		resevation:{
				alignSelf: 'center',
				borderColor: 'gray',
				borderWidth: 0.2,
				borderRadius: 2,
				padding: 5, 
				width: "85%",
				marginVertical: 3,
		},
		reservList: {
				paddingVertical: 15,
				height: "50%",
				width: '100%',
		},
		name: {
				color: 'white',
		},

});

