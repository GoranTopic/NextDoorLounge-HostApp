import * as React from 'react';
import Layout from '../constants/Layout';
import moment from 'moment';

const dTime = moment("09:00", "hh:mm"); // default time
const dDate = moment("05-14", "MM-DD"); // default date

const initialState  = {
		grid: [],
		tables: [],
		logger: [],
		reservations: [],
		config: { 
			tableCount: 0,
			reservationCount: 0,
		}
}

const empty_sqr = { 
		sqrID: '', 
		name: '',
		group: '',
		waiter: '',
		reservations: [],
		table: 'none', 
} //Create grid data


const empty_reservation = {
		id: '', 
		table: '',  
		name: '', 
		status: '',
		date: null, 
		time: null, 
		currentGuest: 0, 
		partySize: 0, 
		vip: false, 
		notes: '' ,
}

const linkTableAndReservation = (table, reservation) => {
		/* link together a resservation an an table by reference */
		table.reservations = [ ...table.reservations, reservation ];
		reservation.table = table;
}

// create grid on empty sqrs
for (let i = 0; i < Layout.squareNum; i++ ) initialState.grid.push({ ...empty_sqr, sqrID: i });

// create new tables
// create Selina Tables
initialState.grid[2] =   { sqrID: 2,    name: '34',   group: 'G',  waiter: 'Selina', reservations: [], table: 'squareTable' };
initialState.grid[24] =  { sqrID: 24,   name: '4B',   group: 'G',  waiter: 'Selina', reservations: [], table: 'squareTable' };
initialState.grid[48] =  { sqrID: 48,   name: '3B',   group: 'G',  waiter: 'Selina', reservations: [], table: 'squareTable' };
initialState.grid[84] =  { sqrID: 84,   name: '2',    group: 'G',  waiter: 'Selina', reservations: [], table: 'squareTable' };
initialState.grid[108] = { sqrID: 108,  name: '1',    group: 'G',  waiter: 'Selina', reservations: [], table: 'squareTable' };
// create Jake Tables
initialState.grid[27] =  { sqrID: 27,  name: '21',   group: 'J', waiter: 'Jake', reservations: [], table: 'circleTable' };
initialState.grid[30] =  { sqrID: 30,  name: '25',   group: 'J', waiter: 'Jake', reservations: [], table: 'squareTable' };
initialState.grid[51] =  { sqrID: 51,  name: '20',   group: 'J', waiter: 'Jake', reservations: [], table: 'circleTable' };
initialState.grid[54] =  { sqrID: 54,  name: '24',   group: 'J', waiter: 'Jake', reservations: [], table: 'circleTable' };
// cassandra tables
initialState.grid[33] =  { sqrID: 33,  name: '22',  group: 'G', waiter: 'Cassadra', reservations: [], table: 'circleTable' };
initialState.grid[35] =  { sqrID: 35,  name: '6A',  group: 'G', waiter: 'Cassadra', reservations: [], table: 'squareTable' };
initialState.grid[57] =  { sqrID: 57,  name: '23',  group: 'G', waiter: 'Cassadra', reservations: [], table: 'circleTable' };
initialState.grid[74] =  { sqrID: 74,  name: '31',  group: 'G', waiter: 'Cassadra', reservations: [], table: 'squareTable' };
initialState.grid[83] =  { sqrID: 83,  name: '7B',  group: 'G', waiter: 'Cassadra', reservations: [], table: 'squareTable' };
// make Jennifer
initialState.grid[144] =  { sqrID: 144,  name: '107', group: 'M', waiter: 'Melissa',  reservations: [], table: 'squareTable' };
initialState.grid[158] =  { sqrID: 158,  name: '106', group: 'M', waiter: 'Melissa',  reservations: [], table: 'squareTable' };
initialState.grid[168] =  { sqrID: 168,  name: '113', group: 'M', waiter: 'Melissa',  reservations: [], table: 'squareTable' };
initialState.grid[182] =  { sqrID: 182,  name: '105', group: 'M', waiter: 'Melissa',  reservations: [], table: 'squareTable' };
initialState.grid[186] =  { sqrID: 186,  name: '110', group: 'M', waiter: 'Melissa',  reservations: [], table: 'squareTable' };
initialState.grid[192] =  { sqrID: 192,  name: '112', group: 'M', waiter: 'Melissa',  reservations: [], table: 'squareTable' };
initialState.grid[193] =  { sqrID: 193,  name: '111', group: 'M', waiter: 'Melissa',  reservations: [], table: 'squareTable' };
initialState.grid[206] =  { sqrID: 206,  name: '104', group: 'M', waiter: 'Melissa',  reservations: [], table: 'squareTable' };
// make myra 
initialState.grid[161] =  { sqrID: 161,  name: '108', group: 'F', waiter: 'Myra',  reservations: [], table: 'squareTable' };
initialState.grid[164] =  { sqrID: 164,  name: '109', group: 'F', waiter: 'Myra',  reservations: [], table: 'squareTable' };
initialState.grid[191] =  { sqrID: 191,  name: '101', group: 'F', waiter: 'Myra',  reservations: [], table: 'squareTable' };
initialState.grid[210] =  { sqrID: 210,  name: '103', group: 'F', waiter: 'Myra',  reservations: [], table: 'squareTable' };
initialState.grid[215] =  { sqrID: 215,  name: '102', group: 'F', waiter: 'Myra',  reservations: [], table: 'squareTable' };

