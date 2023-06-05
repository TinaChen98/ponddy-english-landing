import {Injectable} from '@angular/core';
import {Meta, MetaDefinition, Title} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private title: Title, private meta: Meta) {
  }

  initMetaData(){
    this.title.setTitle('Ponddy AI English - 龎帝 AI 英語')
    this.meta.addTags([
      {
        name: 'keywords',
        content: 'learning, education, ai, chinese, mandarin, tutors, reader, ponddy, in few minutes, quickly learn, study, self-study, online'
      },
      {
        name: 'description',
        content: '龎帝 AI 英語的智能課程安排系統為您安排掌握流利英語口說的捷徑, 每天練習 5 句口說, 一個月達到接近母語人士的流利水準! 龎帝 AI 英語內建豐富的課程資料庫, 擁有高達 1,278 個高頻常用詞彙, 1,267 個常用的詞組, 共 1,140 主題式迷你課程, 碎片式課程安排讓您隨時隨地輕鬆無負擔學習, 透過智能進度追蹤, 每天都能看到自己的進步!'
      },
      {name: 'robots', content: 'index, follow'},
      {name: 'copyright', content: 'Ponddy Education Inc'},
      {name: 'author', content: 'Ponddy Education Inc'},
      {name: 'classification', content: 'learning, chinese'}
    ]);
  }

  updateTitle(title: string) {
    this.title.setTitle(title);
  }

  updateOgUrl(url: string) {
    this.meta.updateTag({name: 'og:url', content: url})
  }

  updateDescription(desc: string) {
    this.meta.updateTag({name: 'description', content: desc})
  }

  updateMetaTags(metaTags: MetaDefinition[]) {
    metaTags.forEach(m => this.meta.updateTag(m));
  }
}
