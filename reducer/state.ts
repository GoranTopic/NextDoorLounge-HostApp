import * as React from 'react';
import Layout from '../constants/Layout';

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
		sqrId: '', 
		name: '',
		group: '',
		waiter: '',
		reservations: [],
		table: 'none', 
		reservationID: '' } //Create grid data
for (let i = 0; i < Layout.squareNum; i++ ) initialState.grid.push({ ...empty_sqr, sqrId: i });

const empty_reservation = {
		id: '', 
		table: '',  
		currentGuest: 0, 
		partySize: 0, 
		name: '', 
		time: null, 
		date: null, 
		vip: false, 
		notes: '' ,
}

const linkTableAndReservation = (table, reservation) => {
		/* link together a resservation an an table by reference */
		table.reservations.push(table);
		reservation.table = table;
}

// create new tables
initialState.grid[39] = { sqrId: 0, name: '1', group: 'G', waiter: 'Jake', reservations: [], table: 'circleTable' };
initialState.grid[44] = { sqrId: 30, name: '4G', group: 'G', waiter: 'Cassadra', reservations: [], table: 'squareTable' };
initialState.grid[85] = { sqrId: 90, name: '105', group: 'F', waiter: 'Melissa', reservations: [], table: 'circleTable' };
initialState.grid[169] = { sqrId: 120, name: '104', group: 'G', waiter: 'Melissa', reservations: [], table: 'squareTable' };

// create a few test reservation
initialState.reservations = [ // data use to build for now
		{ id: 1, table: '', currentGuest: 0, partySize: 4, name: 'Deloria King',   time: null, date: null, vip: false, notes: '' },
		{ id: 2, table: '', currentGuest: 0, partySize: 4, name: 'Anna Nazarijan', time: null, date: null, vip: false, notes: '' },
		{ id: 3, table: '', currentGuest: 0, partySize: 5, name: 'Naoma Silver',   time: null, date: null, vip: true, notes: '' },
		{ id: 4, table: '', currentGuest: 0, partySize: 5, name: 'Leslie Reyes',   time: null, date: null, vip: true, notes: '' },
		{ id: 5, table: '', currentGuest: 0, partySize: 5, name: 'Ashley Vega',    time: null, date: null, vip: false, notes: '' },
		{ id: 6, table: '', currentGuest: 0, partySize: 5, name: 'Gimena Lora',    time: null, date: null, vip: false, notes: '' },
		{ id: 7, table: '', currentGuest: 0, partySize: 3, name: 'Oman Revolta',   time: null, date: null, vip: false, notes: '' },
		{ id: 8, table: '', currentGuest: 0, partySize: 4, name: 'Deloria King',   time: null, date: null, vip: false, notes: '' },
];

//link together those reservations and tables
linkTableAndReservation(initialState.grid[39], initialState.reservations[0]);



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
										return gridSqr.sqrId === action.payload.sqrId?
												action.payload
												: gridSqr
								})],
						};
				case 'UPDATE_TABLE_ON_GRID':
						return {
								...state, 
								grid:  [ ...state.grid.map( (gridSqr) => { 
										return gridSqr.sqrId === action.payload.sqrId?
												action.payload
												: gridSqr
								})],
						};
				case 'DELETE_TABLE_ON_GRID':
						return {
								...state, 
								grid:  [ ...state.grid.map( (gridSqr) => { 
										return gridSqr.sqrId === action.payload.sqrId ?
												{ ...empty_sqr, sqrId: gridSqr.sqrId }
												: gridSqr
								})],
						};
				default:
						console.log('error: could not find dispatch command');
						console.log('action:');
						console.log(action);
						return state;
		}

};

export { initialState, stateReducer };

