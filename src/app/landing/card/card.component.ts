import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../../utils/language.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(public languageService: LanguageService) { }

  ngOnInit(): void {
  }

}
