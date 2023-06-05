import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class IgService {
    baseUrl = 'https://www.instagram.com/oauth/authorize';
    clientId = '223609436529088';
    clientSecret = 'dc7c1e7eec9ea9653314aadb801a15e1';
    redirectUri = 'https://english.ponddy.com/voice-widget/';
    apiUrl = environment.apiUrl

    constructor(private http: HttpClient) {
    }

    exchangeCodeForToken(code): Observable<any> {
        const url = 'http://localhost:3000/exchangeCodeForToken';
        let params = new HttpParams();
        params = params.append('code', code);
        return this.http.post(url, {}, {params: params})
    }
}
