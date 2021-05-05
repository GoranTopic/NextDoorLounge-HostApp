import * as React from 'react';
import { StyleSheet, Text, Button, TouchableOpacity, View, TextInput } from 'react-native';
import Table from '../components/Table';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from 'react-native-picker-select';

export default function UpdateTableScreen({ route,  navigation }) {
		console.log(navigation);
		console.log(route);
		let d = new Date();
		const { sqr, newTable } = route.params;
		sqr.table = newTable;
		sqr.name = '';
		sqr.waiter = '';
		sqr.group = '';
		sqr.reservation = { name: '', date: d.getDate(), time: d.getTime(), vip: false, notes: '' };

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
						<Table sqr={sqr} index={sqr.sqrId} isEditMode={false} />
						<View style={styles.inputContainer}>
								<TextInput
										style={styles.input}
										placeholder="Table Name"
										placeholderTextColor="gray"
										onChangeText={handleReservationNameChange}
										defaultValue={table.reservation.name}
								/>
						</View>
						<View style={styles.inputContainer}>
								<TextInput
										style={styles.input}
										placeholder="group"
										placeholderTextColor="gray"
										onChangeText={handleReservationGroupChange}
										defaultValue={table.reservation.name}
								/>
						</View>
						<View style={styles.inputContainer}>
								<RNPickerSelect
										onValueChange={(value) => console.log(value)}
										items={[
												{ label: 'Football', value: 'football' },
												{ label: 'Baseball', value: 'baseball' },
												{ label: 'Hockey', value: 'hockey' },
										]}
								/>	
				</View>
				<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
				<View style={styles.inputContainer}>
						<TextInput
								style={styles.input}
								placeholder="Reservation Name"
								placeholderTextColor="gray"
								onChangeText={handleReservationNameChange}
								defaultValue={table.reservation.name}
						/>
				</View>
				<View style={styles.inputContainer}>
						<Button title="Show Date Picker" onPress={showDatePicker} />
						<DateTimePickerModal
								isVisible={isDatePickerVisible}
								mode="date"
								onConfirm={handleDateConfirm}
								onCancel={hideDatePicker}
						/>
				</View>
				<View style={styles.inputContainer}>
						<Button title="Show Date Picker" onPress={showDatePicker} />
						<DateTimePickerModal
								isVisible={isDatePickerVisible}
								mode="time"
								onConfirm={handleTimeConfirm}
								onCancel={hideDatePicker}
						/>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
separator: {
		alignSelf: 'center',
    marginVertical: 15,
    height: 1,
    width: '90%',
  },
});
