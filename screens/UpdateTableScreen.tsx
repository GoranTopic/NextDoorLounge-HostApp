import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import Table from '../components/Table';
import { RootStackParamList } from '../types';

export default function UpdateTableScreen({ route,  navigation }) {
		console.log(navigation);
		console.log(route);
		const { sqr, newTable } = route.params;
		sqr.table = newTable;
		sqr.tableName = '';
		sqr.waiter = '';
		sqr.reservation = { name: '', time: '', vip: false, notes: '' };
		sqr.group = '';

		const [table, setTable] = React.useState({...sqr});

		const handleNameChange = input => setTable({ ...table, resevation: { ...table.reservation, name: input  } }) 

		return (
				<View style={styles.container}>
						<Table sqr={sqr} index={sqr.sqrId} isEditMode={false} />
						<View style={styles.inputContainer}>
								<TextInput
										style={styles.input}
										placeholder="Table Name"
										placeholderTextColor="gray"
										onChangeText={handleNameChange}
										defaultValue={table.reservation.name}
								/>
						</View>
						<View style={styles.inputContainer}>
								<TextInput
										style={styles.input}
										placeholder="group"
										placeholderTextColor="gray"
										onChangeText={handleNameChange}
										defaultValue={table.reservation.name}
								/>
						</View>
						<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
						<View style={styles.inputContainer}>
								<TextInput
										style={styles.input}
										placeholder="Reservation Name"
										placeholderTextColor="gray"
										onChangeText={handleNameChange}
										defaultValue={table.reservation.name}
								/>
						</View>
						<TouchableOpacity onPress={() => navigation.goBack()} style={styles.link}>
								<Text style={styles.linkText}>Done</Text>
						</TouchableOpacity>
				</View>
		);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
separator: {
		alignSelf: 'center',
    marginVertical: 15,
    height: 1,
    width: '90%',
  },
});
