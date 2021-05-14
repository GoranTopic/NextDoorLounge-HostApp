import * as React from 'react';
import Layout from '../constants/Layout';
import moment from 'moment';

const dTime = moment("09:00", "hh:mm"); // default time
const dDate = moment("05-14", "MM-DD"); // default date

const initialState  = {
		grid: [],
		tables: [],
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
initialState.grid[39] =  { sqrID: 39, name: '1', group: 'G', waiter: 'Jake', reservations: [], table: 'circleTable' };
initialState.grid[44] =  { sqrID: 44, name: '4G', group: 'G', waiter: 'Cassadra', reservations: [], table: 'squareTable' };
initialState.grid[44] =  { sqrID: 44, name: '4G', group: 'G', waiter: 'Cassadra', reservations: [], table: 'squareTable' };
initialState.grid[44] =  { sqrID: 44, name: '4G', group: 'G', waiter: 'Cassadra', reservations: [], table: 'squareTable' };
initialState.grid[85] =  { sqrID: 85, name: '105', group: 'F', waiter: 'Melissa', reservations: [], table: 'circleTable' };
initialState.grid[169] = { sqrID: 169, name: '104', group: 'G', waiter: 'Melissa', reservations: [], table: 'squareTable' };

// create a few test reservation
initialState.reservations = [ // data use to build for now
		{ id: 1, table: '', currentGuest: 0, partySize: 4, name: 'Deloria King',   time: dTime, date: dDate, vip: true, notes: '' },
		{ id: 2, table: '', currentGuest: 0, partySize: 4, name: 'Anna Nazarijan', time: dTime, date: dDate, vip: false, notes: '' },
		{ id: 3, table: '', currentGuest: 0, partySize: 5, name: 'Naoma Silver',   time: dTime, date: dDate, vip: false, notes: '' },
		{ id: 4, table: '', currentGuest: 0, partySize: 5, name: 'Leslie Reyes',   time: dTime, date: dDate, vip: false, notes: '' },
		{ id: 5, table: '', currentGuest: 0, partySize: 5, name: 'Ashley Vega',    time: dTime, date: dDate, vip: false, notes: '' },
		{ id: 6, table: '', currentGuest: 0, partySize: 5, name: 'Gimena Lora',    time: dTime, date: dDate, vip: false, notes: '' },
		{ id: 7, table: '', currentGuest: 0, partySize: 3, name: 'Oman Revolta',   time: dTime, date: dDate, vip: false, notes: '' },
];

//link together those reservations and tables
linkTableAndReservation(initialState.grid[39], initialState.reservations[0]);
linkTableAndReservation(initialState.grid[44], initialState.reservations[1]);
linkTableAndReservation(initialState.grid[85], initialState.reservations[2]);
linkTableAndReservation(initialState.grid[169], initialState.reservations[3]);



const stateReducer = (state = initialState, action) => {
		console.log('reducer ran with input')
		console.log(action)
		switch (action.type) {
				case 'CREATE_RESERVATION':
						return {  // add a reservation to the list
								...state, 
								reservations:  [ ...state.reservations, { ...action.payload, id: state.reservations.length + 1 } ],
						};
				case 'UPDATE_RESERVATION':
						return { // probaly might not work, or just make a duplicate instead of an update
								...state,
								reservations: [ state.reservation.map( (reservation) => { 
										return reservation.id === action.payload.id? 
												action.payload
												: reservation 
								}) ],
						};
				case 'DELETE_RESERVATION':
						return {
								...state, 
								reservations: [ ...state.reservations.filter((reservation) =>  reservation.id !== action.payload.id) ],
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
								grid:  [ ...state.grid.map( (gridSqr) => { 
										return gridSqr.sqrID === action.payload.sqrID?
												action.payload
												: gridSqr
								})],
						};
				case 'DELETE_TABLE_ON_GRID':
						return {
								...state, 
								grid:  [ ...state.grid.map( (gridSqr) => { 
										return gridSqr.sqrID === action.payload.sqrID ?
												{ ...empty_sqr, sqrID: gridSqr.sqrID }

												: gridSqr
								})],
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
						};
				default:
						console.log('error: could not find dispatch command');
						console.log('action:');
						console.log(action);
						return state;
		}

};

export { initialState, stateReducer };

