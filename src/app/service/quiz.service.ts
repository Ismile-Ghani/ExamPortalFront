import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { }

  public getQuiz(){
    return this._http.get(`${baseUrl}/quiz/`)
  }

  public addQuiz(quiz:any){
    return this._http.post(`${baseUrl}/quiz/`,quiz)
  }

  public deleteQuiz(qId:any)
  {
    return this._http.delete(`${baseUrl}/quiz/${qId}`)
  }
}