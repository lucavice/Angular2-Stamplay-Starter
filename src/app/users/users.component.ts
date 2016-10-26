import { Component, NgZone, OnInit } from '@angular/core';
import { UserManagementService, User } from '../user-management/user-management.service';

declare var Stamplay: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  constructor(private zone: NgZone, private _userService: UserManagementService) { }

  users: User[];

  ngOnInit() {

    this._userService.users.subscribe(users => {
      this.users = users;
      this.zone.run(() => { });
    });

    if (this.users == null) {
      this._userService.getUsers();
    }

  }
}

