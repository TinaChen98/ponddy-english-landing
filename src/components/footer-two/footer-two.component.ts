import { LanguageService } from '../../utils/language.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-two',
  templateUrl: './footer-two.component.html',
  styleUrls: ['./footer-two.component.scss']
})
export class FooterTwoComponent implements OnInit {

  constructor(public languageService: LanguageService) { }

  ngOnInit(): void {
  }
}