// create a few test reservation
initialState.reservations = [ // data use to build for now
		{ id: 1, table: '', currentGuest: 0, partySize: 4, name: 'Deloria King',   time: dTime, date: dDate, vip: true, 
				notes: 'Plese dont forget to give birthday cake at midnight' },
		{ id: 2, table: '', currentGuest: 0, partySize: 4, name: 'Anna Nazarijan', time: dTime, date: dDate, vip: false, 
				notes: 'Chocolate Cake' },
		{ id: 3, table: '', currentGuest: 0, partySize: 5, name: 'Naoma Silver',   time: dTime, date: dDate, vip: false, 
				notes: '' },
		{ id: 4, table: '', currentGuest: 0, partySize: 5, name: 'Leslie Reyes',   time: dTime, date: dDate, vip: false, 
				notes: '' },
		{ id: 5, table: '', currentGuest: 0, partySize: 5, name: 'Ashley Vega',    time: dTime, date: dDate, vip: false, 
				notes: '' },
		{ id: 6, table: '', currentGuest: 0, partySize: 5, name: 'Gimena Lora',    time: dTime, date: dDate, vip: false, 
				notes: '' },
		{ id: 7, table: '', currentGuest: 0, partySize: 3, name: 'Oman Revolta',   time: dTime, date: dDate, vip: false, 
				notes: '' },
];

//link together those reservations and tables
linkTableAndReservation(initialState.grid[39],  initialState.reservations[0]);
linkTableAndReservation(initialState.grid[44],  initialState.reservations[1]);
linkTableAndReservation(initialState.grid[85],  initialState.reservations[2]);
linkTableAndReservation(initialState.grid[169], initialState.reservations[3]);

const stateReducer = (state = initialState, action) => {
		console.log('reducer ran with input:')
		console.log(action)

		switch (action.type) {
				case 'CREATE_RESERVATION': //todo add reservation to table reservation list
						const table = state.grid.filter(sqr => sqr.sqrID === action.payload.tableSqrID)[0];
						return {  // add a reservation to the list
								...state, 
								reservations:  [ ...state.reservations, { ...action.payload, id: state.reservations.length + 1, table: table } ],
								logger: [ ...state.logger, 'Scott: created reservation ' + reservation.name ],
						};
				case 'UPDATE_RESERVATION':
						return { // probaly might not work, or just make a duplicate instead of an update
								...state,
								reservations: [ ...state.reservations.map( 
										reservation => reservation.id === action.payload.reservation.id? 
										action.payload.reservation 
										: reservation 
								) ],
								logger: [ ...state.logger, 'Scott: updated reservation ' + action.payload.reservation.name ],
						};
				case 'DELETE_RESERVATION':
						return {
								...state, 
								reservations: [ ...state.reservations.filter((reservation) =>  reservation.id !== action.payload.reservation.id) ],
								logger: [ ...state.logger, 'Scott: Deleted reservation ' + action.payload.reservation.name ],
						};
				case 'CREATE_TABLE_ON_GRID':
						return {
								...state, 
								grid:  [ ...state.grid.map( (gridSqr) => { 
										return gridSqr.sqrID === action.payload.sqrID?
												action.payload
												: gridSqr
								})],
						};
				case 'UPDATE_TABLE_ON_GRID':
						return {
								...state, 
								grid:  [ ...state.grid.map( 
										gridSqr => gridSqr.sqrID === action.payload.table.sqrID? action.payload.table : gridSqr
								)],
						};
				case 'DELETE_TABLE_ON_GRID':
						return {
								...state, 
								grid:  [ ...state.grid.map( (gridSqr) => { 
										return gridSqr.sqrID === action.payload.table.sqrID ?
												{ ...empty_sqr, sqrID: gridSqr.sqrID }
												: gridSqr
								})],
								logger: [ ...state.logger, 'Scott: Deleted table ' + action.payload.table.name ],
						};
				case 'CREATE_TABLE_WITH_RESERVATION':
						// make a new reservation and table object
						const new_reservation = { ...action.payload.reservation, id: state.reservations.length + 1, } ;
						const new_table = { ...action.payload.table } ;
						new_reservation.table = new_table; // attach table to reservation 
						new_table.reservations = [ ...new_table.reservations, new_reservation ]; // attach reservation to table
						return {
								...state, 
								grid:  [ ...state.grid.map(gridSqr => gridSqr.sqrID === new_table.sqrID? new_table : gridSqr) ],
								reservations:  [ ...state.reservations, new_reservation ],
								logger: [ ...state.logger, 'Scott: Created Table' + new_table.name ],
						};
				case 'UPDATE_TABLE_WITH_RESERVATION':
						const updated_table = action.payload.table;
						const updated_reservation = action.payload.reservation; 
						updated_reservation.table = updated_table; // 
						updated_table.reservations = [ updated_reservation ]; // this delete eany other reservation. must add code avoid this.
						return {
								...state, 
								grid: [ ...state.grid.map( gridSqr => gridSqr.sqrID === updated_table.sqrID? updated_table : gridSqr ) ],
								reservations:  [ ...state.reservations.map( 
										reservation => reservation.id === updated_reservation.id? updated_reservation : reservation 
								)],
								logger: [ ...state.logger, 'Scott: Updated Table' + updated_table.name ],
						};
				case 'ADD_ONE_GUEST':
						return { 
								...state,
								reservations: [ ...state.reservations.map( 
										reservation => (reservation.id === action.payload.reservation.id)? 
										action.payload.reservation:
										reservation )]
						};
				case 'REMOVE_ONE_GUEST':
						return { 
								...state,
								reservations: [ ...state.reservations.map( 
										reservation => (reservation.id === action.payload.reservation.id)? 
										{ ...action.payload.reservation, currentGuest: reservation.currentGuest - 1 }:
										reservation 
								)]
						};
				default:
						console.log('error: could not find dispatch command');
						console.log('action:');
						console.log(action);
						return state;
		}

};

export { initialState, stateReducer };

