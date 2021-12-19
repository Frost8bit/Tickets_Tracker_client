import { NgModule, COMPILER_OPTIONS } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketsListAdminComponent } from './tickets_list-admin/tickets_list-admin.component';
import { TicketCreateComponent } from './ticket-create/ticket-create.component';
import { TicketComponent } from './ticket/ticket.component';
import { UsersListAdminComponent } from './users-list-admin/users-list-admin.component';
import { CommonModule } from '@angular/common';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import {CompanyEditComponent} from './company-edit/company-edit.component';
import {CompanyCreateComponent} from './company-create/company-create.component';
import {UserCreateComponent} from './user-create/user-create.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {CommentCreateComponent} from './comment-create/comment-create.component';
import {ReplyCreateComponent} from './reply-create/reply-create.component';
import {MyTicketsAdminComponent} from './my-tickets-admin/my-tickets-admin.component';
import { TicketsListUserComponent } from './tickets_list-user/tickets_list-user.component'
import { TicketUserComponent } from './ticket-user/ticket-user.component'
import { TicketCreateUserComponent } from './ticket-create-user/ticket-create-user.component';
import { ReplyCreateUserComponent } from './reply-create-user/reply-create-user.component'


import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/_helpers';
import { Role } from './shared/_models';


const routes: Routes = [
  
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
},
{
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
},
{
    path: 'login',
    component: LoginComponent
},
{
  path: 'tickets_list-admin',
  component: TicketsListAdminComponent,
  canActivate: [AuthGuard],
  data: { roles: [ Role.Admin ] }
},
{
  path: 'tickets_list',
  component: TicketsListUserComponent,
  canActivate: [AuthGuard],
  data: { roles: [ Role.User ] }
},
{
  path: 'ticket-create',
  component: TicketCreateComponent,
  canActivate: [AuthGuard],
  data: { roles: [Role.Admin ] }
},
{
  path: 'new-ticket',
  component: TicketCreateUserComponent,
  canActivate: [AuthGuard],
  data: { roles: [ Role.User] }
},
{
  path: 'ticket/:i_ticket',
  component: TicketComponent,
  canActivate: [AuthGuard],
  data: { roles: [Role.Admin] }
},
{
  path: 'users',
  component: UsersListAdminComponent,
  canActivate: [AuthGuard],
  data: { roles: [Role.Admin] }
},
{
  path: 'ticket-edit/:i_ticket',
  component: TicketEditComponent,
  canActivate: [AuthGuard],
  data: { roles: [Role.Admin] }
},
{
  path: 'companies',
  component: CompaniesListComponent,
  canActivate: [AuthGuard],
  data: { roles: [Role.Admin] }
},
{
  path: 'company-edit/:i_company',
  component: CompanyEditComponent,
  canActivate: [AuthGuard],
  data: { roles: [Role.Admin] }
},
{
  path: 'company-create',
  component: CompanyCreateComponent,
  canActivate: [AuthGuard],
  data: { roles: [Role.Admin] }
},
{
  path: 'user-create',
  component: UserCreateComponent,
  canActivate: [AuthGuard],
  data: { roles: [Role.Admin] }
},
{
  path: 'user-edit/:i_user',
  component: UserEditComponent,
  canActivate: [AuthGuard],
  data: { roles: [Role.Admin] }
},
{
  path: 'add-comment/:i_ticket',
  component: CommentCreateComponent,
  canActivate: [AuthGuard],
  data: { roles: [Role.Admin] }
},
{
  path: 'add-reply/:i_ticket',
  component: ReplyCreateComponent,
  canActivate: [AuthGuard],
  data: { roles: [Role.Admin ] }
},
{
  path: 'new-reply/:i_ticket',
  component: ReplyCreateUserComponent,
  canActivate: [AuthGuard],
  data: { roles: [Role.User] }
},
{
  path: 'my-tickets',
  component: MyTicketsAdminComponent,
  canActivate: [AuthGuard],
  data: { roles: [Role.Admin] }
},
{
  path: 'my-ticket/:i_ticket',
  component: TicketUserComponent,
  canActivate: [AuthGuard],
  data: { roles: [ Role.User] }
},
// otherwise redirect to home
{ path: '**', redirectTo: '' },

  { path :'', pathMatch: 'full', redirectTo: 'login' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ TicketsListAdminComponent, TicketComponent, CompaniesListComponent]