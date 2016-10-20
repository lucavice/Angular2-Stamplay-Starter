import { Component } from '@angular/core';
import { UserManagementService, User } from '../user-management.service';

declare var $: any;
declare var Stamplay: any;

@Component({
  templateUrl: './user-signup-modal.component.html',
  selector: "user-signup-modal"
})

export class UserSignupModalComponent {

  signup: SignupData = new SignupData();

  constructor(private _userService: UserManagementService) { }

  show(): void {
    $('#signup-dialog').modal('show');
  }

  hide(): void {
    $('#signup-dialog').modal('hide');
  }

  onSignup(): void {

    this._userService.signUp(
      this.signup.displayName,
      this.signup.email,
      this.signup.password);

    this.hide();
  }
}

export class SignupData {

  displayName: string;
  email: string;
  password: string;

}
