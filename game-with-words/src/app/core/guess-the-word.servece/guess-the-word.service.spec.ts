import { TestBed, inject } from '@angular/core/testing';
import { GuessTheWordService } from './guess-the-word.service';
describe('GuessTheWordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuessTheWordService]
    });
  });

  it('should be created', inject([GuessTheWordService], (service: GuessTheWordService) => {
    expect(service).toBeTruthy();
  }));
});
