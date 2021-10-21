  container: {
								onSubmitEditing={handleSubmit}
    fontSize: 11,
			padding: 3,
	searchInput: {
const styles = StyleSheet.create({
						<FlatList
						}/>
		return (
				});
						</View>
			marginVertical: 5,
			fontSize: 14,
								defaultValue={text}
		}
										<View key={item}
			borderColor: 'gold',
import { Text, View, TextInput } from '../components/Themed';
		borderBottomColor: 'gold',
	},
	},
	},
	},
			borderWidth: 0.2,
						type: 'ADD_LOG',
import Reservation from '../components/Reservation';
												style={styles.eventContainer} >
}
								placeholder="Message..."
				setText('');
		alignSelf: 'center',
		alignSelf: 'center',
		alignSelf: 'center',
		paddingRight: 15,
	text:{
		color: 'white',
			width: 10,
			borderRadius: 8,
		const handleSubmit = () => { 
    justifyContent: 'center',
				<View style={styles.container}>
    height: 1,
								keyExtractor={(item, index) => index.toString()}
		width: "95%",
				dispatch({
								style={styles.searchInput}
		const handleSeachInput = (text)=>  setText(text); 
			alignSelf: 'flex-start',
});
								data={ state.logger }
		margin: 5,
    fontWeight: 'bold',
		paddingTop: '6%',
	dot:{
			borderRadius: 30,
	separator: {
			height: 10,
		borderWidth: 0.2,
						<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
		);
						<TextInput
		paddingVertical: 3,
								onChangeText={handleSeachInput}
										({item}) =>  
								styles={styles.reservList}
import * as React from 'react';
  },
  },
  },
    width: '100%',
	eventContainer:{
								placeholderTextColor="gray"
						/>
  title: {
								renderItem={ 
		const [ text, setText ] = React.useState('');
export default function TabThreeScreen({ state, dispatch, navigation }) {
import EditScreenInfo from '../components/EditScreenInfo';
						payload:{ log: text, },
    flex: 1,
import { Button, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
								</View>







			margin:5
			backgroundColor: 'white'
										<Text style={styles.text}>{item}</Text>
		paddingLeft: 15,
		
