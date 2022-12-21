import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { StoreLibService } from './store-lib.service';
import { LoadingService, MessagesService } from '@commons-lib';

describe('StoreLibService', () => {
  let service: StoreLibService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StoreLibService, LoadingService, MessagesService],
    });
    service = TestBed.inject(StoreLibService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
