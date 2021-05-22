import * as React from 'react';
import { Button, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, TextInput } from '../components/Themed';
import Reservation from '../components/Reservation';

export default function TabThreeScreen({ state, dispatch, navigation }) {
		
		return (
				<View style={styles.container}>
						<FlatList
								styles={styles.reservList}
								data={ state.logger }
								keyExtractor={(item) => item.toString()}
								renderItem={ ({item}) =>  
								<View key={item}>
										<Text>{item}</Text>
								</View>
						}/>
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


