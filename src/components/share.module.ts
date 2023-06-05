import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {HeaderTwoComponent} from './header-two/header-two.component';
import {FooterComponent} from './footer/footer.component';
import {FooterTwoComponent} from './footer-two/footer-two.component';
import {EmailSuccessComponent} from './popup/email-success/email-success.component';
import {EmailFailComponent} from './popup/email-fail/email-fail.component';
import {LoadingComponent} from './loading/loading.component';
import {RouterModule} from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [HeaderComponent, HeaderTwoComponent, FooterComponent, FooterTwoComponent, EmailSuccessComponent, EmailFailComponent, LoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatExpansionModule,
    LazyLoadImageModule,
    IvyCarouselModule,
    MatMenuModule,
    MatDialogModule,
    ReactiveFormsModule,
    RecaptchaModule,
    MatProgressSpinnerModule
  ],

  exports: [HeaderComponent, HeaderTwoComponent, FooterComponent, FooterTwoComponent, EmailSuccessComponent, EmailFailComponent, LoadingComponent]
})
export class ShareModule {
}
