import { LanguageService } from './../../utils/language.service';
import {Component, Inject, OnInit} from '@angular/core'
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.scss']
})
export class HeaderTwoComponent implements OnInit {

  menuStatus = false

  constructor(public languageService: LanguageService,
              private pageScrollService: PageScrollService,
              @Inject(DOCUMENT) private document: any) {
  }

  ngOnInit(): void {
  }
  
  menuToggle() {
    if(this.menuStatus ){
      this.menuStatus = false
    } else {
      this.menuStatus = true
    }
  }

  smoothScroll() {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '#contact-us',
      duration: 250,
      scrollOffset: 60
    });
  }

  topScroll() {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '#main',
      duration: 250,
      scrollOffset: 60
    });
  }
}
