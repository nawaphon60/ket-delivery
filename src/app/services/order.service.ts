import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const api_url = 'https://api2.ketshopweb.com/api/v1'
const _header = {
  Authorization: 'Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImN1c19pZCI6MzA0OSwidXNlcm5hbWUiOiJ3ZWJtYXN0ZXIiLCJ1c2VyX3JvbGUiOiJ3ZWJtYXN0ZXIiLCJkb21haW4iOiJzdXNoaWxpdHRsZWRvZy5rZXRzaG9wd2ViLmNvbSIsIm5hbWUiOiLguIvguLnguIrguLTguJnguLAiLCJsYXN0bmFtZSI6IuC4o-C5iOC4suC4h-C4reC4p-C4leC4suC4o-C4meC4sCIsImlhdCI6MTYwNTU4MTc5MywiZXhwIjoxNjA1NjEwNTkzfQ.qCOnKC0tJfQwFs3jfFElAwP4PE9SXCzRM_chNZMwsbRQl8srMbfewSgC9MYuYMjm--NfPcdUhNtf3yTbS7ZTS51vjzHA9papS6FP5EfV4B-q-pWYXVEZ3ZM2x9F4N7fl-xFIHKc6twqHCAvZNO43C4gfm7X-aF_h2rnBxWGVnLhUYwu6wkczRHqYHRoxaiOWqk8-MUWRuoMf-QGVSYCUPMy8qJJLDptUu6j4kzfKcG3Mra73SrTZDRyhhR2BwOyrXojRNuhvfpLOzHzyZhQ3O4UHD7UyGiToSkoRcrEovJq2m_vTaHcXtQdovEKZkcaVna1KnoLDxtifSbSbVzG9qw'
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private _http: HttpClient
  ) { }

  getOrderByCode(ordercode: string){
    return this._http.get(`${api_url}/order/${ordercode}?type=ordercode`,{
      headers: _header
    }).toPromise()
  }

}
