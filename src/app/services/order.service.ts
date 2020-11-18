import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const api_url = 'https://api2.ketshopweb.com/api/v1'
const _header = {
  Authorization: 'Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImN1c19pZCI6MzA0OSwidXNlcm5hbWUiOiJ3ZWJtYXN0ZXIiLCJ1c2VyX3JvbGUiOiJ3ZWJtYXN0ZXIiLCJkb21haW4iOiJzdXNoaWxpdHRsZWRvZy5rZXRzaG9wd2ViLmNvbSIsIm5hbWUiOiLguIvguLnguIrguLTguJnguLAiLCJsYXN0bmFtZSI6IuC4o-C5iOC4suC4h-C4reC4p-C4leC4suC4o-C4meC4sCIsImlhdCI6MTYwNTY2ODg0NCwiZXhwIjoxNjA1Njk3NjQ0fQ.HLM5d65oMwYClb4mTNgxpWBWavUEWb1Z11nTdjWJaw1krgn2lrB_UHbu2jK1bGHI3pcu7F3QMWcQn6fJWrTdHggG-TxHCBPTOO25o114Rg68sBJZg5Th5lvUGeZ5YLYsuxMgF6_HUsz5M7XNCx-MGz0vuYQyhxTnf4KnIZ4lALokSFrt93nRcdSDWnmn_FBBzXm7-0IZVYP1YzMw1RsGIikbc1wyn6bqNuXZaKNTB0aUwUB36yxOzeHj_lC2_tDggPsYlBuDutPEaecClRK1FjaSJ-77Lf9yYgN5BzZlhiJyfWX7OffwHzOwmA8XkAHtqE6DHJcPbmB9Ohv-NQt05w'
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
