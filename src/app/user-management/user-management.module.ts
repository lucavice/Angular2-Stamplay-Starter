import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserSignupModalComponent } from './user-modals/user-signup-modal.component';
import { UserLoginModalComponent } from './user-modals/user-login-modal.component';
import { UserManagementService } from './user-management.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    UserSignupModalComponent,
    UserLoginModalComponent],
  exports: [
    UserSignupModalComponent,
    UserLoginModalComponent
  ],
  providers: [UserManagementService]
})
export class UserManagementModule { }
