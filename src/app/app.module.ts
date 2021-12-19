import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuillModule } from 'ngx-quill'
import { CommonModule } from '@angular/common';

// HttpClient module for RESTful API
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Forms module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { JwtInterceptor, ErrorInterceptor } from './shared/_helpers';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';


// Components
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicketsListAdminComponent } from './tickets_list-admin/tickets_list-admin.component';
import { TicketCreateComponent } from './ticket-create/ticket-create.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';
import { UsersListAdminComponent } from './users-list-admin/users-list-admin.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { CommentCreateComponent } from './comment-create/comment-create.component';
import { ReplyCreateComponent } from './reply-create/reply-create.component';
import { MyTicketsAdminComponent } from './my-tickets-admin/my-tickets-admin.component';
import { TicketsListUserComponent } from './tickets_list-user/tickets_list-user.component';
import { TicketUserComponent } from './ticket-user/ticket-user.component';
import { TicketCreateUserComponent } from './ticket-create-user/ticket-create-user.component';
import { ReplyCreateUserComponent } from './reply-create-user/reply-create-user.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TicketsListAdminComponent,
    TicketCreateComponent,
    TicketComponent,
    TicketEditComponent,
    UsersListAdminComponent,
    CompaniesListComponent,
    CompanyCreateComponent,
    CompanyEditComponent,
    UserCreateComponent,
    UserEditComponent,
    CommentCreateComponent,
    ReplyCreateComponent,
    MyTicketsAdminComponent,
    TicketsListUserComponent,
    TicketUserComponent,
    TicketCreateUserComponent,
    ReplyCreateUserComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    QuillModule.forRoot(),
  ],
  schemas: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
