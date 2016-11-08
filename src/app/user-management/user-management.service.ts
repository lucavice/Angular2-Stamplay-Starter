import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserManagementService implements OnInit {

    private userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);
    private usersSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(null);

    public get user(): Observable<User> {
        return this.userSubject as Observable<User>;
    }

    public get users(): Observable<User[]> {
        return this.usersSubject as Observable<User[]>;
    }

    ngOnInit() {
        var user = this.userSubject;
        Stamplay.User.currentUser()
            .then(function (res: any) {
                user.next(new User(res.user.displayName, res.user.email));
            }, function (err: any) {
                console.log(err);
            })
    }

    public logIn(email: string, password: string) {
        var user = this.userSubject;
        Stamplay.User.login({ email: email, password: password })
            .then(function (res: any) {
                user.next(new User(res.displayName, res.email));
                $.snackbar({ content: res.displayName + ' is now logged in.', style: 'toast' });
            }, function (err: any) {
                console.log(err);
            })
    }

    public signUp(displayName: string, email: string, password: string) {
        var self = this;
        Stamplay.User.signup({ displayName: displayName, email: email, password: password })
            .then(function (res: any) {
                self.logIn(email, password);
                $.snackbar({ content: 'The account for ' + res.displayName + ' has been created.', style: 'toast' });
            }, function (err: any) {
                console.log(err);
            })
    }

    public logOut() {
        var user = this.userSubject;
        Stamplay.User.logout(true, function (err: any, res: any) {
            user.next(null);
            $.snackbar({ content: 'Logged out.', style: 'toast' });
        });
    }

    public getUsers() {
        var users = this.usersSubject;
        Stamplay.User.get()
            .then(function (res: any) {
                users.next(res.data as User[]);
            }, function (err: any) {
                console.log(err);
            })
    }
}

export class User {
    constructor(public displayName: string, public dt_create: Date) {
    }
}

