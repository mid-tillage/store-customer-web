import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Login } from '../../model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private readonly userService: UserService) { }
  private fb = inject(FormBuilder);
  loginForm = this.fb.group({
    username: null,
    email: null,
    password: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ]
  });
  onSubmit(): void {
    const user: Login = new Login(this.loginForm.value);
    console.log(user);
    // this.userService.postUser();
    alert('Thanks!');
  }
}
