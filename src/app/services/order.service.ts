import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const api_url = 'https://api2.ketshopweb.com/api/v1'
const _header = {
  Authorization: 'Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImN1c19pZCI6MzA0OSwidXNlcm5hbWUiOiJ3ZWJtYXN0ZXIiLCJ1c2VyX3JvbGUiOiJ3ZWJtYXN0ZXIiLCJkb21haW4iOiJzdXNoaWxpdHRsZWRvZy5rZXRzaG9wd2ViLmNvbSIsIm5hbWUiOiLguIvguLnguIrguLTguJnguLAiLCJsYXN0bmFtZSI6IuC4o-C5iOC4suC4h-C4reC4p-C4leC4suC4o-C4meC4sCIsImlhdCI6MTYwNTc5MDA1OCwiZXhwIjoxNjA1ODE4ODU4fQ.UvDvHFJMF1gXzIWXig7DF6WDAO-DerHL-gvMQdCZx91ss7K8PJ7vV9ip13M6tZf30qH2Wvan7Zh0DpFTgrhCLui9AtHNO8ew797v0BPwHnjGTw0frprdn5moY9WbI3ytEJqV_cSfczq5FVxdVIYmMh7w_xdVi3tfubCXwaejs8QhO8t1bQs0rczCYY-WSmICxC4RAWfmbzAwSjL4dHepRhzclWGMxkmcVOWqzxca-GVQKQ2hDUZpyzAMR5UhKwidsghVptc3WE0yE_38jAX3k_8x7EGyBF0gbSnt_mGIN2dZZWLX9isgl2KnZKBtR8KtoN-uaP8OxY-QnMRG4xkHjA'
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
