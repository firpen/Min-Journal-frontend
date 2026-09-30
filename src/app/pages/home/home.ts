import { Component, inject, signal } from '@angular/core';
import { Note } from '../../services/note';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  private noteService = inject(Note);
  private router = inject(Router);

  onLogout() {
    this.noteService.logout().subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['login']);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
