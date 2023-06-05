import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'landing-two-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  contentsImgW = './assets/images/landing-two/feature-5-w.png'

  contents = [
    { id: 1, bgColor: '#FFFFFF', height: '350px', icon: './assets/images/landing-two/feature-icon-1.svg', img: './assets/images/landing-two/feature-1.svg', title1: '', title2: '培養雙語口語能力', subhead: 'CEFR (A1 ~ C2) 課程及 AI 輔助練習', description: '根據調查，80% 的學生即使到了大學，都無法達到 CEFR 中級 B1 的口語水平，龎帝的課程可透過 AI 即時評分, 可查缺補漏提供合適練習, 並提供即時反饋和課程推薦, 可讓學生在短期內提升口語能力。', contactUs: false },
    { id: 2, bgColor: '#EBF2F5', height: '490px', icon: './assets/images/landing-two/feature-icon-2.svg', img: './assets/images/landing-two/feature-2.png', title1: '', title2: '了解自身英文能力水準', subhead: 'AI 輔助評測', description: '透過 CEFR 的口說能力水準評測工具，可以快速從 A1 至 C2 共六個等級循序漸進測得自身的英語口說能力水準。', contactUs: false },
    { id: 3, bgColor: '#FFFFFF', height: '439px', icon: './assets/images/landing-two/feature-icon-3.svg', img: './assets/images/landing-two/feature-3.png', title1: 'AI 賦能', title2: '升級你現有課程', subhead: '客製化課程 CEFR A1 ~ C2 自動對標', description: '透過龎帝特有的客製化課程服務，可以將您既有的線下課程轉為具有自動 AI 語音評測及學習紀錄儲存的線上課程，開啟無所不學、隨處可學的當代語言學習 APP 大門！', contactUs: true },
    { id: 4, bgColor: '#F5F0EB', height: '524px', icon: './assets/images/landing-two/feature-icon-4.svg', img: './assets/images/landing-two/feature-4.png', title1: '', title2: '即時看到進步幅度, 隨時補強學習更上層樓', subhead: '能力值報告', description: '藉由我們獨家的 AI 智慧評分以 CEFR 各等級詞彙自動對標, APP 可即時告訴您每次發音結果可以看到錯誤的 IPA 解析結果, 並可看到發音矯正的方式, 也可以聽到自身發音與外師標準音檔的比較，每次記錄也都有線上電子證書, 可隨時分享社群。', contactUs: false },
    { id: 5, bgColor: '#FFFFFF', height: '444px', icon: './assets/images/landing-two/feature-icon-5.svg', img: './assets/images/landing-two/feature-5.png', title1: '', title2: '延伸及增強學習成果', subhead: 'IPA 發音教學推薦, 相關例句及對話推薦', description: '龎帝獨家豐富的課件庫，提供包含 IPA 子音及母音超過 40 個由專業外師錄製的標準發音教學影片，可引導學習正確的發音，課件庫也包含了豐富的生詞、生詞配圖、例句、情境對話等，將會透過後續版本更新逐步提供更豐富的學習推薦內容。', contactUs: false },
  ]

  constructor(private pageScrollService: PageScrollService,
              @Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
  }

  smoothScroll() {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '#contact-us',
      duration: 250,
      scrollOffset: 60
    });
  }
}
