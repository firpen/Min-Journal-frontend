import { Component, effect, inject, input, signal } from '@angular/core';
import { Note } from '../../services/note';
import { StatsResponse } from '../../models/stats-response';
import { statusEmojie } from '../../models/status-emojies';

@Component({
  selector: 'app-stats',
  standalone: false,
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats {
  private noteService = inject(Note);
  start = input('');
  end = input('');
  stats = signal<StatsResponse | null>(null);
  statusEmojie = statusEmojie;

  /* Constructor körs en gång när komponenten skapas och skapar effecten.
   Effecten körs första gången när komponenten renderas (start och end är då tomma)
   och sedan varje gång signalerna start eller end ändras. */
  constructor() {
    effect(() => {
      this.getStats();
    });
  }

  getStats() {
    if (this.start() && this.end()) {
      this.noteService.getStats(this.start() + 'T00:00:00', this.end() + 'T23:59:59').subscribe({
        next: (response) => {
          this.stats.set(response);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
