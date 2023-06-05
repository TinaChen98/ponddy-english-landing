import { LanguageService } from '../../../utils/language.service';
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-email-fail',
  templateUrl: './email-fail.component.html',
  styleUrls: ['./email-fail.component.scss']
})
export class EmailFailComponent implements OnInit {
  document: any;

  constructor(public dialogRef: MatDialogRef<EmailFailComponent>,@Inject(DOCUMENT) document: Document, private pageScrollService: PageScrollService,) {
    this.document = document;
  }

  ngOnInit(): void {
  }
  
  smoothScroll() {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '#contact-us',
      duration: 1,
      scrollOffset: 60
    });
  }

}
