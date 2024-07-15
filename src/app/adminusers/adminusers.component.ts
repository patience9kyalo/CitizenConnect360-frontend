import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { User } from '../Models/users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adminusers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adminusers.component.html',
  styleUrl: './adminusers.component.css'
})
export class AdminusersComponent  implements OnInit{

  users: User[] = [];

  constructor(private as: AuthService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    // Load users from the AuthService
    this.users = this.as.getUsers();
  }

  verifyUser(user: User): void {
    // Implement verification logic here
    console.log('Verifying user:', user);
  }

  deleteUser(user: User): void {
    // Implement delete logic here
    console.log('Deleting user:', user);
    this.as.rejectUser(user);  // Call AuthService to handle delete
    this.loadUsers();  // Refresh the user list
  }

  approveUser(user: User): void {
    // Implement approve logic here
    console.log('Approving user:', user);
    this.as.approveUser(user);  // Call AuthService to handle approve
    this.loadUsers();  // Refresh the user list
  }

  rejectUser(user: User): void {
    // Implement reject logic here
    console.log('Rejecting user:', user);
    this.as.rejectUser(user);  // Call AuthService to handle reject
    this.loadUsers();  // Refresh the user list
  }

}
