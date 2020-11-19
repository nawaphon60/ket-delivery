import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const api_url = 'https://api2.ketshopweb.com/api/v1'
const _header = {
  Authorization: 'Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImN1c19pZCI6MzA0OSwidXNlcm5hbWUiOiJ3ZWJtYXN0ZXIiLCJ1c2VyX3JvbGUiOiJ3ZWJtYXN0ZXIiLCJkb21haW4iOiJzdXNoaWxpdHRsZWRvZy5rZXRzaG9wd2ViLmNvbSIsIm5hbWUiOiLguIvguLnguIrguLTguJnguLAiLCJsYXN0bmFtZSI6IuC4o-C5iOC4suC4h-C4reC4p-C4leC4suC4o-C4meC4sCIsImlhdCI6MTYwNTc1MjA5NiwiZXhwIjoxNjA1NzgwODk2fQ.dO1ZeyyGe3lgb8_lL-SFUDHnyBNOh4HnPNzpZfRL-FdvJ0SGF1jsVyS67t-K0L6e_Tj1OBO4ffhGkismybJAeZ40BpbZD8R3UUeF4jjbCHH5tZLaHPwcYi2f6uDue0tKblBc2BeLhjSu6-GxAYZ-YfALYzH8KLH4plFge6xZ8_oLhikVEjg55_mjO6a_sS15fQ7FbUtGHitbPNGSlMxm1XbGGd51rxnyrpMo4WLcjlCtOPUqGPlMPoIIhqdG76LEeo5R_EIb_a1Mc2RcCv1eE9zJrpo-A0sZPNdFuRcR7SRExOo5uoxzewfieysZ2FIyT7ssSGPQYcqZGyoQ75yNGg'
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
