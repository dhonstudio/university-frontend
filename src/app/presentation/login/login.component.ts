import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../application/services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleSigninButtonModule, SocialAuthService, SocialLoginModule } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, SocialLoginModule, GoogleSigninButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  credential = {
    username: '',
    password: ''
  }

  constructor(
    private _authService: AuthService,
    private _oauthService: SocialAuthService,
    private _router: Router,
  ) { }
  ngOnInit(): void {
    if (this._authService.isLoggedIn()) {
      this._router.navigate(['/course']);
    }

    this._oauthService.authState.subscribe((user) => {

      this._authService.checkGoogleUser(user).subscribe((response) => {
        var token = response.token;
        this._authService.saveToken(token)
        this._router.navigate(['/course'])
      },
        (error) => {
          alert(error.message)
        })
    })
  }

  onLogin() {
    this._authService.login(this.credential).subscribe((response) => {
      var token = response.token;
      this._authService.saveToken(token)
      this._router.navigate(['/course'])
    },
      (error) => {
        alert(error.message)
      })
  }
}
