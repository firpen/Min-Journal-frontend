import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NoteRequest } from '../models/note-request';
import { NoteResponse } from '../models/note-response';
import { StatsResponse } from '../models/stats-response';

@Injectable({
  providedIn: 'root',
})
export class Note {
  private http = inject(HttpClient);

  createNote(request: NoteRequest): Observable<void> {
    return this.http.post<void>('http://localhost:8080/notes', request, { withCredentials: true });
  }

  getNotes(): Observable<NoteResponse[]> {
    return this.http.get<NoteResponse[]>('http://localhost:8080/notes', { withCredentials: true });
  }

  getStats(): Observable<StatsResponse> {
    return this.http.get<StatsResponse>('http://localhost:8080/notes/stats', {
      withCredentials: true,
    });
  }

  getNotesBetweendDates(start: string, end: string): Observable<NoteResponse[]> {
    return this.http.get<NoteResponse[]>('http://localhost:8080/notes/notesbetweendates', {
      params: { start, end },
      withCredentials: true,
    });
  }

  deleteNote(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/notes/${id}`, {
      withCredentials: true,
    });
  }

  updateNote(id: number, request: NoteRequest): Observable<void> {
    return this.http.put<void>(`http://localhost:8080/notes/${id}`, request, { withCredentials: true });
  }
}
