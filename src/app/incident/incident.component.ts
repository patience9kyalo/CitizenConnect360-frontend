import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IncidentService } from '../Services/incident.service';


@Component({
  selector: 'app-incident',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './incident.component.html',
  styleUrl: './incident.component.css'
})

export class IncidentComponent implements OnInit {

  incidentForm: FormGroup;
  errorMessage: string = '';
  selectedImage: File | null = null;
  selectedProfileImage: File | null = null;

  constructor(private fb: FormBuilder, private incidentService: IncidentService) {
    this.incidentForm = this.fb.group({
      incidentId: [''], // Add form controls as per your Incident model
      incidentLocation: ['', Validators.required],
      incidentStatus: ['', Validators.required],
      incidentDescription: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onImageSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedImage = fileInput.files[0];
    }
  }
  onProfileImageSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedProfileImage = fileInput.files[0];
    }
  }

  onSubmit(): void {
    if (this.incidentForm.valid) {
      const newIncident = this.incidentForm.value;
      this.incidentService.addIncident(newIncident).subscribe(() => {
        // Reset form after adding incident
        this.incidentForm.reset();
      });
    } else {
      this.errorMessage = 'Please fill out all required fields.';
    }
  }
}