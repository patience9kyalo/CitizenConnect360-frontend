import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-polls',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './add-polls.component.html',
  styleUrl: './add-polls.component.css'
})

export class AddPollsComponent {

  @Output() pollAdded = new EventEmitter<{ pollId: string, question: string, options: string[], votes: string }>(); // Event emitter to emit new poll data

  pollForm: FormGroup; // Declare FormGroup for managing form data

  errorMessage: string = ''; // Error message variable

  constructor(private fb: FormBuilder) {

    // Initialize pollForm with FormBuilder to define form controls and validation

    this.pollForm = this.fb.group({

      pollId: [''],
      question: ['', Validators.required],
      options: ['', Validators.required],
      votes: ['']

    });
  }

  onSubmit(): void {

    if (this.pollForm.valid) { // Check if the form is valid

      const { pollId, question, options, votes } = this.pollForm.value; // Destructure form values

       // Convert options string to array

      const optionsArray = options.split(',').map((option: string) => option.trim());

      // Emit pollAdded event with new poll data
      
      this.pollAdded.emit({ pollId, question, options: optionsArray, votes });

      this.pollForm.reset(); // Reset the form after submission
      this.errorMessage = ''; // Clear any previous error messages
    } else {
      this.errorMessage = 'Please fill out all required fields.'; // Set error message if form is invalid
    }
  }
}