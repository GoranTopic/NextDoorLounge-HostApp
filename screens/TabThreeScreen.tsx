import * as React from 'react';
import { Button, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, TextInput } from '../components/Themed';
import Reservation from '../components/Reservation';

export default function TabThreeScreen({ state, dispatch, navigation }) {

		const [ text, setText ] = React.useState('');

		const handleSeachInput = (text)=>  setText(text); 

		const handleSubmit = () => { 
				dispatch({
						type: 'ADD_LOG',
						payload:{ log: text, },
				});
				setText('');
		}
		
		return (
				<View style={styles.container}>
						<FlatList
								styles={styles.reservList}
								data={ state.logger }
								keyExtractor={(item, index) => index.toString()}
								renderItem={ 
										({item}) =>  
										<View key={item}
												style={styles.eventContainer} >
										<Text style={styles.text}>{item}</Text>
								</View>
						}/>
						<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
						<TextInput
								style={styles.searchInput}
								placeholder="Message..."
								placeholderTextColor="gray"
								onChangeText={handleSeachInput}
								onSubmitEditing={handleSubmit}
								defaultValue={text}
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
  title: {
		alignSelf: 'center',
    fontSize: 11,
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
			borderWidth: 0.2,
			borderColor: 'gold',
			borderRadius: 8,
			alignSelf: 'flex-start',
	},
	text:{
			fontSize: 14,
			margin:5
	},
	searchInput: {
		alignSelf: 'center',
		width: "95%",
		margin: 5,
		paddingVertical: 3,
		paddingLeft: 15,
		paddingRight: 15,
		color: 'white',
		borderBottomColor: 'gold',
		borderWidth: 0.2,
	},
	separator: {
		alignSelf: 'center',
    height: 1,
    width: '100%',
  },
});


