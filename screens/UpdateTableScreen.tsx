import * as React from 'react';
import { StyleSheet, Checkbox, Text, Button, TouchableOpacity, View, TextInput } from 'react-native';
import Table from '../components/Table';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements'

const configinfo = { waiters: [
		{ label: 'Melissa', value: 'Melissa' },
		{ label: 'Jennifer', value: 'Jennifer' },
		{ label: 'Cassadra', value: 'Cassadra' },
		{ label: 'Selina', value: 'Selina' },
		{ label: 'Jake', value: 'Jake' },
],
}

export default function UpdateTableScreen({ dispatch, route,  navigation }) {

		let d = new Date();
		const { sqr, newTable } = route.params; // get the sqr data from react navigation
		sqr.table = newTable; // populate it with data
		sqr.name = '';
		sqr.waiter = '';
		sqr.group = '';

		// make a new resevation object
		const initialReservation = { tableID: sqr.sqrId, name: '', date: null, time: null, vip: false, notes: '' };
		const [ reservation, setReservation ] = React.useState(initialReservation);
		const [ table, setTable ] = React.useState({...sqr});

		// table handler functions 
		const handleTableNameChange = name => setTable({ ...table, name: name  }) 
		const handleTableWaiterChange = waiter => setTable({ ...table, waiter: waiter }) 
		const handleTableGroupChange = group => setTable({ ...table, group: group }) 

		// reservation handlers 
		const handleReservationNameChange = name => setReservation({ ...reservation,  name: name  }) 
		const handleReservationGroupChange = group => setReservation({ ...reservation, group: group  }) 
		const toggleReservationVIPChange = vip => setReservation({ ...reservation, vip: !reservation.vip }) 
		const handleReservationNoteChange = notes => setTable({ ...reservation, notes: notes  }) 

		// functions to control the date picker
		const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
		const showDatePicker = () => setDatePickerVisibility(true);
		const hideDatePicker = () =>  setDatePickerVisibility(false);
		const handleDateConfirm = date => { setReservation({ ...reservation, date: date  }); hideDatePicker(); };

		// functions to control the time picker
		const [isTimePickerVisible, setTimePickerVisibility] = React.useState(false);
		const showTimePicker = () => setTimePickerVisibility(true);
		const hideTimePicker = () =>  setTimePickerVisibility(false);
		const handleTimeConfirm = time => { setReservation({ ...reservation, time: time }); hideTimePicker(); };

		// dispatch new table to global redux state
		const handleDoneClick = () => {  
				if(reservation.name !== '' ) dispatch({ type: 'CREATE_RESERVATION', payload: reservation })
				dispatch({ type: 'CREATE_TABLE_ON_GRID', payload: table });
		} 

		return (
				<View style={styles.container}>
						<View style={styles.tableContainer}>
								<Table sqr={table} reservation={reservation} isEditMode={false} />
						</View>
						<Text style={styles.title}>Table</Text>
						<View style={styles.separator}/>
						<View style={styles.col}>
								<View style={styles.row}>
										<View style={styles.inputContainer}>
												<TextInput
														style={styles.input}
														placeholder="Name"
														placeholderTextColor="gray"
														onChangeText={handleTableNameChange}
														defaultValue={table.name}
												/>
										</View>
										<View style={styles.inputContainer}>
												<TextInput
														style={styles.input}
														placeholder="Group"
														placeholderTextColor="gray"
														onChangeText={handleTableGroupChange}
														defaultValue={table.group}
												/>
										</View>
								</View>
								<View style={styles.pickerContainer}>
										<RNPickerSelect
												placeholder={{
														label: 'Waiter',
																value: 'select',
																color: 'gray',
												}}
												onValueChange={handleTableWaiterChange}
												items={configinfo.waiters}
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
						<Text style={styles.title}>Reservation</Text>
						<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
														<Text style={styles.linkText}>{reservation.date.toLocaleDateString("es-US")}</Text>
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
																{reservation.time.toLocaleTimeString("es-US", { hour12: false, hour: '2-digit', minute: '2-digit' } )}
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
						</View>
						<Button title="Done" style={{...styles.Button, borderRadius: 10}}
								onPress={() => { 
										handleDoneClick(); 
										navigation.goBack();
								}}/>
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
		},
		row:{
				flexDirection: 'row',
		},
		inputContainer: {
				margin: 15,
		},
		pickerContainer: {
				width: 'auto',
				marginLeft: "10%",
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
