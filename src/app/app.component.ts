import {DeviceService} from './../utils/device.service';
import {isPlatformBrowser} from '@angular/common';
import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {SeoService} from '../utils/seo.service';
import {filter, map, mergeMap} from 'rxjs/operators';
import {LanguageService} from 'src/utils/language.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ai-english-landing';

    cnTitle = 'Ponddy AI English - 厐帝 A I英语'
    twTitle = 'Ponddy AI English - 龎帝 AI 英語'
    jaTitle = 'Ponddy AI English - 龎帝 AI 英語'
    cnDescription = '免费 CEFR 对标口语能力评测！由美国矽谷人工智能研发团队与当地语言专家紧密合作，联手开发出的英语口语学习和测评系统。透过大数据分析技术，筛选出对学习者来说最具实用性的词汇和语言情境，组织成符合 CEFR A1 至 C2 共六个等级的口说能力练习课程，以及能在短时间透过 APP 自动评测出口语能力水准的评测工具，能帮机构整合客制化内容上线，可达成自动评分产出报告，推荐合适学习内容达到查缺补漏效果，可让学习者在最短的时间内突破语言障碍，开口说出梦寐以求的流利英语，也可藉由我们提供的辅助课程随时随地学习正确发音，英语口说更上层楼。'
    twDescription = '免費 CEFR 對標口語能力評測！由美國矽谷人工智能研發團隊與當地語言專家緊密合作，聯手開發出的英語口語學習和測評系統。透過大數據分析技術，篩選出對學習者來說最具實用性的詞彙和語言情境，組織成符合 CEFR A1 至 C2 共六個等級的口說能力練習課程，以及能在短時間透過 APP 自動評測出口語能力水準的評測工具，能幫機構整合客制化內容上線，可達成自動評分產出報告，推薦合適學習內容達到查缺補漏效果，可讓學習者在最短的時間內突破語言障礙，開口說出夢寐以求的流利英語，也可藉由我們提供的輔助課程隨時隨地學習正確發音，英語口說更上層樓。'
    jaDescription = '龎帝 AI 英語的智能課程安排系統為您安排掌握流利英語口說的捷徑, 每天練習 5 句口說, 一個月達到接近母語人士的流利水準! 龎帝 AI 英語內建豐富的課程資料庫, 擁有高達 1,278 個高頻常用詞彙, 1,267 個常用的詞組, 共 1,140 主題式迷你課程, 碎片式課程安排讓您隨時隨地輕鬆無負擔學習, 透過智能進度追蹤, 每天都能看到自己的進步!'

    constructor(@Inject(PLATFORM_ID) private platformId: any,
                public device: DeviceService,
                private router: Router,
                private seoService: SeoService,
                private activatedRoute: ActivatedRoute,
                private languageService: LanguageService) {
    }


    public ngOnInit(): void {
        this.seoService.initMetaData()
        this.router.events.pipe(
            filter(e => e instanceof NavigationEnd),
            map(e => this.activatedRoute),
            map((route) => {
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            }),
            filter((route) => route.outlet === 'primary'),
            mergeMap((route) => route.data),
        ).subscribe((data: any) => {

            console.log(this.languageService.language)
            switch (this.languageService.language) {
                case 'zh-tw':
                    data.seo.title = this.twTitle
                    data.seo.metaTags[0].content = this.twDescription
                    break
                case 'zh-cn':
                    data.seo.title = this.cnTitle
                    data.seo.metaTags[0].content = this.cnDescription
                    break
                case 'ja':
                    data.seo.title = this.jaTitle
                    data.seo.metaTags[0].content = this.jaDescription
                    break
            }

            const seoData = data.seo;
            this.seoService.updateTitle(seoData.title);
            this.seoService.updateMetaTags(seoData.metaTags);
            // this.metaService.updateTag()
        });
        this.getParamsToken()
        // this.router.navigate(['home']);

    }

    public getParamsToken() {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token')
        if (token) {
            localStorage.setItem('token', token)
            if (window.location.search && !params.get('action')) {
                // remove search at url
                window.location.href = window.location.href.split('?')[0]
            }
        }
    }
}
