import * as React from 'react';
import { StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, TextInput } from '../components/Themed';
import CustomerItem from '../components/CustomerListItem';


export default function TabOneScreen() {

		const [text, setText] = React.useState('');
		const [customerList, setCustomerList] = React.useState(CUSTOMERS_DATA);

		const Resevation = ({ title }) => (
			  <View style={styles.resevation}>
						<Text style={styles.title}>{title}</Text>
				</View>
		);

		return (
				<View style={styles.container}>
						<Text style={styles.title}>Customers</Text>
						<TextInput
								style={styles.searchInput}
								placeholder="Search customer"
								placeholderTextColor="gray"
								onChangeText={text => setText(text)}
								defaultValue={text}
						/>
						<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
						<FlatList
								styles={styles.reservList}
								data={DATA}
								renderItem={({item}) => <Resevation title={item.title} />}
								keyExtractor={item => item.id}
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
		width: "80%",
		margin: 20,
		padding: 10,
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
		width: "80%",
		marginVertical: 3,
	},
  separator: {
		alignSelf: 'center',
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
	reservList: {
    paddingVertical: 15,
    height: "50%",
    width: '100%',
  },
});


const DATA = [
		{
				id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
				title: 'First Item',
		},
		{
				id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
				title: 'Second Item',
		},
		{
				id: '58694a0f-3da1-471f-bd96-145571e29d72',
				title: 'Third Item',
		},
		
];

const CUSTOMERS_DATA = [
		{ id: 1, table: '34', currentGuest: 0, name: 'Deloria King', partySize: 4, arrivalTime: '9:00pm'  },
		{ id: 2, table: '4B', currentGuest: 0, name: 'Anna Nazarijan', partySize: 4, arrivalTime: '9:00pm'  },
		{ id: 3, table: '3B', currentGuest: 0, name: 'Naoma Silver', partySize: 5, arrivalTime: '9:00pm'  },
		{ id: 4, table: '4B', currentGuest: 0, name: 'Leslie Reyes', partySize: 5, arrivalTime: '9:00pm'  },
		{ id: 5, table: '20', currentGuest: 0, name: 'Ashley Vega', partySize: 5, arrivalTime: '9:00pm'  },
		{ id: 6, table: '20', currentGuest: 0, name: 'Ashley Vega', partySize: 5, arrivalTime: '9:00pm'  },
		{ id: 1, table: '34', currentGuest: 0, name: 'Deloria King', partySize: 4, arrivalTime: '9:00pm'  },
		
		
];

