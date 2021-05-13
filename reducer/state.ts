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

initialState.grid[0] = { sqrId: 0, name: '3d', group: 'G', waiter: 'Jake', reservations: [], table: 'circleTable', ReservationID: 1, };


initialState.reservations = [ // data use to build for now
		{ id: 1,  tableID: '', table: '',  currentGuest: 0, partySize: 4, name: 'Deloria King',   time: null, date: null, vip: false, notes: '' },
		{ id: 2,  tableID: '', currentGuest: 0, partySize: 4, name: 'Anna Nazarijan', time: null, date: null, vip: false, notes: '' },
		{ id: 3,  tableID: '', currentGuest: 0, partySize: 5, name: 'Naoma Silver',   time: null, date: null, vip: false, notes: '' },
		{ id: 4,  tableID: '', currentGuest: 0, partySize: 5, name: 'Leslie Reyes',   time: null, date: null, vip: false, notes: '' },
		{ id: 5,  tableID: '', currentGuest: 0, partySize: 5, name: 'Ashley Vega',    time: null, date: null, vip: false, notes: '' },
		{ id: 6,  tableID: '', currentGuest: 0, partySize: 5, name: 'Gimena Lora',    time: null, date: null, vip: false, notes: '' },
		{ id: 7,  tableID: '', currentGuest: 0, partySize: 3, name: 'Oman Revolta',   time: null, date: null, vip: false, notes: '' },
		{ id: 8,  tableID: '', currentGuest: 0, partySize: 4, name: 'Deloria King',   time: null, date: null, vip: false, notes: '' },
		{ id: 9,  tableID: '', currentGuest: 0, partySize: 4, name: 'Anna Nazarijan', time: null, date: null, vip: false, notes: '' },
		{ id: 10, tableID: '', currentGuest: 0, partySize: 5, name: 'Naoma Silver',   time: null, date: null, vip: false, notes: '' },
		{ id: 11, tableID: '', currentGuest: 0, partySize: 5, name: 'Leslie Reyes',   time: null, date: null, vip: false, notes: '' },
		{ id: 12, tableID: '', currentGuest: 0, partySize: 5, name: 'Ashley Vega',    time: null, date: null, vip: false, notes: '' },
		{ id: 13, tableID: '', currentGuest: 0, partySize: 5, name: 'Gimena Lora',    time: null, date: null, vip: false, notes: '' },
		{ id: 14, tableID: '', currentGuest: 0, partySize: 3, name: 'Oman Revolta',   time: null, date: null, vip: false, notes: '' },
];

initialState.reservations[0].tableID = initialState.grid[0];

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

