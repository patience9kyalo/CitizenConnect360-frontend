import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../Services/incident.service';
import { Incident } from '../Models/incident';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-incidents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-incidents.component.html',
  styleUrl: './display-incidents.component.css'
})
export class DisplayIncidentsComponent implements OnInit {

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

}
