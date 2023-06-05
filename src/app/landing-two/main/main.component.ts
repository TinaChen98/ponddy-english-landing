import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'landing-two-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  iconifyWrap = true
  document: any;

  constructor(@Inject(DOCUMENT) document: Document, private pageScrollService: PageScrollService,) { 
    this.document = document;
  }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", ["$event"])
  nowScroll() {
    let scroll = window.scrollY;
    if(scroll > 5){
      this.iconifyWrap = false
    } else {
      this.iconifyWrap = true
    }
  }
  
  smoothScroll() {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '#download',
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
