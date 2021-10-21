			marginVertical: 5,
						payload:{ log: text, },
						}/>
						</View>
			height: 10,
			margin:5
								data={ state.logger }
								keyExtractor={(item, index) => index.toString()}
		borderBottomColor: 'gold',
	dot:{
}
			width: 10,
												style={styles.eventContainer} >
	text:{
				dispatch({
		borderWidth: 0.2,
						<FlatList
						type: 'ADD_LOG',
	separator: {
								onChangeText={handleSeachInput}
								placeholder="Message..."
			borderColor: 'gold',
  },
  },
  },
import { Button, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
										<View key={item}
import * as React from 'react';
});
				});
		alignSelf: 'center',
		alignSelf: 'center',
		alignSelf: 'center',
		width: "95%",
										<Text style={styles.text}>{item}</Text>
				<View style={styles.container}>
		const handleSeachInput = (text)=>  setText(text); 
    height: 1,
		}
		return (
		
    flex: 1,
								style={styles.searchInput}
		);
	},
	},
	},
	},
			padding: 3,
	searchInput: {
import EditScreenInfo from '../components/EditScreenInfo';
								onSubmitEditing={handleSubmit}
import Reservation from '../components/Reservation';
		paddingTop: '6%',
								placeholderTextColor="gray"
						<TextInput
			borderRadius: 30,
  title: {
    fontWeight: 'bold',
								renderItem={ 
    width: '100%',
			alignSelf: 'flex-start',







		color: 'white',
										({item}) =>  
export default function TabThreeScreen({ state, dispatch, navigation }) {
		const handleSubmit = () => { 
			borderRadius: 8,
		paddingRight: 15,
	eventContainer:{
		const [ text, setText ] = React.useState('');
  container: {
			backgroundColor: 'white'
								styles={styles.reservList}
				setText('');
						<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
		paddingLeft: 15,
		paddingVertical: 3,
const styles = StyleSheet.create({
		margin: 5,
			borderWidth: 0.2,
    fontSize: 11,
import { Text, View, TextInput } from '../components/Themed';
    justifyContent: 'center',
			fontSize: 14,
								</View>
								defaultValue={text}
						/>
