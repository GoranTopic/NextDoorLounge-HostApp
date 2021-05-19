import * as React from 'react';
import { StyleSheet, Checkbox, Text, Button, TouchableOpacity, View, TextInput } from 'react-native';
import Table from '../components/Table';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import moment from 'moment';

export default function DetailReservationScreen({ state, dispatch, route,  navigation }) {

		// get the table object back to the reservation.table
		const reservation = route.params.reservation;
		reservation.table = state.grid.filter((sqr) => sqr.sqrID === reservation.tableSqrID)[0] // there should only be one

		// dispatch new table to global redux state // not yet implemented
		const handleAddGuest = () => dispatch({ type: 'ADD_ONE_GUEST', })
		const handleRemoveGuest = () => dispatch({ type: 'REMOVE_ONE_GUEST', })


		return (
				<View style={styles.container}>
						<Text style={styles.title}>{reservation.name}</Text>
						<View style={styles.separator}/>
						<View style={styles.col}>
								<View style={styles.row}>
										<View style={styles.inputContainer}>
												{ reservation.date !== null && 
												<Text style={styles.linkText}>
														{reservation.date.format("MM/DD/YY")}
												</Text>
												}
										</View>
										<View style={styles.inputContainer}>
												{ reservation.time !== null && 
												<Text style={styles.linkText}> 
														{reservation.time.format("HH:MM")}
												</Text>
												}
										</View>
										<View style={{...styles.inputContainer, margin: 10, width: 100, }}>
												<CheckBox
														title='VIP'
														iconRight
														enable={false}
														textStyle={{color: 'white'}}
														containerStyle={styles.button}
														uncheckedColor='gray'
														checkedColor='gray'
														checkedIcon={ <Ionicons name={'star'} color={'gold'} size={20} style={styles.optionsIcon} /> }
														uncheckedIcon={ <Ionicons name={'star-outline'} color={'gold'} size={20} style={styles.optionsIcon} /> }
														checked={reservation.vip}/>
										</View>
								</View>
								<View style={styles.row}>
										<View style={styles.pickerContainer}>
												<Table sqr={reservation.table} />
										</View>
										<View style={styles.pickerContainer}>
												<Text style={styles.party}>  { reservation.currentGuest } guest out of { reservation.partySize } </Text>
										</View>
								</View>
								<View style={ styles.inputContainer}>
										<Text
												multiline={true}
												numberOfLines={4}
												style={{...styles.name, textAlign: 'left', borderWidth: 0.2, color: 'white',  padding: 10, width: 'auto', height: 150}}
										>
									{reservation.notes}
										</Text>
								</View>
						</View>
				</View>
		);
}

const styles = StyleSheet.create({
		container: {
				flex: 1,
				backgroundColor: 'black',
				alignItems: 'center',
				justifyContent: 'flex-start',
				padding: 20,
				marginTop: '5%',

		},
		tableContainer: {
				alignItems: 'center',
				justifyContent: 'center',
				height: '20%',
		},
		col:{
				flexDirection: 'column',
				padding: 20,
				marginHorizontal: 30,
		},
		row:{
				flexDirection: 'row',
				marginHorizontal: 10,
		},
		inputContainer: {
				marginHorizontal: 15,
				marginVertical: 30,
		},
		pickerContainer: {
				width: 'auto',
				marginHorizontal: 10,
		},
		party: {
			color: 'white',
				textAlign: 'center',
				fontSize: 15,
		},
		button: {
				borderRadius: 2,
				borderColor: 'transparent',  
				height: 39, 
				backgroundColor:'transparent',
				alignItems:'center',
				justifyContent: 'center',
				fontWeight: 'normal' 
		},
		title: {
				fontSize: 18,
				fontWeight: 'bold',
				color: 'white',
		},
		link: {
				marginTop: 15,
				paddingVertical: 15,
		},
		linkText: {
				fontSize: 14,
				color: '#2e78b7',
		},
		name: {
				width: 'auto',
				textAlign: 'center',
				color: 'white',
				borderBottomWidth: 0.2,
				borderColor: 'gold',
		},
		separator: {
				alignSelf: 'center',
				marginVertical: 15,
				height: 0.5,
				width: '70%',
				backgroundColor: 'gold',
		},
});
