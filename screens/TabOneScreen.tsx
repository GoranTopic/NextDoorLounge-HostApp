import * as React from 'react
import { StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, TextInput } from '../components/Themed';
import Reservation from '../components/Reservation';
import { createStackNavigator } from '@react-navigation/stack';

export default function TabOneScreen() {
		const [text, setText] = React.useState('');
		const [ reservationList, setReservationList ] = React.useState([...CUSTOMERS_DATA]);
		const [customerList, setCustomerList] = React.useState(reservList);
		const handleSeachInput = (text)=> {
				/* probaby should divide this function when cleaning up the code*/
				setText(text);
				setCustomerList(reservationList.filter( (value) => value.name.toLowerCase().includes(text.toLowerCase())))
		}

		const updateList = ( id )  => {
				CUSTOMERS_DATA.filter((value) => value.id !== id )
		}

		const removeList = ( id )  => {
				setReservationList(reservationList.filter((value) => value.id !== id ))
		}

		return (
				<View style={styles.container}>
						<Text style={styles.title}>Reservations</Text>
						<TextInput
								style={styles.searchInput}
								placeholder="Search Reservation"
								placeholderTextColor="gray"
								onChangeText={handleSeachInput}
								defaultValue={text}
						/>
						<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
						<FlatList
								styles={styles.reservList}
								data={customerList}
								renderItem={ ({ item }) => <Reservation reserv={item} update={updateList} remove={removeList}/>}
								keyExtractor={(item, index) => index.toString()}
						/>
				</View>
		);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		paddingTop: '20%',
    justifyContent: 'center',
  },
	searchInput: {
		alignSelf: 'center',
		width: "85%",
		margin: 5,
		paddingVertical: 3,
		paddingLeft: 15,
		paddingRight: 15,
		color: 'white',
		borderColor: 'gold',
		borderWidth: 0.2,
		borderRadius: 5,
		},
  title: {
		alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
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
  separator: {
		alignSelf: 'center',
    marginVertical: 15,
    height: 1,
    width: '90%',
  },
	reservList: {
    paddingVertical: 15,
    height: "50%",
    width: '100%',
  },
});

const CUSTOMERS_DATA = [
		{ id: 1, table: '34', currentGuest: 0, name: 'Deloria King', partySize: 4, arrivalTime: '9:00pm'  },
		{ id: 2, table: '4B', currentGuest: 0, name: 'Anna Nazarijan', partySize: 4, arrivalTime: '9:00pm'  },
		{ id: 3, table: '3B', currentGuest: 0, name: 'Naoma Silver', partySize: 5, arrivalTime: '9:00pm'  },
		{ id: 4, table: '4B', currentGuest: 0, name: 'Leslie Reyes', partySize: 5, arrivalTime: '9:00pm'  },
		{ id: 5, table: '20', currentGuest: 0, name: 'Ashley Vega', partySize: 5, arrivalTime: '9:00pm'  },
		{ id: 6, table: '26', currentGuest: 0, name: 'Gimena Lora', partySize: 5, arrivalTime: '9:00pm'  },
		{ id: 7, table: '34', currentGuest: 0, name: 'Oman Revolta', partySize: 3, arrivalTime: '9:00pm'  },
		{ id: 8, table: '34', currentGuest: 0, name: 'Deloria King', partySize: 4, arrivalTime: '9:00pm'  },
		{ id: 9, table: '4B', currentGuest: 0, name: 'Anna Nazarijan', partySize: 4, arrivalTime: '9:00pm'  },
		{ id: 10, table: '3B', currentGuest: 0, name: 'Naoma Silver', partySize: 5, arrivalTime: '9:00pm'  },
		{ id: 11, table: '4B', currentGuest: 0, name: 'Leslie Reyes', partySize: 5, arrivalTime: '9:00pm'  },
		{ id: 12, table: '20', currentGuest: 0, name: 'Ashley Vega', partySize: 5, arrivalTime: '9:00pm'  },
		{ id: 13, table: '26', currentGuest: 0, name: 'Gimena Lora', partySize: 5, arrivalTime: '9:00pm'  },
		{ id: 14, table: '34', currentGuest: 0, name: 'Oman Revolta', partySize: 3, arrivalTime: '9:00pm'  },

];

