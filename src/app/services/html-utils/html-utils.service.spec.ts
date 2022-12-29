import { TestBed } from '@angular/core/testing';

import { HtmlUtilsService } from './html-utils.service';

describe('HtmlUtilsService', () => {
  let service: HtmlUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtmlUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
