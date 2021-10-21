				});
			padding: 3,
		color: 'white',
		alignSelf: 'center',
		alignSelf: 'center',
		alignSelf: 'center',
										<Text style={styles.text}>{item}</Text>
			fontSize: 14,
		width: "95%",
								data={ state.logger }
	},
	},
	},
	},
		return (
			borderColor: 'gold',
						<FlatList
  container: {
    fontWeight: 'bold',
		paddingRight: 15,
		paddingTop: '6%',
								onSubmitEditing={handleSubmit}
								style={styles.searchInput}
		}
		);
		borderBottomColor: 'gold',







export default function TabThreeScreen({ state, dispatch, navigation }) {
import * as React from 'react';
			width: 10,
    flex: 1,
import { Button, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
		const handleSeachInput = (text)=>  setText(text); 
    fontSize: 11,
			borderRadius: 8,
import { Text, View, TextInput } from '../components/Themed';
								defaultValue={text}
			borderWidth: 0.2,
    width: '100%',
	text:{
			backgroundColor: 'white'
						</View>
    height: 1,
		paddingLeft: 15,
			marginVertical: 5,
						type: 'ADD_LOG',
	separator: {
								</View>
						<TextInput
import EditScreenInfo from '../components/EditScreenInfo';
			borderRadius: 30,
    justifyContent: 'center',
								onChangeText={handleSeachInput}
}
	searchInput: {
								placeholder="Message..."
});
				dispatch({
								renderItem={ 
						/>
												style={styles.eventContainer} >
						}/>
		borderWidth: 0.2,
		const handleSubmit = () => { 
	dot:{
		paddingVertical: 3,
										({item}) =>  
	eventContainer:{
				<View style={styles.container}>
				setText('');
const styles = StyleSheet.create({
			margin:5
						<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
								keyExtractor={(item, index) => index.toString()}
		margin: 5,
  title: {
			height: 10,
								placeholderTextColor="gray"
								styles={styles.reservList}
		
			alignSelf: 'flex-start',
		const [ text, setText ] = React.useState('');
						payload:{ log: text, },
import Reservation from '../components/Reservation';
  },
  },
  },
										<View key={item}
