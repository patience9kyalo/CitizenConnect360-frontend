// import { Injectable } from "@angular/core";
// import { Router } from "@angular/router";
// import { Actions, createEffect, ofType } from "@ngrx/effects";
// import { incidentActions } from "../Actions/incident.action";
// import { catchError, map, mergeMap, of } from "rxjs";
// import { IncidentService } from "../../Services/incident.service";

// @Injectable()

// export class IncidentEffects{

//     constructor(private action$: Actions, private router: Router, private is: IncidentService){}

//     //handle the addition of incidents

//     addIncident$ = createEffect(() => {

//         return this.action$.pipe(

//             //listen for the incident action

//             ofType(incidentActions.add),

//             // Handle the action by calling the IncidentService.reportIncident method

//             mergeMap(({newincident}) => this.is.addIncident(newincident).pipe(
//                 map(response => {

//                     //on success add the incident and navigate to report page

//                     this.router.navigate(['/home'])
//                     return incidentActions.addSuccess({response})
//                     console.log(newincident)
//                 }),

//                 // On failure, dispatch add Failure' action with the error message


//                 catchError(error => of(incidentActions.addFailure({message: error.error.message})))
//             ))
//         )
//     })

//     //handle the getting of incidents

//     displayIncident$ = createEffect(() => {

//         return this.action$.pipe(

//             //listen for the incident action

//             ofType(incidentActions.get),

//              // Handle the action by calling the IncidentService.displayIncident method

//             mergeMap(() => this.is. displayIncidents().pipe(

//                 map(response => incidentActions.getSuccess({incidents:response})

//                 ),

//                 catchError(error => of(incidentActions.getFailure({message: error.error.message})))

//             ))
//         )
//     })
// }