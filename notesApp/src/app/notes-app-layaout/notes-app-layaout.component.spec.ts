import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesAppLayaoutComponent } from './notes-app-layaout.component';

describe('NotesAppLayaoutComponent', () => {
  let component: NotesAppLayaoutComponent;
  let fixture: ComponentFixture<NotesAppLayaoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesAppLayaoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesAppLayaoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
