import * as React from 'react';
import { StyleSheet, Checkbox, Text, Button, TouchableOpacity, View, TextInput } from 'react-native';
import Table from '../components/Table';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import moment from 'moment';

export default function DetailTableScreen({ state, dispatch, route,  navigation }) {

		const table = route.params.table; // get th table object passed into the detail screen

		React.useLayoutEffect(() => { // render edit button
				navigation.setOptions({
						headerRight: EditButton 
				});
		}, [navigation, toCreateTableScreen]);

		const toCreateTableScreen = ( sqrData, newTable ) => {
				navigation.navigate('UpdateTableScreen',{
						sqr: sqrData, 
						newTable: newTable, 
				});
		}

		const EditButton = () => { 
				return <Button onPress={toCreateTableScreen} title="Edit" />
		}

		const renderReservation = (reservation) =>
		<View>
				<View style={ styles.inputContainer}>
						<Text style={{ ...styles.input, alignSelf:'center', fontSize: 15,}}>
								{reservation.name}
						</Text>
				</View>
				<View style={styles.row}>
						<View style={styles.inputContainer}>
								{ reservation.date !== null && <Text style={styles.linkText}> {reservation.time.format("MM/DD/YY")}</Text> }
						</View>
						<View style={styles.inputContainer}>
								{ reservation.time !== null &&  <Text style={styles.linkText}> {reservation.time.format("HH:MM")} </Text> }
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
		</View>


		return (
				<View style={styles.container}>
						<View style={styles.tableContainer}>
								<Table sqr={table} isEditMode={false} />
						</View>
						<View style={styles.separator}/>
						<View style={{ ...styles.col, paddingBottom: "30%", }}>
								<View style={styles.row}>
										<View style={{ ...styles.row, marginHorizontal: 12,}}>
												<Text style={styles.label}>Waiter: </Text> 
												<Text style={styles.input}> {table.waiter} </Text>
										</View>
										<View style={{ ...styles.row, marginHorizontal: 12,}}>
												<Text style={styles.label}> Group: </Text> 
												<Text style={styles.input}> {table.group} </Text>
										</View>
								</View>
						</View>
						<Text style={styles.title}>Reservations:</Text>
						<View style={styles.separator}/>
						<View style={styles.col}>
								{ table.reservations.map(renderReservation) }
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
		},
		tableContainer: {
				alignItems: 'center',
				justifyContent: 'center',
				height: '20%',
		},
		col:{
				flexDirection: 'column',
				paddingVertical: 20,
		},
		row:{
				flexDirection: 'row',
		},
		inputContainer: {
				margin: 15,
		},
		button: {
				borderRadius: 2,
				borderColor: 'gray',  
				height: 39, 
				backgroundColor:'transparent',
				borderColor: 'transparent',
				alignItems:'center',
				justifyContent: 'center',
				fontWeight: 'normal' 
		},
		title: {
				fontSize: 17,
				fontWeight: 'bold',
				color: 'white',
		},
		label:{
				fontSize: 14,
				color: 'gray',
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
				width: 'auto',
				color: 'white',
				borderBottomWidth: 0.2,
				borderColor: 'gold',
		},
		separator: {
				alignSelf: 'center',
				marginVertical: 15,
				height: 0.5,
				width: '70%',
				backgroundColor: 'white',
		},
});
