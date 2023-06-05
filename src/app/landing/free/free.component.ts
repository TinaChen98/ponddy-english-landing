import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../../utils/language.service';

@Component({
  selector: 'app-free',
  templateUrl: './free.component.html',
  styleUrls: ['./free.component.scss']
})
export class FreeComponent implements OnInit {

  constructor(public languageService: LanguageService) { }

  ngOnInit(): void {
  }

}
