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
								renderItem={ 
										({item}) =>  
										<View key={item}
												style={styles.eventContainer} >
										<Text style={styles.text}>{item}</Text>
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
  title: {
		alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
	dot:{
			width: 10,
			height: 10,
			borderRadius: 30,
			backgroundColor: 'white'
	},
	eventContainer:{
			padding: 3,
			marginVertical: 5,
			borderWidth: 0.5,
			borderColor: 'gold',
			borderRadius: 23,
			alignSelf: 'flex-start',
	},
	text:{
			fontSize: 17,
			margin:5
	},
	});


