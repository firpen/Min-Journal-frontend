import { Component, inject, input, output, signal } from '@angular/core';
import { Note } from '../../services/note';

@Component({
  selector: 'app-edit-form',
  standalone: false,
  templateUrl: './edit-form.html',
  styleUrl: './edit-form.css',
})
export class EditForm {

  private noteService = inject(Note);

  noteId = input<number | null>(null);
  status = '';
  note = '';
  error = signal('');
  cancel = output<void>();
  updated = output<void>();

  onUpdate() {
    const id = this.noteId();
    if (id === null) {
      return
    }
    this.noteService.updateNote(id, {note: this.note, status: this.status}).subscribe({
      next: () => {
        this.updated.emit();
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  onCancel() {
    this.cancel.emit();
  }
}
