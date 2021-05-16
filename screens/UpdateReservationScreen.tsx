import * as React from 'react';
import { StyleSheet, Checkbox, Text, Button, TouchableOpacity, View, TextInput } from 'react-native';
import Table from '../components/Table';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import moment from 'moment';

export default function UpdateTableScreen({ state, dispatch, route,  navigation }) {

		const updating = route.params.updating
		console.log('updating:')
		console.log(route.params.updating)

		const initialReservation = (updating)? route.params.reservation 
				: { id: '', 
						table: '', 
						name: '', 
						date: null, 
						time: null, 
						currentGuest: 0,
						partySize: 0, 
						vip: false, 
						notes: '',  }

		// create table for choosing table 
		const tableList = state.grid
				.filter(sqr => sqr.table !== 'none')
				.map(table => { return { label: table.name, value: table.sqrID } });

		//create table for choosing party size
		const partySizeList = [];
		for( let i = 1; i < 16; i++ ) partySizeList.push({ label: i.toString(), value: i});

		// creat memory object to edit
		const [ reservation, setReservation ] = React.useState(initialReservation);

		// reservation handlers 
		const handleReservationNameChange = name => setReservation({ ...reservation,  name: name  }) 
		const handleReservationGroupChange = group => setReservation({ ...reservation, group: group  }) 
		const toggleReservationVIPChange = vip => setReservation({ ...reservation, vip: !reservation.vip }) 
		const handleReservationNoteChange = notes => setReservation({ ...reservation, notes: notes  }) 

		// functions to control the date picker
		const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
		const showDatePicker = () => setDatePickerVisibility(true);
		const hideDatePicker = () =>  setDatePickerVisibility(false);
		const handleDateConfirm = date => { 
				setReservation({ ...reservation, date: moment(date)  }); 
						hideDatePicker(); 
				};

		// functions to control the time picker
		const [isTimePickerVisible, setTimePickerVisibility] = React.useState(false);
		const showTimePicker = () => setTimePickerVisibility(true);
		const hideTimePicker = () =>  setTimePickerVisibility(false);
		const handleTimeConfirm = time => { 
				setReservation({ ...reservation, time: moment(time) }); 
				hideTimePicker(); 
		};

		// functions for seting the table, just pass the rable id and let the reducer pass the table reference
		const handleTableSelect = tableID => setReservation({ ...reservation, tableSqrID: tableID });

		// functions setting the party size
		const handlePartySize = size => setReservation({ ...reservation, partySize: size });

		// dispatch new table to global redux state
		const handleCreateClick = () => {  
				if(reservation.name !== '' ) dispatch({
						type: 'CREATE_RESERVATION', 
						payload: reservation,
				})
		} 

		// dispatch new table to global redux state
		const handleUpdateClick = () => {  
				if(reservation.name !== '' ) dispatch({
						type: 'UPDATE_RESERVATION', 
						payload: reservation,
				})
		} 
		return (
				<View style={styles.container}>
						<Text style={styles.title}>Reservation</Text>
						<View style={styles.separator}/>
						<View style={styles.col}>
								<View style={ styles.inputContainer}>
										<TextInput
												style={{...styles.input, width: '100%' }}
												placeholder="Name"
												placeholderTextColor="gray"
												onChangeText={handleReservationNameChange}
												defaultValue={reservation.name}
										/>
								</View>
								<View style={styles.row}>
										<View style={styles.inputContainer}>
												{ reservation.date !== null? <TouchableOpacity onPress={showTimePicker}>
														<Text style={styles.linkText}>
																{reservation.date.format("MM/DD/YY")}
														</Text>
												</TouchableOpacity>
												: <Button title="Date" color='gray' onPress={showDatePicker}/> }
												<DateTimePickerModal
														isVisible={isDatePickerVisible}
														mode="date"
														onConfirm={handleDateConfirm}
														onCancel={hideDatePicker}
												/>
										</View>
										<View style={styles.inputContainer}>
												{ reservation.time !== null? <TouchableOpacity onPress={showTimePicker}>
														<Text style={styles.linkText}> 
																{reservation.time.format("HH:MM")}
														</Text>
												</TouchableOpacity>
												: <Button title="Time" style={styles.button} color='gray' onPress={showTimePicker} /> }
												<DateTimePickerModal
														isVisible={isTimePickerVisible}
														mode="time"
														onConfirm={handleTimeConfirm}
														onCancel={hideDatePicker}
												/>
										</View>
										<View style={{...styles.inputContainer, margin: 10, width: 100, }}>
												<CheckBox
														title='VIP'
														iconRight
														textStyle={{color: 'white'}}
														containerStyle={styles.button}
														uncheckedColor='gray'
														checkedColor='gray'
														checkedIcon={ <Ionicons name={'star'} color={'gold'} size={20} style={styles.optionsIcon} /> }
														uncheckedIcon={ <Ionicons name={'star-outline'} color={'gold'} size={20} style={styles.optionsIcon} /> }
														checked={reservation.vip}
														onPress={toggleReservationVIPChange}
												/>
										</View>
								</View>
								<View style={styles.row}>
										<View style={styles.pickerContainer}>
												<RNPickerSelect
														placeholder={{
																label: 'Table',
																		value: 'select',
																		color: 'white',
														}}
														onValueChange={handleTableSelect}
														items={tableList}
														style={{ ...styles.title,
																		inputAndroid: {
																				color:"white",
																		},
																		inputIOS: {
																				color:"white",
																		},
														}}>
														</RNPickerSelect>
												</View>
												<View style={styles.pickerContainer}>
														<RNPickerSelect
																placeholder={{
																		label: 'Size',
																				value: 'select',
																				color: 'white',
																}}
																onValueChange={handlePartySize}
																items={partySizeList}
																style={{ ...styles.title,
																				inputAndroid: {
																						color:"white",
																				},
																				inputIOS: {
																						color:"white",
																				},
																}}>
																</RNPickerSelect>
														</View>
												</View>
												<View style={ styles.inputContainer}>
														<TextInput
																editable
																multiline={true}
																numberOfLines={4}
																textAlign={'left'}
																style={{...styles.input, textAlignVertical: 'top', borderWidth: 0.2, width: '100%' }}
																placeholder="Notes..."
																placeholderTextColor="gray"
																onChangeText={handleReservationNoteChange}
																defaultValue={reservation.note}
														/>
												</View>
										</View>
										{( updating )?
										<Button title="Update" style={{...styles.Button, borderRadius: 10}}
												onPress={() => { 
														handleUpdateClick(); 
														navigation.goBack();
												}}/>
												:
										<Button title="Create" style={{...styles.Button, borderRadius: 10}}
												onPress={() => { 
														handleCreateClick(); 
														navigation.goBack();
												}}/>
										}
										</View>
								);
}

const styles = StyleSheet.create({
		container: {
				flex: 1,
				backgroundColor: 'black',
				alignItems: 'center',
				justifyContent: 'center',
				padding: 20,
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
		},
		inputContainer: {
				marginHorizontal: 15,
				marginVertical: 30,
		},
		pickerContainer: {
				width: 135,
				marginHorizontal: 10,
				backgroundColor: 'gray',
		},
		button: {
				borderRadius: 2,
				borderColor: 'gray',  
				height: 39, 
				backgroundColor:'gray',
				alignItems:'center',
				justifyContent: 'center',
				fontWeight: 'normal' 
		},
		title: {
				fontSize: 17,
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
		input: {
				width: 120,
				color: 'white',
				borderBottomWidth: 0.2,
				borderColor: 'gold',
		},
		separator: {
				alignSelf: 'center',
				marginVertical: 15,
				height: 0.5,
				width: '70%',
				backgroundColor: '#eee',
		},
});
