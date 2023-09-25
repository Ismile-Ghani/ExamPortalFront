import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  public getQuestions(qId:any){
    return this.http.get(`${baseUrl}/question/quiz/forAdmin/${qId}`)
  }

  public addQuestions(question:any){
    return this.http.post(`${baseUrl}/question/`,question)
  }

  public deleteQuestions(qId:any){
    return this.http.delete(`${baseUrl}/question/${qId}`)
  }

  

}
