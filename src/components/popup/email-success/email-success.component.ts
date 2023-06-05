import { LanguageService } from '../../../utils/language.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-success',
  templateUrl: './email-success.component.html',
  styleUrls: ['./email-success.component.scss']
})
export class EmailSuccessComponent implements OnInit {

  constructor(public languageService: LanguageService) { }

  ngOnInit(): void {
  }

  onClose() {
    location.href = location.href
  }
}
