import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
declare var Stamplay: any;
declare var $:any;

@Injectable()
export class UserManagementService {

   public user: BehaviorSubject<User> = new BehaviorSubject<User>(null);

   constructor() {
        var user = this.user;
        Stamplay.User.currentUser()
            .then(function (res: any) {
                user.next(new User(res.user.displayName, res.user.email));
            }, function (err: any) {
                console.log(JSON.stringify(err));
            })
    }

    public logIn(email: string, password: string) {
        var user = this.user;
        Stamplay.User.login({ email: email, password: password })
            .then(function (res: any) {
                user.next(new User(res.displayName, res.email));
                $.snackbar({content: res.displayName + ' is now logged in.', style: 'toast'});
            }, function (err: any) {
                console.log(JSON.stringify(err));
            })
    }

    public signUp(displayName: string, email: string, password: string) {
        var self = this;
        Stamplay.User.signup({ displayName: displayName, email: email, password: password })
            .then(function (res: any) {
                 self.logIn(email, password);
                 $.snackbar({content: 'The account for ' + res.displayName + ' has been created.', style: 'toast'});
            }, function (err: any) {
                console.log(JSON.stringify(err));               
            })
    }

    public logOut() {
        var user = this.user;
        Stamplay.User.logout(true, function (err: any, res: any) {
            user.next(null);
            $.snackbar({content: 'Logged out.', style: 'toast'});
        });
    }    
}

export class User {
    constructor( public displayName: string, public email: string) {
    }
}

