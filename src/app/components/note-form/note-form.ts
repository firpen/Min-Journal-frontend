import { Component, inject, output, signal } from '@angular/core';
import { Note } from '../../services/note';

@Component({
  selector: 'app-note-form',
  standalone: false,
  templateUrl: './note-form.html',
  styleUrl: './note-form.css',
})
export class NoteForm {
  private noteService = inject(Note);

  status = signal('');
  note = signal('');
  error = signal('');
  created = output<void>();

  onSubmit() {
    this.noteService.createNote({ status: this.status(), note: this.note() }).subscribe({
      next: () => {
        this.status.set('');
        this.note.set('');
        this.created.emit();
      },
      error: (err) => {
        this.error.set('Make sure you selected a status and wrote a note');
      },
    });
  }
}
