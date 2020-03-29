import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesDetailViewComponent } from './notes-detail-view.component';

describe('NotesDetailViewComponent', () => {
  let component: NotesDetailViewComponent;
  let fixture: ComponentFixture<NotesDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
