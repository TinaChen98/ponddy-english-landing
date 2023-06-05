import {Component, OnInit} from '@angular/core';
import {IgService} from "./service/ig.service";

@Component({
    selector: 'app-ig-campaign',
    templateUrl: './ig-campaign.component.html',
    styleUrls: ['./ig-campaign.component.scss']
})
export class IgCampaignComponent implements OnInit {
    user = {};

    constructor(private igService: IgService) {
    }

    ngOnInit(): void {
        const params = new URLSearchParams(location.search);
        const code = params.get('code');
        console.log(code);
        if (code) {
            this.igService.exchangeCodeForToken(code)
                .subscribe(res => this.user = res);
        } else {
            // location.href = 'https://www.instagram.com/oauth/authorize?client_id=223609436529088&redirect_uri=https://english.ponddy.com/ig_campaign/&scope=user_profile,user_media&response_type=code'
        }


    }

}
