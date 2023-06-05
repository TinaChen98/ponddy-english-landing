import { TestBed } from '@angular/core/testing';

import { LanguageService } from './language.service';

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be set language', () => {
    console.log(service.language)
    service.setDefaultLanguage()
    console.log(service.language)
    expect(service.language).toBe('zh-tw');
  });
});
