import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {IgCampaignComponent} from './ig-campaign.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const routes: Routes = [
  {path: '', component: IgCampaignComponent},
];

@NgModule({
  declarations: [IgCampaignComponent, SignUpFormComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        MatSelectModule,
    ]
})
export class IgCampaignModule { }
