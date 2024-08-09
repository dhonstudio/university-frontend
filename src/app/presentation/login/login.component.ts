import { Component } from '@angular/core';
import { AuthService } from '../../application/services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  credential = {
    username: '',
    password: ''
  }

  constructor(
    private _authService: AuthService,
    private _router: Router,
  ) { }

  onLogin() {
    this._authService.login(this.credential).subscribe((response) => {
      var token = response.token;
      this._authService.saveToken(token)
      this._router.navigate(['/course'])
    })
  }
}
