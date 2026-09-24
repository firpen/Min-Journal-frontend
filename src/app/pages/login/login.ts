import { Component, inject, signal } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(Auth);
  private router = inject(Router);

  username = '';
  password = '';
  error = signal('');

  onSubmit(username: string, password: string) {
    this.authService.login({ username, password }).subscribe({
      next: () => {
        this.router.navigate(['/'])
      },
      error: (err) => {
        this.error.set(err.error);
      },
    });
    this.username = '';
    this.password = '';
  }
}
