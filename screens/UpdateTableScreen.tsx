import * as React from 'react';
import { StyleSheet, Text, Button, TouchableOpacity, View, TextInput } from 'react-native';
import Table from '../components/Table';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from 'react-native-picker-select';

const configinfo = { waiters: [
												{ label: 'Melissa', value: 'red' },
												{ label: 'Jennifer', value: 'blue' },
												{ label: 'Cassadra', value: 'green' },
												{ label: 'Selina', value: 'pink' },
												{ label: 'Jake', value: 'purple' },
										],
}

export default function UpdateTableScreen({ route,  navigation }) {
		console.log(navigation);
		console.log(route);
		let d = new Date();
		const { sqr, newTable } = route.params;
		sqr.table = newTable;
		sqr.name = '';
		sqr.waiter = '';
		sqr.group = '';
		sqr.reservation = { name: '', date: null, time: null, vip: false, notes: '' };

		const [table, setTable] = React.useState({...sqr});

		// table handler functions 
		const handleTableNameChange = name => setTable({ ...table, name: name  }) 
		const handleTableWaiterChange = waiter => setTable({ ...table, waiter: waiter }) 
		const handleTableGroupChange = group => setTable({ ...table, group: group }) 

		// reservation handlers 
		const handleReservationNameChange = name => setTable({ ...table, reservation: { ...table.reservation, name: name  } }) 
		const handleReservationGroupChange = group => setTable({ ...table, reservation: { ...table.reservation, group: group  } }) 
		const toggleReservationVIPChange = vip => setTable({ ...table, reservation: { ...table.reservation, vip: !table.reservation.vip  } }) 
		const handleReservationNoteChange = notes => setTable({ ...table, reservation: { ...table.reservation, notes: notes  } }) 

		//functions to control the date picker
		const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
		const showDatePicker = () => setDatePickerVisibility(true);
		const hideDatePicker = () =>  setDatePickerVisibility(false);
		const handleDateConfirm = date => { setTable({ ...table, reservation: { ...table.reservation, date: date  } }); hideDatePicker(); };

		//functions to control the time picker
		const [isTimePickerVisible, setTimePickerVisibility] = React.useState(false);
		const showTimePicker = () => setTimePickerVisibility(true);
		const hideTimePicker = () =>  setTimePickerVisibility(false);
		const handleTimeConfirm = time => { setTable({ ...table, reservation: { ...table.reservation, time: time  } }); hideTimePicker(); };

		return (
				<View style={styles.container}>
						<View style={styles.tableContainer}>
								<Table sqr={sqr} index={sqr.sqrId} isEditMode={false} />
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
												items={configinfo.waiters}>	
												style={styles.title}
										</RNPickerSelect>
								</View>
						</View>
						<Text style={styles.title}>Reservation</Text>
						<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
						<View style={styles.col}>
								<View style={styles.row}>
										<View style={styles.inputContainer}>
												<TextInput
														style={styles.input}
														placeholder="Name"
														placeholderTextColor="gray"
														onChangeText={handleReservationNameChange}
														defaultValue={table.reservation.name}
												/>
										</View>
								</View>
								<View style={styles.row}>
										<View style={styles.inputContainer}>
												{ table.reservation.date !== null? <TouchableOpacity onPress={showTimePicker}>
														<Text style={styles.linkText}>{table.reservation.date.toLocaleDateString("es-US")}</Text>
												</TouchableOpacity>
												: <Button title="Date" onPress={showDatePicker}/> }
												<DateTimePickerModal
														isVisible={isDatePickerVisible}
														mode="date"
														onConfirm={handleDateConfirm}
														onCancel={hideDatePicker}
												/>
										</View>
										<View style={styles.inputContainer}>
												{ table.reservation.time !== null? <TouchableOpacity onPress={showTimePicker}>
														<Text style={styles.linkText}> 
																{table.reservation.time.toLocaleTimeString("es-US", { hour12: false, hour: '2-digit', minute: '2-digit' } )}
														</Text>
												</TouchableOpacity>
												: <Button title="Time" style={styles.button} onPress={showTimePicker} /> }
												<DateTimePickerModal
														isVisible={isTimePickerVisible}
														mode="time"
														onConfirm={handleTimeConfirm}
														onCancel={hideDatePicker}
												/>
										</View>
								</View>
						</View>
						<TouchableOpacity onPress={() => navigation.goBack()} style={styles.link}>
								<Text style={styles.linkText}>Done</Text>
						</TouchableOpacity>
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
				padding: 20,
		},
		pickerContainer: {
				width: 'auto',
				marginLeft: "10%",
		},
		button: {
				borderRadius: 0.12,
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
