import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {environment} from "../environments/environment";

const routes: Routes = [
  {path: '', loadChildren: () => import('./landing-two/landing-two.module').then(m => m.LandingTwoModule), data: {
    seo: {
      title: 'Ponddy AI English - 龎帝AI英語',
      metaTags: [
        { name: 'description', content: '龎帝AI英語的智能課程安排系統為您安排掌握流利英語口說的捷徑, 每天練習5句口說, 一個月達到接近母語人士的流利水準! 龎帝AI英語內建豐富的課程資料庫, 擁有高達 1,278 個高頻常用詞彙, 1,267 個常用的詞組, 共 1,140 主題式迷你課程, 碎片式課程安排讓您隨時隨地輕鬆無負擔學習, 透過智能進度追蹤, 每天都能看到自己的進步!'},
        { property: 'og:title', content: 'Ponddy AI English - 龎帝AI英語' },
        { property: 'og:description', content: '龎帝AI英語的智能課程安排系統為您安排掌握流利英語口說的捷徑, 每天練習5句口說, 一個月達到接近母語人士的流利水準! 龎帝AI英語內建豐富的課程資料庫, 擁有高達 1,278 個高頻常用詞彙, 1,267 個常用的詞組, 共 1,140 主題式迷你課程, 碎片式課程安排讓您隨時隨地輕鬆無負擔學習, 透過智能進度追蹤, 每天都能看到自己的進步!' },
        { property: 'og:image', content: './assets/images/first-screen_hero_img.png' },
        { property: 'og:url', content: environment.appUrl },
      ]
    }
  }},

  {path: 'ig_campaign', loadChildren: () => import('./ig-campaign/ig-campaign.module').then(m => m.IgCampaignModule), data: {
      seo: {
        title: 'Ponddy AI English - 龎帝AI英語',
        metaTags: [
          { name: 'description', content: '龎帝AI英語的智能課程安排系統為您安排掌握流利英語口說的捷徑, 每天練習5句口說, 一個月達到接近母語人士的流利水準! 龎帝AI英語內建豐富的課程資料庫, 擁有高達 1,278 個高頻常用詞彙, 1,267 個常用的詞組, 共 1,140 主題式迷你課程, 碎片式課程安排讓您隨時隨地輕鬆無負擔學習, 透過智能進度追蹤, 每天都能看到自己的進步!'},
          { property: 'og:title', content: 'Ponddy AI English - 龎帝AI英語' },
          { property: 'og:description', content: '龎帝AI英語的智能課程安排系統為您安排掌握流利英語口說的捷徑, 每天練習5句口說, 一個月達到接近母語人士的流利水準! 龎帝AI英語內建豐富的課程資料庫, 擁有高達 1,278 個高頻常用詞彙, 1,267 個常用的詞組, 共 1,140 主題式迷你課程, 碎片式課程安排讓您隨時隨地輕鬆無負擔學習, 透過智能進度追蹤, 每天都能看到自己的進步!' },
          { property: 'og:image', content: 'https://ponddy-ai-english.s3-us-west-2.amazonaws.com/landing/mobile/first-screen_hero_img.png' },
          { property: 'og:url', content: environment.appUrl },
        ]
      }
    }},
  {path: '**', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
