import * as React from 'react';
import { StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, TextInput } from '../components/Themed';
import Reservation from '../components/Reservation';

export default function TabOneScreen({ state, dispatch, navigation }) {

		//dispatch({ type: 'CREATE_RESERVATION', payload: {}  })
		const [ text, setText ] = React.useState('');

		const handleSeachInput = (text)=>  setText(text); 

		const searchFilter = (reservation) => reservation.name.toLowerCase().includes(text.toLowerCase());

		const updateList = ( id )  => {
				//CUSTOMERS_DATA.filter((value) => value.id !== id )
				navigation.navigate('updateReservatoinScreen', { id: id });
		}

		const removeList = ( id )  => {
				/* bug it take twice the button press to delete*/
				dispatch({ type: 'DELETE_RESERVATION', payload: { id: id }  })
		}

		return (
				<View style={styles.container}>
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
								data={ state.reservations.filter(searchFilter) }
								renderItem={ ({ item }) => <Reservation reserv={item} navigation={navigation} update={updateList} remove={removeList}/> }
								keyExtractor={(item) => item.id.toString()}
						/>
				</View>
		);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		paddingTop: '6%',
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


