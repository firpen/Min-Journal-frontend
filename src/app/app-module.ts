import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './pages/home/home';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { NoteForm } from './components/note-form/note-form';
import { NoteList } from './components/note-list/note-list';
import { EditForm } from './components/edit-form/edit-form';
import { Stats } from './components/stats/stats';

@NgModule({
  declarations: [App, Home, Register, Login, NoteForm, NoteList, EditForm, Stats],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
