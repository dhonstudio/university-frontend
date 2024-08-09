import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './application/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'University App';
  user: any;

  constructor(
    private _authService: AuthService,
    private _router: Router,
  ) { }
  ngOnInit(): void {
    this.user = this._authService.getUser()
  }

  logout() {
    this._authService.logout();
    this._router.navigate(['/login'])
  }
}
