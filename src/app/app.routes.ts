import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AuthGuard } from './Guards/auth.guard';
import { IncidentComponent } from './incident/incident.component';
import { PollsComponent } from './polls/polls.component';
import { AddPollsComponent } from './add-polls/add-polls.component';
import { DisplayIncidentsComponent } from './display-incidents/display-incidents.component';
import { ReportsComponent } from './reports/reports.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminusersComponent } from './adminusers/adminusers.component';
import { AdminreportsComponent } from './adminreports/adminreports.component';
import { ChatComponent } from './chat/chat.component';
import { ViewsComponent } from './views/views.component';

export const routes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'adminhome', component: AdminhomeComponent },
    { path: 'adminusers', component: AdminusersComponent },
    { path: 'adminreport', component: AdminreportsComponent },
    { path: 'chat ai', component: ChatComponent },
    { path: 'views', component: ViewsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forgotpassword', component: ForgotpasswordComponent, canActivate:[AuthGuard] },
    { path: 'report', component: IncidentComponent, canActivate:[AuthGuard] },
    { path: 'reports', component: ReportsComponent, canActivate:[AuthGuard] },
    { path: 'polls', component: PollsComponent, canActivate:[AuthGuard] },
    { path: 'addpolls', component: AddPollsComponent, canActivate:[AuthGuard] },
    { path: 'gvnincidents', component: DisplayIncidentsComponent, canActivate:[AuthGuard] },
    { path: 'logout', component: HomeComponent },
    // { path: 'tours', canActivate: [AuthGuard], children: [
    //     { path: '', component: ToursComponent },
    //     { path: ':tid', component: TourComponent }
    //   ]},
    // { path: 'booking', canActivate: [AuthGuard], children: [
    //     { path: '', component: BookingComponent },
    //     { path: ':bid', component: BookingComponent }
    //   ]},

    // {path:'admintour', component:AddTourComponent, canActivate: [AuthGuard]},
    // {path:'adminhotel', component:AddhotelComponent, canActivate: [AuthGuard]},
    { path: '**', component: HomeComponent }
    
];
