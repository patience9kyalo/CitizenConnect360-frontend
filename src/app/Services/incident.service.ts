import { Injectable } from '@angular/core';
import { Incident } from '../Models/incident';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  // Array to store incidents
  private incidents: Incident[] = [

    {
      incidentId: '',
      incidentLocation: 'Main Street, City Center',
      incidentStatus: 'Reported',
      incidentDescription: 'A traffic accident involving two cars.',
      incidentImage: 'march.webp',
      Email: 'Jane',
      profile:'profile.svg'
    },
    {
      incidentId:'',
      incidentLocation: 'North Park, Block B',
      incidentStatus: 'In Progress',
      incidentDescription: 'Fire outbreak in a residential building.',
      incidentImage: 'march.webp',
      Email: 'Jailene',
      profile:'profile.svg'
    },
    {
      incidentId: '',
      incidentLocation: 'West Avenue, Near the Mall',
      incidentStatus: 'Resolved',
      incidentDescription: 'A tree fell on the road due to heavy wind.',
      incidentImage: 'march.webp',
      Email: 'Jaine',
      profile:'profile.svg'
    },
    {
      incidentId:'',
      incidentLocation: 'East District, Sector 5',
      incidentStatus: 'Reported',
      incidentDescription: 'Water pipe burst causing flooding.',
      incidentImage: 'march.webp',
      Email: 'June',
      profile:'profile.svg'
    },
    {
      incidentId:'',
      incidentLocation: 'South End, Bus Terminal',
      incidentStatus: 'In Progress',
      incidentDescription: 'A bus caught fire, emergency services on site.',
      incidentImage: 'march.webp',
      Email: 'Jene',
      profile:'profile.svg'
    }

  ];

  constructor() { }

  // Method to report an incident
  addIncident(incident: Incident): Observable<any> {

    // Log the new incident
    console.log('Adding incident:', incident);

    // Add the new incident to the array
    this.incidents.push(incident);

    // Return an observable indicating success
    return of({ success: true, message: 'Incident reported successfully' });
  }

  // Method to get all incidents
  displayIncidents(): Observable<Incident[]> {
    
    // Log the current incidents
    console.log('Displaying incidents:', this.incidents);

    // Return an observable containing the array of incidents
    return of(this.incidents);
  }
}
