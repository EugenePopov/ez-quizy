import { TestBed, async, inject } from '@angular/core/testing';

import { QuestionsResolverGuard } from './questions-resolver.guard';

describe('QuestionsResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionsResolverGuard]
    });
  });

  it('should ...', inject([QuestionsResolverGuard], (guard: QuestionsResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
