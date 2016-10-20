import { Component, NgZone } from '@angular/core';
import { UserManagementService, User } from './user-management/user-management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User;

  constructor(private zone: NgZone, private _userService: UserManagementService) { }

  ngOnInit(): void {
    this._userService.user.subscribe(user => {
      this.user = user;
      this.zone.run(() => {});
    })
  }

}
