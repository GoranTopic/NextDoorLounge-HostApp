import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import useColorScheme from '../hooks/useColorScheme';
import StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ner } from '@react-navigation/native';
import { createStackNavi2gator } from '@react-navigation/stack'

export default function ( { reserv, update, remove, navigation }) {
		const [isEditMode, setEditMode ] = React.useState(false);
	
		const handleEditToggle = () => setEditMode(!isEditMode)
			
		const handlePress = () => navigation.navigate('Layout', { id: reserv.id })

		const handleUpdate = () => update(reserv.id)

		const handleRemove =() => remove(reserv.id)

		return( 
		<View style={styles.inputContainer}>
				<Text style={styles.inputTitle}>Table name: </Text>
				<TextInput
						style={styles.input}
						placeholder="Reservation name"
						placeholderTextColor="gray"
						onChangeText={text => setText(text) }
						defaultValue={text}
				/>
		</View>
		);
}

const styles = StyleSheet.create({
		container: {
				alignItems: 'center',
				justifyContent: 'center',
		},
		tableBox: {
				alignSelf: 'center',
				alignItems: 'center',
				justifyContent: 'center',
				borderColor: 'green',
				borderWidth: 0.5,
				borderRadius: 5,
				marginRight: 15,
				height: 25,
				width: 25,
		},
		tableText:{
				color: 'green',
		},
		resevation:{
				alignSelf: 'center',
				borderColor: 'gray',
				borderWidth: 0.2,
				borderRadius: 2,
				width: "85%",
				paddingHorizontal: 10,
				paddingVertical: 10, 
				marginVertical: 4,
				display: 'flex',
				shadowColor: 'rgba(100, 100, 100, 0.2)',
				shadowOffset: {
						width: 0,
						height: -3,
				},
				shadowRadius: 5,
				flexDirection: "row",
				justifyContent: 'space-between',
				alignItems: 'center',
		},
		resevationEditMode:{
				alignSelf: 'center',
				borderColor: 'red',
				borderWidth: 0.2,
				borderRadius: 2,
				width: "85%",
				paddingHorizontal: 10,
				paddingVertical: 10, 
				marginVertical: 4,
				display: 'flex',
				shadowColor: 'rgba(100, 100, 100, 0.2)',
				shadowOffset: {
						width: 0,
						height: -3,
				},
				shadowRadius: 5,
				flexDirection: "row",
				justifyContent: 'space-between',
				alignItems: 'center',
		},
		name: {
				color: 'white',
				alignSelf: 'center',
		},
		party: {
				fontSize: 12,
				color: 'gray',
				alignSelf: 'center',
		},
		arrival: {
				fontSize: 12,
				color: 'gray',
				alignSelf: 'center',
				textAlign: 'left',
		},
		optionsIcon: {
				alignSelf: 'center',
				textAlign: 'left',
		},
});

