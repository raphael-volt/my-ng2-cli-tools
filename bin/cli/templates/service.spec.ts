import { TestBed, async, inject } from '@angular/core/testing';
import { $PascalCaseName$ } from './$name$.ts';

describe('$PascalCaseName$Test', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
          {
              provide: $PascalCaseName$,
              deps:[],
              useFactory: () => {
                  return new $PascalCaseName$()
              }
          }
      ],
      imports: []
    });
  });

  it('should inject $PascalCaseName$', inject([$PascalCaseName$], (service: $PascalCaseName$) => {
    expect(instance).toBeTruthy();
  }));
})