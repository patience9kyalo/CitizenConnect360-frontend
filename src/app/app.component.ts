import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { IncidentComponent } from './incident/incident.component';
import { DisplayIncidentsComponent } from './display-incidents/display-incidents.component';
import { ReportsComponent } from './reports/reports.component';
import { AdminusersComponent } from './adminusers/adminusers.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminreportsComponent } from './adminreports/adminreports.component';
import { ChatComponent } from './chat/chat.component';
import { ViewsComponent } from './views/views.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent,LoginComponent,NavbarComponent, RegisterComponent, ForgotpasswordComponent,IncidentComponent,DisplayIncidentsComponent,ReportsComponent,AdminusersComponent,AdminhomeComponent,AdminreportsComponent,ChatComponent,ViewsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'citizenconnect';
}
