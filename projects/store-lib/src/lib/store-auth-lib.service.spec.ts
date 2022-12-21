import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StoreAuthLibService } from './store-auth-lib.service';

describe('StoreAuthLibService', () => {
  let service: StoreAuthLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [],
    });
    service = TestBed.inject(StoreAuthLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
