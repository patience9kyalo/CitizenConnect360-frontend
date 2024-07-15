import { Injectable } from '@angular/core';
import { LoginReq, LoginResponse, Payload, RegisterResponse, User } from '../Models/users';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // Array to store registered users
  private users: User[] = [
    { Name: "Patience", Email: "patience@gmail.com", Password: "Peshy@577", Role: "admin" },
    { Name: "Stine", Email: "stine@gmail.com", Password: "Stine@577", Role: "citizen" },
    { Name: "Passy", Email: "passy@gmail.com", Password: "Passy@577", Role: "gvn" },
    { Name: "Tobiah", Email: "tobiah@gmail.com", Password: "Tobiah@577", Role: "gvn" },
    { Name: "Ethan", Email: "ethan@gmail.com", Password: "Tobiah@577", Role: "citizen" },
  ];

  // Store the currently logged in user
  private currentUser: LoginResponse | null = null;
 

  constructor(private router: Router) { }

  // Register a new user
  registerUser(user: User): Observable<RegisterResponse> {
    // Check if the user already exists
    if (this.users.find(u => u.Email === user.Email)) {
      return of({ Message: "User already exists" });
    }

    // Add new user to the array
    this.users.push(user);
    return of({ Message: "Registration successful" });
  }

  // Login a user
  loginUser(credentials: LoginReq): Observable<LoginResponse> {
    // Find user by email and password
    const user = this.users.find(u => u.Email === credentials.Email && u.Password === credentials.Password);

    if (user) {
      // Simulate a successful login response
      const loginResponse: LoginResponse = {
        message: 'Login successful',
        Role:user.Role,
        payload: {
          Sub: user.Email,
          Id: this.users.indexOf(user), // Assuming index can be used as ID
          Name: user.Name,
          Role: user.Role
        }
      };

      // Store the logged in user
      this.currentUser = loginResponse;

      // Navigate to a different route after successful login if needed
      this.router.navigate(['/home']);

      return of(loginResponse);

    } else {
      // Simulate a failed login response
      return of({ message: 'Invalid credentials',Role:'', payload: { Sub: '', Id: -1, Name: '', Role: '' } });
    }
  }

  // Forgot Password
  forgotPassword(email: string): Observable<{ message: string }> {
    const user = this.users.find(u => u.Email === email);

    if (user) {
      return of({ message: 'Password reset instructions have been sent' });
    } else {
      return of({ message: 'Email not found' });
    }
  }



  isLoggedIn(): boolean {
    const role = localStorage.getItem('Role') as string
    if (role) {
      return true
    }
    return false
  }

  logout() {
    // localStorage.removeItem('token');
    localStorage.removeItem('Role');
    this.router.navigate(['/home']);
  }

  // Method to get all users
  getUsers(): User[] {
    return this.users;
  }

  // Method to approve a user
  approveUser(user: User): void {
    console.log('Approving user:', user);
    const foundUser = this.users.find(u => u.Email === user.Email);
    if (foundUser) {
      foundUser.Role = 'approved';
    }
  }

  // Method to reject a user
  rejectUser(user: User): void {
    console.log('Rejecting user:', user);
    
    const foundUser = this.users.find(u => u.Email === user.Email);
    if (foundUser) {
      foundUser.Role = 'rejected';
    }
  }
}