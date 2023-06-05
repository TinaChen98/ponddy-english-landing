import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingTwoComponent } from './landing-two.component';
import {RouterModule, Routes} from '@angular/router';
import {ShareModule} from '../../components/share.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings, RECAPTCHA_SETTINGS } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { DownloadComponent } from './download/download.component';
import { FeatureComponent } from './feature/feature.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

const routes: Routes = [
  {path: '', component: LandingTwoComponent},
];

@NgModule({
  declarations: [LandingTwoComponent, ContactUsComponent, MainComponent, DownloadComponent, FeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ShareModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    ReactiveFormsModule,
    LazyLoadImageModule
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
  ],
})
export class LandingTwoModule { }
