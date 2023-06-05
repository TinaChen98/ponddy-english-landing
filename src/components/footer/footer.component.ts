import { LanguageService } from './../../utils/language.service';
import { Component, OnInit } from '@angular/core';
// import {Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public languageService: LanguageService) { }

  ngOnInit(): void {
  }

  checkSelect() {
    // @ts-ignore
    this.languageService.language = document.getElementById("language_select").value

    switch(this.languageService.language) {
      case 'zh-tw':
        location.href = '/zh-Hant'
        break
      case 'zh-cn':
        location.href = '/zh-Hans'
        break
      case 'ja':
        location.href = '/ja'
        break
    }

  }

  terms() {
    switch(this.languageService.language) {
      case 'zh-tw':
        window.open('https://ponddy-apps.s3.us-west-2.amazonaws.com/dictionary/legal_documents/terms_of_use/zh-tw/terms_of_use.htm', '_black');
        break
      case 'zh-cn':
        window.open('https://ponddy-apps.s3.us-west-2.amazonaws.com/dictionary/legal_documents/terms_of_use/zh-cn/terms_of_use.htm', '_black');
        break
      case 'ja':
        window.open('https://ponddy-apps.s3.us-west-2.amazonaws.com/dictionary/legal_documents/terms_of_use/en/terms_of_use.htm', '_black');
        break
    }
  }

  privacy() {
    switch(this.languageService.language) {
      case 'zh-tw':
        window.open('https://ponddy-apps.s3.us-west-2.amazonaws.com/dictionary/legal_documents/privacy_policy/zh-tw/privacy_policy.htm', '_black');
        break
      case 'zh-cn':
        window.open('https://ponddy-apps.s3.us-west-2.amazonaws.com/dictionary/legal_documents/privacy_policy/zh-cn/privacy_policy.htm', '_black');
        break
      case 'ja':
        window.open('https://ponddy-apps.s3.us-west-2.amazonaws.com/dictionary/legal_documents/privacy_policy/en/privacy_policy.htm', '_black');
        break
    }
  }
}
