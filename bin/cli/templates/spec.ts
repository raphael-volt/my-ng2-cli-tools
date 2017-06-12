import { TestBed, async, inject } from '@angular/core/testing';
import { $PascalCaseName$ } from './$name$.ts';

describe('$PascalCaseName$Test', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [],
      imports: []
    });
  });

  it('should test $PascalCaseName$', () => {
    let instance: $PascalCaseName$ = new $PascalCaseName$();
    expect(instance).toBeTruthy();
  });
})