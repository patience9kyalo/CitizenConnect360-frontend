import { Component, OnInit } from '@angular/core';
import { Incident } from '../Models/incident';
import { IncidentService } from '../Services/incident.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adminreports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adminreports.component.html',
  styleUrl: './adminreports.component.css'
})
export class AdminreportsComponent implements OnInit{

  incidents: Incident[] = [];

  constructor(private is: IncidentService) { }

  ngOnInit(): void {
    this.displayIncidents();
  }

  displayIncidents(): void {
    this.is.displayIncidents().subscribe(incidents => {
      this.incidents = incidents;
    });
  }

  deleteIncident(incident: Incident): void {
    console.log('Deleting incident:', incident);
  }

}
