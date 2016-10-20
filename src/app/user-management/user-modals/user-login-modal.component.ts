import { Component } from '@angular/core';
import { UserManagementService, User } from '../user-management.service';

declare var $: any;
declare var Stamplay: any;

@Component({
  templateUrl: './user-login-modal.component.html',
  selector: "user-login-modal"
})

export class UserLoginModalComponent {

  login: LoginData = new LoginData();

  constructor(private _userService: UserManagementService) { }

  show(): void {
    $('#login-dialog').modal('show');
  }

  hide(): void {
    $('#login-dialog').modal('hide');
  }

  onLogin(): void {
    this._userService.logIn(
      this.login.email,
      this.login.password);

    this.hide();
  }
}

export class LoginData {
  email: string;
  password: string;
}
