import { TestBed } from '@angular/core/testing';

import { NotesAppService } from './notes-app.service';

describe('NotesAppService', () => {
  let service: NotesAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
