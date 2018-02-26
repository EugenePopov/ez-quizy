import { TestBed, inject } from '@angular/core/testing';

import { QuestionsReaderService } from './questions-reader.service';

describe('QuestionsReaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionsReaderService]
    });
  });

  it('should be created', inject([QuestionsReaderService], (service: QuestionsReaderService) => {
    expect(service).toBeTruthy();
  }));
});
