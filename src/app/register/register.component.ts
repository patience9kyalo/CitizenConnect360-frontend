import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import { authActions } from '../State/Actions/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../State';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {

  registerForm!: FormGroup;
  errorMessage = '';
  termsAccepted = false;

  constructor(
    private fb: FormBuilder,
    private as: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.registerForm = this.fb.group({
      Name: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(8)]],
      AcceptTerms: [false, [Validators.requiredTrue]]
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid || !this.termsAccepted) {
      return;
    }

    const user = {
      Name: this.registerForm.value.Name,
      Email: this.registerForm.value.Email,
      Password: this.registerForm.value.Password,
      Role: 'citizen'
    };

    this.as.registerUser(user).subscribe(
      () => {
        this.router.navigate(['login']);
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );

    this.store.dispatch(authActions.register({ user: this.registerForm.value }));
  }

  onTermsAccepted(event: any): void {
    this.termsAccepted = event.target.checked;
  }
}