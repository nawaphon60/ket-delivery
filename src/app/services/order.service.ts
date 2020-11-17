import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const api_url = 'https://api2.ketshopweb.com/api/v1'
const _header = {
  Authorization: 'Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImN1c19pZCI6MzA0OSwidXNlcm5hbWUiOiJ3ZWJtYXN0ZXIiLCJ1c2VyX3JvbGUiOiJ3ZWJtYXN0ZXIiLCJkb21haW4iOiJzdXNoaWxpdHRsZWRvZy5rZXRzaG9wd2ViLmNvbSIsIm5hbWUiOiLguIvguLnguIrguLTguJnguLAiLCJsYXN0bmFtZSI6IuC4o-C5iOC4suC4h-C4reC4p-C4leC4suC4o-C4meC4sCIsImlhdCI6MTYwNTYxMTgzMiwiZXhwIjoxNjA1NjQwNjMyfQ.wmzSW61Xd7aDNxs4DvhyhjPnvUsGvictwsCkrWY6ooI98eRbeeEl62eruS-G-R0pd95bG6Hkcle-mb-4l_ES96mzWA8okgVYq4v5QG4OdsLLOIfzaB4IfsrVYkRmgq5yZqIYPuBbm6tPZ7eOjjeHh4_wMoJvs15VKM2tg607N17Ca23tP22BNWY_x3NbtG6Owj2yLzRLzBrt8Itgjvbnf_p-4XtvVQrfM0tjUVSH-pmt46SZFjfat7btigwkO7S4mUf73UnpRF6TQhdERBaR6X9N3p_AIw_C82jBhPDQZAfhs-TI-Jk20y1CpEHORuoM1JQ-ygLYVQeOw9AXCZciKg'
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
