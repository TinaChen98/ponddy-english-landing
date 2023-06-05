import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponent} from './landing.component';
import {RouterModule, Routes} from '@angular/router';
import {OpenComponent} from './open/open.component';
import {CardComponent} from './card/card.component';
import {TopicsComponent} from './topics/topics.component';
import {FreeComponent} from './free/free.component';
import {ShareModule} from '../../components/share.module';
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
    {path: '', component: LandingComponent},
];

@NgModule({
    declarations: [LandingComponent, OpenComponent, CardComponent, TopicsComponent, FreeComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        ShareModule,
    ]
})

export class LandingModule {
}
