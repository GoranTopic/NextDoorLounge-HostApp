import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import useColorScheme from '../hooks/useColorScheme';
import { getReservationTable } from '../functions/queryState';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

export default function Reservation( { reserv, update, remove, navigation }) {

		const [isEditMode, setEditMode ] = React.useState(false);
	
		const handleEditToggle = () => setEditMode(!isEditMode)
			
		const handlePress = () => navigation.navigate('Layout', { id: reserv.id })

		const handleUpdate = () => update(reserv.id)

		const handleRemove =() => remove(reserv.id)

		return( 
		<View>
				{ isEditMode? 
				<View style={styles.resevationEditMode}>
						<Text style={styles.name}>{ reserv.name }</Text>
						<TouchableOpacity onPress={handleUpdate} style={{width:30}} >
								<Ionicons name={'pencil-outline'} color={'red'} size={16} style={styles.optionsIcon} />
						</TouchableOpacity>
						<TouchableOpacity onPress={handleRemove} style={{width:30}} >
								<Ionicons name={'trash-outline'} color={'red'} size={15} style={styles.optionsIcon} />
						</TouchableOpacity>
						<TouchableOpacity onPress={handleEditToggle} style={{width:30}} >
								<Ionicons name={'ellipsis-vertical-outline'} color={'white'} size={15} style={styles.optionsIcon} />
						</TouchableOpacity>
				</View> 
						:
						<TouchableOpacity onPress={handlePress}>
								<View style={styles.resevation}>
										<View style={styles.tableBox}>
												<Text style={styles.tableText}>{ reserv.tableID.name}</Text>
										</View>
										<Text style={styles.name}>{ reserv.name }</Text>
										<Text style={styles.party}> {reserv.partySize }/{ reserv.currentGuest} </Text>
										<Text style={styles.arrival}>{ reserv.arrivalTime }</Text>
										<TouchableOpacity onPress={handleEditToggle} style={{width:30}} >
												<Ionicons name={'ellipsis-vertical-outline'} color={'white'} size={15} style={styles.optionsIcon} />
										</TouchableOpacity>
								</View>
						</TouchableOpacity>
				}
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
				shadowColor: 'rgba(100, 100, 100, 0.2)',
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

