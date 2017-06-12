# my-ng2-cli-tools
Add spec feature to angular-cli-tools

## Usage
Create a **jasmine** test case for `MyClass.ts` :
```
mng g spec my-class
```
Or using the shorthand alias :
```
mng g sp my-class
```
Output :
```typescript
import { TestBed, async, inject } from '@angular/core/testing';
import { MyClass } from './my-class.ts';

describe('MyClassTest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [],
      imports: []
    });
  });

  it('should test MyClass', () => {
    let instance: MyClass = new MyClass();
    expect(instance).toBeTruthy();
  });
})
```
Create a **jasmine** test case for a service `MyService.ts` :
```
mng g serviceSpec my-service
```
Or using the shorthand alias :
```
mng g ssp my-class
```
Output :
```typescript
import { TestBed, async, inject } from '@angular/core/testing';
import { MyService } from './my-service.ts';

describe('MyServiceTest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
          {
              provide: MyService,
              deps:[],
              useFactory: () => {
                  return new MyService()
              }
          }
      ],
      imports: []
    });
  });

  it('should inject MyService', inject([MyService], (service: MyService) => {
    expect(instance).toBeTruthy();
  }));
})
```
