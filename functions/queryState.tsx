

export function getTableReservations(table, state){
		/* from  given table, get the resevation that are attached to it */
		// tableID must be changed to match the squr id, not the table Name
		return state.resevations.filter( (resevation) => resevation.tableID === table.sqrID  )[0];
}

export function getReservationTable(reservation, state){
		/* from a given resevation find the table object which is attached to */
		if( typeof resevation.tableID === 'undefined' ){ // if there is not table attached to the resevation
				console.log('could not find table'); 
				return null; 
		}else{
				return state.tables.filter( (table) => table.sqrID === resevation.tableID )[0]; //there can only be one table per resevation
		}
}
