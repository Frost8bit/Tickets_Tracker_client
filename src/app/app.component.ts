import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { AuthenticationService } from './shared/_services';
import { User, Role } from './shared/_models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tickets-tracker';
  user: User;

  showHead: boolean = false;

  ngOnInit() {
  }

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.user.subscribe(x => this.user = x);
}

get isAdmin() {
    return this.user && this.user.role === Role.Admin;
}

get isUser() {
  return this.user && this.user.role === Role.User;
}

get UserName() {
  return this.user.name;
}

logout() {
    this.authenticationService.logout();
}
}

