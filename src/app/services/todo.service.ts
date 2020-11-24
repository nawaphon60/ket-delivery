import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const api_url = 'https://5fb61cd036e2fa00166a4ec1.mockapi.io/api/v1/'


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private _http: HttpClient
  ) { }

  getAll(){
    return this._http.get(`${api_url}/todo_list`).toPromise()
  }

  getById(id: any){
    return this._http.get(`${api_url}/todo_list/${id}`).toPromise()
  }

  deleteById(id: any){
    return this._http.delete(`${api_url}/todo_list/${id}`).toPromise()
  }

  create(data:any){
    return this._http.post(`${api_url}/todo_list`, data).toPromise()
  }

  update(data:any, id: any){
    return this._http.put(`${api_url}/todo_list/${id}`, data).toPromise()
  }

}
