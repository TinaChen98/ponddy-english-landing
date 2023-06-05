import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecaptchaErrorParameters } from 'ng-recaptcha';
import { EmailSuccessComponent } from 'src/components/popup/email-success/email-success.component';
import { EmailFailComponent } from 'src/components/popup/email-fail/email-fail.component';
import { LoadingComponent } from 'src/components/loading/loading.component';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'landing-two-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  mobile = true
  web = false
  courseWidth: number
  courseHeight: number
  g_recaptcha = false
  model: any
  email: any
  questions: any
  onDisabled = false
  reCaptcha = false
  eForm!: Event;

  checkoutForm = this.formBuilder.group({
    title: 'AI English - User feedback',
    source: 'Ponddy Ai English landing',
    sourceUrl: 'https://english.ponddy.com/',
    email: '',
    questions: '',
    fieldEmail: 'Email: ',
    fieldQuestions: 'Comments or Questions: '
  });

  constructor(public dialog: MatDialog, private formBuilder: FormBuilder,) {}

  ngOnInit(): void {
  }

  public captchaResponse = "";
  public resolved(captchaResponse: string): void {
    const newResponse = captchaResponse
      ? `${captchaResponse.substr(0, 7)}...${captchaResponse.substr(-7)}`
      : captchaResponse;
    this.captchaResponse += `${JSON.stringify(newResponse)}\n`;
    this.reCaptcha = true
    this.sendEmail(this.eForm)
  }

  public onError(errorDetails: RecaptchaErrorParameters): void {
    this.captchaResponse += `ERROR; error details (if any) have been logged to console\n`;
    console.log(`reCAPTCHA error encountered; details:`, errorDetails);
    this.reCaptcha = false
  }

  onEmail(event: any) {
    var text = event.target.value.split('@')
    if(text.length>1 && text[1]!='') {
      this.email = true
    } else {
      this.email = false
    }
    if(this.email && this.questions) {
      this.onDisabled = true
    } else {
      this.onDisabled = false
    }
  }

  onQuestions(event: any) {
    this.questions = event.target.value;
    if(event.target.value) {
      this.questions = true
    } else {
      this.questions = false
    }
    if(this.email && this.questions) {
      this.onDisabled = true
    } else {
      this.onDisabled = false
    }
  }


  public sendEmail(e: Event) {
    this.dialog.open(LoadingComponent);
    // if(this.reCaptcha) {
      e.preventDefault();
      emailjs.send('service_x9fj97d', 'template_3ea1g51', this.checkoutForm.value, 'user_I9kbNANU0UDJQZwgggq3p')
          .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
          this.dialog.closeAll();
          this.dialog.open(EmailSuccessComponent);
        }, (error) => {
          console.log(error.text);
          this.dialog.closeAll();
          this.dialog.open(EmailFailComponent);
        });
    // } else {
    //   this.eForm = e
    // }
  }
}