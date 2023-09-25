import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http:HttpClient) { }

  public getCategory(){
    return this._http.get(`${baseUrl}/category/`)
  }

  public addCategory(category:any){
    return this._http.post(`${baseUrl}/category/`,category)
  }

  public deleteCategory(cId:any)
  {
    return this._http.delete(`${baseUrl}/category/${cId}`)
  }
  public updateCategory(data:any){
    return this._http.put(`${baseUrl}/category/`,data)
  }
}
