import { LanguageService } from './../../utils/language.service';
import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public languageService: LanguageService) {
  }

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

  smoothScroll() {
    window.scroll({
      top: window.innerHeight - 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
