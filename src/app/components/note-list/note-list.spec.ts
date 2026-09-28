import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteList } from './note-list';

describe('NoteList', () => {
  let component: NoteList;
  let fixture: ComponentFixture<NoteList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteList],
    }).compileComponents();

    fixture = TestBed.createComponent(NoteList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
