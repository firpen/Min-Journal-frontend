import { Component, inject, signal } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  private authService = inject(Auth);
  private router = inject(Router);

  username = '';
  password = '';
  error = signal('');

  onSubmit(username: string, password: string) {
    this.authService.register( {username, password} ).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.error.set(err.error);
      }
    });
    this.username = '';
    this.password = '';
  }
}
