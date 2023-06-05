import { Injectable } from '@angular/core';
import { DeviceService } from './../utils/device.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public language: any;

  constructor(public device: DeviceService) {
    if(this.device.isBrowser) {
      this.setDefaultLanguage();
    }
   }

  setDefaultLanguage() {
    // @ts-ignore
    let language = (navigator.language || navigator.browserLanguage).toLowerCase();
    this.language = language;

    let language_check = location.href.split('/');
    for (let i = 0; i < language_check.length; i++) {
      switch (language_check[i]) {
        case 'zh-Hant':
          this.language = 'zh-tw';
          break;
        case 'zh-Hans':
          this.language = 'zh-cn';
          break;
        case 'ja':
          this.language = 'ja';
          break;
      }
    }
  }

}
