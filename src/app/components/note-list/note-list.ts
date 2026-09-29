import { Component, inject, OnInit, signal } from '@angular/core';
import { Note } from '../../services/note';
import { NoteResponse } from '../../models/note-response';
import { statusEmojie } from '../../models/status-emojies';

@Component({
  selector: 'app-note-list',
  standalone: false,
  templateUrl: './note-list.html',
  styleUrl: './note-list.css',
})
export class NoteList implements OnInit {
  private noteService = inject(Note);

  notes = signal<NoteResponse[]>([]);
  error = signal('');
  start = signal('');
  end = signal('');
  selectedId = signal<number | null>(null);
  showEdit = signal(false);
  statusEmojie = statusEmojie;

  ngOnInit() {
    this.loadNotes();
  }

  loadNotes() {
    this.noteService.getNotes().subscribe({
      next: (response) => {
        console.log(response);
        this.notes.set(response);
        this.showEdit.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load your notes');
      },
    });
  }

  onDateChange() {
    if (this.start() && this.end()) {
      this.noteService
        .getNotesBetweendDates(this.start() + 'T00:00:00', this.end() + 'T23:59:59')
        .subscribe({
          next: (response) => {
            this.notes.set(response);
          },
          error: (err) => {
            this.error.set('Failed to filter your notes');
          },
        });
    }
  }

  onDelete(id: number) {
    this.noteService.deleteNote(id).subscribe({
      next: () => {
        this.notes.update((notes) => notes.filter((note) => note.id !== id));
      },
    });
  }

  onUpdate(id: number) {
    this.showEdit.set(true);
    this.selectedId.set(id);
  }
}
