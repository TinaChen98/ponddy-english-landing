import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import{ init } from '@emailjs/browser';
init("user_I9kbNANU0UDJQZwgggq3p");

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        NgxPageScrollCoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
