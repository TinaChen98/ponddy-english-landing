import { LanguageService } from './../../../utils/language.service';
import {
  Component,
  HostListener,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.scss']
})
export class OpenComponent implements OnInit {

  constructor(public languageService: LanguageService) {}

  keyframesStart = false
  iconifyWrap = true

  ngOnInit(): void {}

  @HostListener("window:scroll", ["$event"])
  nowScroll() {
    let scroll = window.scrollY;
    if(scroll > 5){
      this.iconifyWrap = false
    } else {
      this.iconifyWrap = true
    }

    var elem = document.getElementById('open_text');
    var elemPos = elem.offsetTop
    var elemHeight = elem.scrollHeight;

    if(scroll >= (elemPos-elemHeight+50)) {
      this.keyframesStart = true
    } else {
      this.keyframesStart = false
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
